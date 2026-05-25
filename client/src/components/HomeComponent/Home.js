import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'GitHub User Search',
    image: '/project-images/Github-User_Search.png',
    description: 'Connects to the GitHub API to search any username. Built as a Frontend Mentor challenge.',
    tech: ['React', 'Docker', 'GitHub Actions'],
    live: 'https://github-user-search.juliowebmaster.com/',
    github: 'https://github.com/sourcecodeguy1/user-search-github',
  },
  {
    title: 'Job Listings',
    image: '/project-images/Job-Listings.png',
    description: 'A filterable job listings app where users can click categories to filter results. Frontend Mentor challenge.',
    tech: ['React', 'Styled Components', 'Docker'],
    live: 'https://jobs.juliowebmaster.com/',
    github: 'https://github.com/sourcecodeguy1/jobs-listing',
  },
  {
    title: 'CRM Portfolio',
    image: '/project-images/crm.png',
    description: 'Full-stack CRM with authentication, user registration, and a dashboard. Angular frontend + Laravel REST API.',
    tech: ['Angular', 'Laravel', 'MySQL', 'Docker'],
    live: 'https://crm-client.juliowebmaster.com/login',
    github: 'https://github.com/sourcecodeguy1/crm-portfolio',
  },
  {
    title: 'Stripe Payment Demo',
    image: '/project-images/stripe-api.png',
    description: 'Full-stack payment integration with React pricing page, Laravel API backend, PaymentIntents and webhook handling.',
    tech: ['React', 'TailwindCSS', 'Laravel', 'Stripe'],
    live: 'https://stripe.juliowebmaster.com/',
    github: 'https://github.com/sourcecodeguy1/stripe-payment-demo',
  },
  {
    title: 'Analytics SaaS',
    image: '/project-images/analytics-saas.png',
    description: 'Full-stack SaaS analytics platform with Stripe subscription billing, Pro/Free tier management, and webhook-driven subscription lifecycle.',
    tech: ['React', 'Vite', 'TailwindCSS', 'shadcn/ui', 'Laravel', 'Stripe'],
    live: 'https://analytics.juliowebmaster.com/',
    github: 'https://github.com/sourcecodeguy1/analytics-saas',
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const ProjectCard = ({ project }) => (
  <motion.div
    variants={cardVariant}
    className="group bg-[#16161e] border border-white/5 rounded-2xl overflow-hidden hover:border-indigo-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/5 flex flex-col"
  >
    <div className="overflow-hidden h-48 bg-[#111118]">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
      />
    </div>
    <div className="p-6 flex flex-col flex-1">
      <h3 className="text-base font-semibold text-slate-100 mb-2">{project.title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>
      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tech.map((t) => (
          <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            {t}
          </span>
        ))}
      </div>
      <div className="flex gap-3">
        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm rounded-lg transition-colors font-medium"
        >
          <ExternalLink size={13} /> Visit Site
        </a>
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1.5 px-4 py-2 border border-white/10 text-slate-300 hover:border-white/20 hover:text-white text-sm rounded-lg transition-all font-medium"
        >
          <Github size={13} /> GitHub
        </a>
      </div>
    </div>
  </motion.div>
);

const Home = () => (
  <div className="bg-[#0a0a0f]">
    {/* Hero */}
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-cyan-600/6 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.span
          className="inline-block text-xs font-mono text-indigo-400 tracking-[0.25em] uppercase mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          Hi, I'm
        </motion.span>

        <motion.h1
          className="text-6xl md:text-8xl font-bold mb-5 leading-none"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Julio Sandoval
          </span>
        </motion.h1>

        <motion.p
          className="text-2xl md:text-3xl text-slate-300 font-light mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.5 }}
        >
          Senior Full-Stack Developer
        </motion.p>

        <motion.p
          className="text-slate-500 max-w-xl mx-auto text-base leading-relaxed mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.5 }}
        >
          Building modern web experiences with React, Angular, Laravel, and Node.js.
          Currently shipping AI-powered tools at RateSpecial Interactive.
        </motion.p>

        <motion.div
          className="flex gap-4 justify-center flex-wrap"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.4 }}
        >
          <Link
            to="/resume"
            className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-medium transition-all shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 text-sm"
          >
            View Resume <ArrowRight size={15} />
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 border border-white/10 text-slate-300 hover:border-indigo-500/40 hover:text-white rounded-xl font-medium transition-all text-sm"
          >
            Get In Touch
          </Link>
        </motion.div>
      </div>
    </section>

    {/* Projects */}
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-100 mb-2">Projects</h2>
          <p className="text-slate-600 text-sm">A selection of things I've built</p>
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        >
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  </div>
);

export default Home;
