import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Github, Linkedin, Briefcase, GraduationCap, Code2 } from 'lucide-react';

const skills = {
  'Front-End': ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Angular', 'Bootstrap', 'TailwindCSS'],
  'Back-End': ['PHP', 'Laravel', 'Node.js', 'Express', 'MySQL'],
  'DevOps': ['Docker', 'CI/CD', 'GitHub Actions', 'Bitbucket'],
  'Tools': ['Git', 'GitHub', 'GitLab', 'Jira'],
  'AI / MCP': ['Groq', 'Claude / Anthropic', 'MCP Servers', 'Tool Use'],
};

const experiences = [
  {
    title: 'Senior Web Developer',
    company: 'RateSpecial Interactive LLC',
    location: 'Remote',
    period: 'Jan 2022 — Present',
    current: true,
    bullets: [
      'Architect and ship production systems end to end across a distributed network of 6+ independent Laravel applications.',
      'Architect and ship a Laravel MCP server exposing internal XPRR link data to AI agents, enabling automated AFID verification across publisher confirmation pages.',
      'Bootstrap an internal Claude plugin registry as the company\'s foundation for AI-assisted developer workflows.',
      'Integrate third-party APIs: Experian (credit reporting), Active Campaign (email marketing), and payment processors.',
      'Migrate flagship app from legacy PHP/jQuery to modern Angular and Laravel.',
      'Optimize PHPUnit test suite from 17 minutes to 3.5 minutes — a 74% reduction in CI time.',
      'Manage automated deployments via Bitbucket CI/CD with code review gating before production.',
    ],
  },
  {
    title: 'Full-Stack PHP Laravel Developer',
    company: 'Merico Inc',
    location: 'Remote',
    period: 'May 2021 — Aug 2021',
    bullets: [
      'Utilized Laravel to create and maintain web pages in an agile team environment.',
      'Used HTML, Blade, CSS, JavaScript, Vue, React, PHP, and MySQL.',
      'Integrated third-party APIs for social media single sign-on on their login page.',
      'Created branches and pull requests in GitLab for code review.',
    ],
  },
  {
    title: 'Full-Stack Software Developer',
    company: 'RMDS Lab',
    location: 'Remote',
    period: 'Sept 2020 — Feb 2021',
    bullets: [
      'Worked in a Drupal 8 & 9 CMS environment.',
      'Translated design mockups to HTML, CSS, JavaScript, jQuery, Ajax, and Bootstrap.',
      'Created numerous Drupal modules and worked on dev server before pushing to production.',
    ],
  },
  {
    title: 'PHP Developer',
    company: 'Emac Multimedia',
    location: 'Remote',
    period: 'Oct 2018 — Jun 2020',
    bullets: [
      'Built a video search feature using the YouTube API.',
      'Used HTML, CSS, JavaScript, jQuery, Ajax, Bootstrap, PHP and MySQL.',
    ],
  },
  {
    title: 'PHP Developer',
    company: 'Legacy College Prep',
    location: 'Remote',
    period: 'Aug 2017 — Jun 2018',
    bullets: [
      'Built an internal staffing portal for teachers and administrators.',
      'Used HTML, CSS, JavaScript, jQuery, Ajax, Bootstrap, PHP, Laravel, and MySQL.',
      'Deployed to production server under the LEMP stack.',
    ],
  },
  {
    title: 'PHP Developer',
    company: 'MossBros Auto Group',
    location: 'Riverside, CA',
    period: 'Jul 2017 — Oct 2018',
    bullets: [
      'Developed internal websites for employee use in an MVC framework.',
      'Used JavaScript, PHP, MySQL, HTML, CSS, jQuery, Bootstrap, and Ajax.',
      'Managed database and collaborated with developers and IT personnel.',
    ],
  },
  {
    title: 'Full-Stack Developer',
    company: 'MohawkPromotions and EventRelations',
    location: 'EchoPark, CA',
    period: 'Oct 2015 — Jun 2017',
    bullets: [
      'Worked on pre-existing code, collaborating with programmers across skill levels.',
      'Implemented new UI and templating with Bootstrap and JavaScript.',
      'Delivered multiple projects under tight deadlines.',
    ],
  },
];

const SkillBadge = ({ label }) => (
  <span className="text-xs px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
    {label}
  </span>
);

