import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import Groq from 'groq-sdk';
import nodemailer from 'nodemailer';
import { tools, executeTool, ToolName } from './tools';

dotenv.config();

const app = express();
const port = process.env.PORT || 3002;

app.use(cors({
  origin: process.env.ALLOWED_ORIGIN || 'https://juliowebmaster.com',
}));
app.use(express.json());

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

const SYSTEM_PROMPT = `You are an AI assistant on Julio Sandoval's portfolio website. Your role is to help visitors learn about Julio's skills, experience, and projects in a friendly, conversational way.

Use the available tools to fetch accurate information when answering questions. Keep responses concise — this is a chat widget, not a document. 2-4 sentences is ideal unless the visitor asks for more detail.

Guidelines:
- Be friendly and professional
- Always use tools to get real data rather than guessing
- When mentioning projects, include the live URL so visitors can check them out
- If asked how to contact Julio, provide his email and mention the /contact page
- Don't fabricate anything — use the tools`;

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

app.post('/api/chat', async (req, res) => {
  const { message, history = [] }: { message: string; history: ChatMessage[] } = req.body;

  if (!message?.trim()) {
    return res.status(400).json({ error: 'Message is required' });
  }

  try {
    const messages: Groq.Chat.ChatCompletionMessageParam[] = [
      ...history.map(m => ({ role: m.role, content: m.content })),
      { role: 'user' as const, content: message },
    ];

    let response = await groq.chat.completions.create({
      model: 'llama-3.3-70b-versatile',
      messages,
      tools,
      tool_choice: 'auto',
    });

    // Agentic loop — keep going until the model stops calling tools
    while (response.choices[0].finish_reason === 'tool_calls') {
      const assistantMessage = response.choices[0].message;
      const toolCalls = assistantMessage.tool_calls!;

      messages.push(assistantMessage);

      for (const toolCall of toolCalls) {
        const result = executeTool(toolCall.function.name as ToolName);
        messages.push({
          role: 'tool',
          tool_call_id: toolCall.id,
          content: result,
        });
      }

      response = await groq.chat.completions.create({
        model: 'llama-3.3-70b-versatile',
        messages,
        tools,
        tool_choice: 'auto',
      });
    }

    const text = response.choices[0].message.content || '';
    res.json({ response: text });
  } catch (error) {
    console.error('Chat error:', error);
    res.status(500).json({ error: 'Something went wrong. Please try again.' });
  }
});

app.post('/api/send-email', async (req, res) => {
  const { firstName, email, message } = req.body;

  if (!firstName?.trim() || !email?.trim() || !message?.trim()) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: Number(process.env.MAIL_PORT) || 2525,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${firstName}" <${email}>`,
      to: process.env.MAIL_TO,
      subject: `Portfolio contact from ${firstName}`,
      text: message,
      html: `<p><strong>From:</strong> ${firstName} (${email})</p><p>${message}</p>`,
    });

    res.json({ success: 'OK' });
  } catch (error) {
    console.error('Mail error:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

app.listen(port, () => {
  console.log(`Portfolio server running on port ${port}`);
});
