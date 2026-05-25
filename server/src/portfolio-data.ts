export const portfolioData = {
  name: 'Julio Sandoval',
  title: 'Senior Full Stack Developer',
  location: 'El Monte, CA',
  email: 'sandovaljulio2@yahoo.com',
  github: 'https://github.com/sourcecodeguy1',
  linkedin: 'https://www.linkedin.com/in/julio-sandoval-ba587613a/',
  portfolio: 'https://juliowebmaster.com',

  about: `Julio Sandoval is a Senior Full Stack Developer with 8+ years of experience specializing in PHP/Laravel, React, Angular, and Node.js. Currently working remotely as Senior Web Developer at RateSpecial Interactive LLC since January 2022. He has a strong background in building production web applications, RESTful APIs, and developer tooling — including AI-powered tools and MCP (Model Context Protocol) servers. He holds three A.S. degrees from Santa Monica College in Computer Programming, Web Programming, and Database Application Development.`,

  projects: [
    {
      name: 'GitHub User Search',
      description: 'A React app that connects to the GitHub API so users can search any GitHub username and view profile info. Built as a Frontend Mentor challenge.',
      techStack: ['React', 'MDB Bootstrap', 'Docker', 'GitHub Actions', 'CI/CD'],
      liveUrl: 'https://github-user-search.juliowebmaster.com/',
      githubUrl: 'https://github.com/sourcecodeguy1/user-search-github',
    },
    {
      name: 'Job Listings',
      description: 'A React app showing a filterable job list where users click category tags to narrow results. Built as a Frontend Mentor challenge.',
      techStack: ['React', 'Styled Components', 'Docker', 'GitHub Actions', 'CI/CD'],
      liveUrl: 'https://jobs.juliowebmaster.com/',
      githubUrl: 'https://github.com/sourcecodeguy1/jobs-listing',
    },
    {
      name: 'CRM Portfolio',
      description: 'A full-stack CRM with authentication, user registration, and a dashboard. Angular frontend backed by a Laravel REST API with MySQL.',
      techStack: ['Angular', 'Laravel', 'PHP', 'MySQL', 'Docker', 'GitHub Actions', 'CI/CD'],
      liveUrl: 'https://crm-client.juliowebmaster.com/login',
      githubUrl: 'https://github.com/sourcecodeguy1/crm-portfolio',
    },
    {
      name: 'Stripe Payment Demo',
      description: 'A full-stack payment integration demo with a React pricing page and a Laravel API backend. Supports PaymentIntents and Stripe webhook handling.',
      techStack: ['React', 'TailwindCSS', 'Stripe.js', 'Laravel', 'Stripe PHP SDK', 'Docker', 'GitHub Actions', 'CI/CD'],
      liveUrl: 'https://stripe.juliowebmaster.com/',
      githubUrl: 'https://github.com/sourcecodeguy1/stripe-payment-demo',
    },
    {
      name: 'Analytics SaaS',
      description: 'A full-stack SaaS analytics platform with Stripe subscription billing, Pro/Free tier management, and webhook-driven subscription lifecycle.',
      techStack: ['React', 'Vite', 'TailwindCSS', 'shadcn/ui', 'Laravel', 'Stripe Subscriptions', 'Docker', 'GitHub Actions', 'CI/CD'],
      liveUrl: 'https://analytics.juliowebmaster.com/',
      githubUrl: 'https://github.com/sourcecodeguy1/analytics-saas',
    },
  ],

  skills: {
    frontend: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'React', 'Angular', 'Bootstrap', 'TailwindCSS', 'Vite', 'shadcn/ui'],
    backend: ['PHP', 'Laravel', 'MySQL', 'Node.js', 'Express'],
    devops: ['Docker', 'GitHub Actions', 'CI/CD', 'Traefik', 'Linux/VPS'],
    sourceControl: ['Git', 'GitHub', 'GitLab', 'Bitbucket', 'Jira'],
    integrations: ['Stripe API', 'Experian API', 'Active Campaign API', 'GitHub API', 'YouTube API'],
    ai: ['Claude API', 'Anthropic SDK', 'MCP (Model Context Protocol)', 'AI-powered developer tooling'],
  },

  experience: [
    {
      title: 'Senior Web Developer',
      company: 'RateSpecial Interactive LLC',
      location: 'Remote',
      period: 'Jan 2022 – Present',
      current: true,
      highlights: [
        'Built and maintain multiple Laravel applications including the main platform, CRM system, checkout system, and confirmation page sites.',
        'Architected and shipped a Laravel MCP server exposing internal link data to AI agents, enabling automated verification across publisher confirmation pages.',
        'Bootstrapped an internal Claude plugin registry as the company foundation for AI-assisted developer workflows.',
        'Integrated Experian (credit reporting), Active Campaign (email marketing), and payment processor APIs.',
        'Migrated flagship app from legacy PHP/jQuery to modern Angular and Laravel.',
        'Optimized PHPUnit test suite from 17 minutes down to 3.5 minutes — a 74% reduction in CI time.',
        'Manage automated deployments via Bitbucket CI/CD with code review gating before production.',
      ],
    },
    {
      title: 'Full-stack PHP Laravel Developer',
      company: 'Merico Inc',
      location: 'Remote',
      period: 'May 2021 – Aug 2021',
      current: false,
      highlights: [
        'Built and maintained Laravel web pages in an agile team environment.',
        'Stack: HTML, Blade, CSS, JavaScript, Vue, React, PHP, MySQL.',
        'Integrated third-party APIs for social SSO on the login page.',
      ],
    },
    {
      title: 'Full-stack Software Developer',
      company: 'RMDS Lab',
      location: 'Remote',
      period: 'Sept 2020 – Feb 2021',
      current: false,
      highlights: [
        'Developed under Drupal 8 & 9 CMS.',
        'Translated design mockups to HTML, CSS, JavaScript, jQuery, Ajax, and Bootstrap.',
        'Created custom Drupal modules; PHP and MySQL backend.',
      ],
    },
    {
      title: 'PHP Developer',
      company: 'Emac Multimedia',
      location: 'Remote',
      period: 'Oct 2018 – Jun 2020',
      current: false,
      highlights: [
        'Built a video search feature using the YouTube API.',
        'Stack: HTML, CSS, JavaScript, jQuery, Ajax, Bootstrap, PHP, MySQL.',
      ],
    },
    {
      title: 'PHP Developer',
      company: 'Legacy College Prep',
      location: 'Remote',
      period: 'Aug 2017 – Jun 2018',
      current: false,
      highlights: [
        'Built an internal staffing portal for teachers and administrators.',
        'Stack: PHP, Laravel, MySQL, HTML, CSS, JavaScript, jQuery, Bootstrap.',
        'Deployed to production under the LEMP stack.',
      ],
    },
    {
      title: 'PHP Developer',
      company: 'MossBros Auto Group',
      location: 'Riverside, CA',
      period: 'July 2017 – Oct 2018',
      current: false,
      highlights: [
        'Built internal employee-facing tools in an MVC framework.',
        'Stack: JavaScript, PHP, MySQL, HTML, CSS, jQuery, Bootstrap, Ajax.',
        'Database management and daily query work.',
      ],
    },
    {
      title: 'Full-stack Developer',
      company: 'MohawkPromotions and EventRelations',
      location: 'Echo Park, CA',
      period: 'Oct 2015 – Jun 2017',
      current: false,
      highlights: [
        'Maintained and extended existing sites alongside a cross-functional dev team.',
        'Implemented new UI and templating with Bootstrap and JavaScript.',
        'Delivered deadline-driven web pages for live events.',
      ],
    },
  ],

  education: {
    school: 'Santa Monica College',
    location: 'Santa Monica, CA',
    graduation: 'December 2019',
    degrees: [
      'A.S. in Computer Programming',
      'A.S. in Web Programmer',
      'A.S. in Database Application Developer',
    ],
  },
};