const Resume = () => (
  <div className="bg-[#0a0a0f] min-h-screen pt-24 pb-20 px-6">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <h1 className="text-4xl font-bold text-slate-100 mb-2">Resume</h1>
        <p className="text-slate-500 text-sm">Full-stack developer with 8+ years of experience</p>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <aside className="lg:w-72 flex-shrink-0 space-y-5">
          {/* Contact */}
          <div className="bg-[#16161e] border border-white/5 rounded-2xl p-6">
            <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-slate-400">
                <MapPin size={13} className="text-indigo-400 flex-shrink-0" />
                El Monte, CA
              </div>
              <a href="mailto:julio.sandoval.engineer@gmail.com" className="flex items-center gap-3 text-sm text-slate-400 hover:text-indigo-400 transition-colors">
                <Mail size={13} className="text-indigo-400 flex-shrink-0" />
                julio.sandoval.engineer@gmail.com
              </a>
              <a href="https://github.com/sourcecodeguy1" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-slate-400 hover:text-indigo-400 transition-colors">
                <Github size={13} className="text-indigo-400 flex-shrink-0" />
                sourcecodeguy1
              </a>
              <a href="https://www.linkedin.com/in/julio-sandoval-ba587613a/" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-slate-400 hover:text-indigo-400 transition-colors">
                <Linkedin size={13} className="text-indigo-400 flex-shrink-0" />
                Julio Sandoval
              </a>
            </div>
          </div>

          {/* Skills */}
          <div className="bg-[#16161e] border border-white/5 rounded-2xl p-6">
            <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
              <Code2 size={12} className="text-indigo-400" /> Skills
            </h3>
            <div className="space-y-4">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <p className="text-xs text-slate-600 mb-2">{category}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {items.map((s) => <SkillBadge key={s} label={s} />)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="bg-[#16161e] border border-white/5 rounded-2xl p-6">
            <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
              <GraduationCap size={12} className="text-indigo-400" /> Education
            </h3>
            <p className="text-sm font-medium text-slate-200 mb-1">Santa Monica College</p>
            <p className="text-xs text-slate-600 mb-3">Santa Monica, CA · Dec 2019</p>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>A.S. Computer Programming</li>
              <li>A.S. Web Programmer</li>
              <li>A.S. Database Application Developer</li>
            </ul>
          </div>
        </aside>

        {/* Work Experience Timeline */}
        <main className="flex-1 min-w-0 space-y-5">
          <div className="bg-[#16161e] border border-white/5 rounded-2xl p-8">
            <p className="text-slate-400 text-sm leading-relaxed">
              Senior Full Stack Developer with 8+ years of experience building and shipping production web applications.
              Specializing in PHP/Laravel, React, Angular, and Node.js. Currently at RateSpecial Interactive where I
              architect AI-powered developer tooling including a Laravel MCP server integrated with Claude AI.
              I work fully remote and async, owning features end to end from architecture to deployment.
            </p>
          </div>

          <div className="bg-[#16161e] border border-white/5 rounded-2xl p-8">
            <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-8 flex items-center gap-2">
              <Briefcase size={12} className="text-indigo-400" /> Work Experience
            </h3>

            <div className="relative">
              <div className="absolute left-0 top-2 bottom-0 w-px bg-white/5" />

              <div className="space-y-10">
                {experiences.map((exp, i) => (
                  <motion.div
                    key={i}
                    className="relative pl-8"
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.4, delay: i * 0.04 }}
                  >
                    <div className={`absolute left-[-4px] top-2 w-2 h-2 rounded-full border-2 ${
                      exp.current
                        ? 'bg-indigo-400 border-indigo-400 shadow-sm shadow-indigo-400/50'
                        : 'bg-[#16161e] border-slate-700'
                    }`} />

                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <h4 className="text-sm font-semibold text-slate-100">{exp.title}</h4>
                        <p className="text-sm text-indigo-400 mt-0.5">
                          {exp.company}
                          <span className="text-slate-600 ml-1.5 font-normal">· {exp.location}</span>
                        </p>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <span className="text-xs text-slate-600 font-mono">{exp.period}</span>
                        {exp.current && (
                          <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                            Current
                          </span>
                        )}
                      </div>
                    </div>

                    <ul className="space-y-1.5">
                      {exp.bullets.map((b, j) => (
                        <li key={j} className="text-sm text-slate-500 leading-relaxed flex gap-2">
                          <span className="text-indigo-600 mt-1.5 flex-shrink-0 text-xs">▸</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
);

export default Resume;
