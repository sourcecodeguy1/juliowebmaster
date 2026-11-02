import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import axios from 'axios';

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const SemanticContact = () => {
  const [input, setInput] = useState({ firstname: '', email: '', message: '', website: '' });
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({ loading: false, success: false, error: false });

  const validate = (name, value) => {
    if (name === 'firstname' && !value.trim()) return 'Please enter your first name.';
    if (name === 'email') {
      if (!value) return 'Please enter your email.';
      if (!isValidEmail(value)) return 'Please enter a valid email address.';
    }
    if (name === 'message' && !/\p{L}/u.test(value)) return 'Please describe your project using words, rather than only numbers or punctuation.';
    return '';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: validate(name, value) }));
  };

  const isValid =
    input.firstname.trim() &&
    /\p{L}/u.test(input.message) &&
    isValidEmail(input.email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValid || form.loading) return;
    setForm({ loading: true, success: false, error: false });
    try {
      const { data } = await axios.post('/api/send-email', {
        firstName: input.firstname,
        email: input.email,
        message: input.message,
        website: input.website,
      });
      if (data.success === 'OK') {
        setForm({ loading: false, success: true, error: false });
        setInput({ firstname: '', email: '', message: '', website: '' });
      } else {
        setForm({ loading: false, success: false, error: 'Your message could not be sent. Your text is still here; please try again later or email juliowebmaster1@gmail.com directly.' });
      }
    } catch (error) {
      const detail = error.response?.data?.error;
      setForm({ loading: false, success: false, error: typeof detail === 'string' ? detail : 'Your message could not be sent. Your text is still here; please try again later or email juliowebmaster1@gmail.com directly.' });
    }
  };

  const fieldClass = (field) =>
    `w-full bg-[#111118] border ${
      errors[field] ? 'border-red-500/40 focus:border-red-500/60' : 'border-white/5 focus:border-indigo-500/50'
    } rounded-xl px-4 py-3 text-slate-100 text-sm placeholder-slate-700 outline-none focus:ring-1 focus:ring-indigo-500/20 transition-all`;

  return (
    <div className="bg-[#0a0a0f] min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-slate-100 mb-2">Get In Touch</h1>
          <p className="text-slate-500 text-sm mb-10">
            Need help building or maintaining a website? I'd love to hear about your project.
          </p>

          <form
            onSubmit={handleSubmit}
            className="bg-[#16161e] border border-white/5 rounded-2xl p-8 space-y-6"
          >
            <div hidden aria-hidden="true">
              <label htmlFor="contact-website">Leave this field empty</label>
              <input id="contact-website" name="website" value={input.website} onChange={handleChange} tabIndex={-1} autoComplete="off" />
            </div>
            <div>
              <label htmlFor="contact-name" className="block text-xs font-medium text-slate-500 uppercase tracking-widest mb-2">
                First Name
              </label>
              <input
                type="text"
                id="contact-name"
                maxLength={100}
                required
                aria-invalid={Boolean(errors.firstname)}
                aria-describedby={errors.firstname ? "contact-name-error" : undefined}
                name="firstname"
                value={input.firstname}
                onChange={handleChange}
                placeholder="Your first name"
                className={fieldClass('firstname')}
                data-testid="first-name"
              />
              {errors.firstname && (
                <p id="contact-name-error" className="mt-1.5 text-xs text-red-400">{errors.firstname}</p>
              )}
            </div>

            <div>
              <label htmlFor="contact-email" className="block text-xs font-medium text-slate-500 uppercase tracking-widest mb-2">
                Email
              </label>
              <input
                type="email"
                id="contact-email"
                maxLength={254}
                required
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "contact-email-error" : undefined}
                name="email"
                value={input.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className={fieldClass('email')}
                data-testid="email"
              />
              {errors.email && (
                <p id="contact-email-error" className="mt-1.5 text-xs text-red-400">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-xs font-medium text-slate-500 uppercase tracking-widest mb-2">
                Message
              </label>
              <textarea
                id="contact-message"
                maxLength={5000}
                required
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "contact-message-error" : undefined}
                name="message"
                value={input.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows={5}
                className={`${fieldClass('message')} resize-none`}
                data-testid="message"
              />
              {errors.message && (
                <p id="contact-message-error" className="mt-1.5 text-xs text-red-400">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={!isValid || form.loading}
              className="w-full flex items-center justify-center gap-2 py-3 px-6 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 disabled:cursor-not-allowed text-white text-sm font-medium rounded-xl transition-all shadow-lg shadow-indigo-500/20"
            >
              {form.loading ? (
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <><Send size={14} /> Send Message</>
              )}
            </button>

            {form.success && (
              <div
                role="status"
                data-testid="success-message"
                className="flex items-center gap-3 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400 text-sm"
              >
                <CheckCircle size={15} />
                Message accepted for sending. I'll get back to you soon.
              </div>
            )}
            {form.error && (
              <div role="alert" className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">
                <AlertCircle size={15} />
                {form.error}
              </div>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default SemanticContact;
