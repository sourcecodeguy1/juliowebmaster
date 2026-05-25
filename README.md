# juliowebmaster.com

Personal portfolio website for Julio Sandoval — Senior Full-Stack Developer.

Live at **[juliowebmaster.com](https://juliowebmaster.com)**

---

## Stack

### Client
- React 18 (Create React App)
- Tailwind CSS
- Framer Motion
- Lucide React
- Axios

### Server
- Node.js + Express + TypeScript
- Groq SDK (`llama-3.3-70b-versatile`) — AI chat assistant with tool use
- Nodemailer — contact form email delivery

### Infrastructure
- Docker (multi-stage builds)
- Nginx (static file serving)
- Traefik (reverse proxy + SSL)
- GitHub Actions (CI/CD — build, push to Docker Hub, deploy to Vultr)

---

## Project Structure

```
juliowebmaster/
├── client/          # React frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── NavbarComponent/
│   │   │   ├── HomeComponent/      # Hero + project cards
│   │   │   ├── ResumeComponent/    # Timeline + skills sidebar
│   │   │   ├── ContactComponent/   # Contact form
│   │   │   └── ChatWidget/         # AI chat assistant
│   │   └── index.js
│   ├── Dockerfile
│   └── tailwind.config.js
└── server/          # Express API
    ├── src/
    │   ├── index.ts         # Express app, /api/chat + /api/send-email
    │   ├── tools.ts         # Groq tool definitions
    │   └── portfolio-data.ts
    └── Dockerfile
```

---

## Local Development

### Client
```bash
cd client
npm install
npm start       # http://localhost:3000
```

### Server
```bash
cd server
cp .env.example .env   # fill in GROQ_API_KEY, mail credentials
npm install
npm run dev     # http://localhost:3002
```

---

## CI/CD

Pushing to `master` triggers GitHub Actions:
1. Builds and pushes Docker images to Docker Hub
2. SSHs into the Vultr server and force-recreates both containers

---

## Features

- **AI Chat Widget** — floating assistant powered by Groq (Llama 3.3 70B) with MCP-style tool use to answer questions about skills, experience, and projects
- **Contact Form** — sends email via Nodemailer/Mailtrap
- **Dark Theme** — Tailwind CSS with indigo/cyan accent palette
- **Animated Hero** — Framer Motion entrance animations
- **Resume Timeline** — full work history without pagination
