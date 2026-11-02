import express from 'express';
import nodemailer from 'nodemailer';

const RECIPIENT = 'juliowebmaster1@gmail.com';
const SENDER = 'website@juliowebmaster.com';
const PROJECT_ERROR = 'Please describe your project using words, rather than only numbers or punctuation.';
const DELIVERY_ERROR = 'Your message could not be sent. Your text is still here; please try again later or email juliowebmaster1@gmail.com directly.';

export function mailConfig(env: NodeJS.ProcessEnv) {
  const production = env.NODE_ENV === 'production';
  if (production && (env.MAIL_PROVIDER !== 'resend' || env.MAIL_DOMAIN_VERIFIED !== 'true')) {
    throw new Error('Production requires Resend and a verified juliowebmaster.com domain');
  }
  if (!production && env.MAIL_PROVIDER !== 'mailtrap') throw new Error('Development requires Mailtrap sandbox');
  if (!env.MAIL_USER || !env.MAIL_PASS) throw new Error('Missing SMTP credentials');
  const host = production ? 'smtp.resend.com' : 'sandbox.smtp.mailtrap.io';
  if (production && env.MAIL_USER !== 'resend') throw new Error('Invalid Resend SMTP username');
  return {
    host, port: production ? 465 : 2525, secure: production,
    requireTLS: true,
    auth: { user: env.MAIL_USER, pass: env.MAIL_PASS },
    connectionTimeout: 10000, greetingTimeout: 10000, socketTimeout: 20000,
  };
}

export function validateContact(body: unknown): string | undefined {
  if (!body || typeof body !== 'object' || Array.isArray(body)) return 'Please complete all fields.';
  const { firstName, email, message, website } = body as Record<string, unknown>;
  if (website !== undefined && (typeof website !== 'string' || website !== '')) return 'Unable to submit this form. Please leave the website field empty.';
  if (typeof firstName !== 'string' || !firstName.trim() || firstName.length > 100 || /[\r\n\x00-\x1f\x7f]/.test(firstName)) return 'Please enter a name of 100 characters or fewer.';
  if (typeof email !== 'string' || email.length > 254 || /[\x00-\x20\x7f<>]/.test(email) || !/^[^@]+@[^@.]+(?:\.[^@.]+)+$/u.test(email)) return 'Please enter a valid email address of 254 characters or fewer.';
  if (typeof message !== 'string' || !message.trim() || message.length > 5000) return 'Please enter a project description of 5,000 characters or fewer.';
  if (!/\p{L}/u.test(message)) return PROJECT_ERROR;
}

// Per-process limits for the existing single API container. Never trust client-supplied IP headers.
export function contactLimiter(now = Date.now): express.RequestHandler {
  const clients = new Map<string, { count: number; expires: number }>();
  let daily = { count: 0, expires: now() + 86400000 };
  return (req, res, next) => {
    const time = now();
    for (const [key, value] of clients) if (value.expires <= time) clients.delete(key);
    if (daily.expires <= time) daily = { count: 0, expires: time + 86400000 };
    const key = req.ip || req.socket.remoteAddress || 'unknown';
    const client = clients.get(key) || { count: 0, expires: time + 15 * 60000 };
    if (daily.count >= 80 || client.count >= 5 || (!clients.has(key) && clients.size >= 10000)) {
      res.setHeader('Retry-After', String(Math.max(1, Math.ceil(((daily.count >= 80 ? daily.expires : client.expires) - time) / 1000))));
      res.status(429).json({ error: 'Too many attempts. Please wait before trying again, or email juliowebmaster1@gmail.com directly.' });
      return;
    }
    client.count++;
    daily.count++;
    clients.set(key, client);
    next();
  };
}

type Send = (mail: nodemailer.SendMailOptions) => Promise<{ accepted?: unknown[]; rejected?: unknown[] }>;
export function contactHandler(send: Send): express.RequestHandler {
  return async (req, res) => {
    const validationError = validateContact(req.body);
    if (validationError) { res.status(400).json({ error: validationError }); return; }
    const { firstName, email, message } = req.body;
    try {
      const result = await send({
        from: { name: 'Julio Webmaster Portfolio', address: SENDER },
        to: RECIPIENT,
        replyTo: email,
        subject: `Portfolio inquiry from ${firstName.trim()}`,
        // Plain text avoids interpreting visitor content as HTML.
        text: `Name: ${firstName.trim()}\nEmail: ${email}\n\n${message}`,
      });
      if (!result.accepted?.some(address => String(address).toLowerCase() === RECIPIENT) || result.rejected?.length) {
        throw new Error('Recipient not accepted');
      }
      res.json({ success: 'OK' });
    } catch {
      // SMTP errors can contain auth details, addresses, and message content. Never log them raw.
      console.error('contact_delivery_failed', { provider: process.env.MAIL_PROVIDER === 'resend' ? 'resend' : 'mailtrap' });
      res.status(503).json({ error: DELIVERY_ERROR });
    }
  };
}

export async function sendContactMail(mail: nodemailer.SendMailOptions) {
  const transport = nodemailer.createTransport(mailConfig(process.env));
  return transport.sendMail(mail);
}
