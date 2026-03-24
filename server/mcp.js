import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

const server = new McpServer({
    name: "juliowebmaster-mcp",
    version: "1.0.0",
});

// ── Data ──────────────────────────────────────────────────────────────────────

const projects = [
    {
        name: "GitHub User Search",
        description:
            "A React application that connects to the GitHub API. Users can search for any GitHub username and view their profile info.",
        tech: ["React", "MDBootstrap 5", "Styled Components", "Docker", "GitHub Actions"],
        live: "https://github-user-search.juliowebmaster.com/",
        repo: "https://github.com/sourcecodeguy1/user-search-github",
    },
    {
        name: "Job Listings",
        description:
            "A React web application that displays a list of jobs where users can filter by clicking specific categories.",
        tech: ["React", "Styled Components", "Docker", "GitHub Actions"],
        live: "https://jobs.juliowebmaster.com/",
        repo: "https://github.com/sourcecodeguy1/jobs-listing",
    },
];

const skills = {
    backend: [
        "PHP (8+ years)",
        "Laravel (7+ years)",
        "MySQL",
        "PostgreSQL",
        "RESTful APIs",
        "MCP Server Development",
    ],
    frontend: [
        "JavaScript",
        "TypeScript",
        "React",
        "Angular",
        "Vue.js",
        "HTML/CSS",
        "Bootstrap",
        "TailwindCSS",
    ],
    testing: ["PHPUnit", "TDD", "Unit Testing", "Integration Testing"],
    tools: [
        "Git",
        "Docker",
        "GitHub Actions",
        "CI/CD",
        "Linux",
        "AWS S3",
        "MCP (Model Context Protocol)",
    ],
};

const experience = [
    {
        title: "Senior Web Developer",
        company: "RateSpecial Interactive LLC",
        type: "Remote",
        period: "January 2022 – Present",
        highlights: [
            "Built and maintain multiple Laravel applications including main platform, CRM, checkout system, and confirmation page sites",
            "Architected and shipped a Laravel MCP server exposing internal link data to AI agents",
            "Bootstrapped an internal Claude plugin registry as the company's foundation for AI-assisted developer workflows",
            "Integrated third-party APIs like Experian, Active Campaign, and payment processors",
            "Optimized CI/CD test suite from 17 minutes down to 3.5 minutes (74% reduction)",
            "Migrated flagship app from legacy PHP/jQuery to modern Angular and Laravel",
        ],
    },
    {
        title: "Full-Stack PHP/Laravel Developer",
        company: "Merico Inc",
        type: "Remote",
        period: "May 2021 – August 2021",
        highlights: [
            "Built web applications using Laravel, Vue.js, React, and MySQL",
            "Set up OAuth/SSO authentication for social media logins",
            "Worked in an Agile environment with daily standups and sprint planning",
        ],
    },
    {
        title: "Full-Stack Developer",
        company: "RMDS Lab",
        type: "Remote",
        period: "September 2020 – February 2021",
        highlights: [
            "Built custom Drupal modules for enterprise clients",
            "Turned design mockups into responsive websites",
        ],
    },
    {
        title: "Freelance Web Developer",
        company: "Self-Employed",
        type: "Remote",
        period: "2017 – 2018",
        highlights: [
            "Built complete websites from scratch with Laravel including custom login and authentication systems",
        ],
    },
];

const contact = {
    email: "julio.sandoval.engineer@gmail.com",
    website: "https://juliowebmaster.com",
    github: "https://github.com/sourcecodeguy1",
    location: "El Monte, CA (Remote only)",
};

// ── Tools ─────────────────────────────────────────────────────────────────────

server.tool(
    "get_projects",
    "Get all of Julio's portfolio projects with descriptions and tech stacks",
    {},
    async () => ({
        content: [{ type: "text", text: JSON.stringify(projects, null, 2) }],
    })
);

server.tool(
    "get_skills",
    "Get Julio's technical skills and expertise",
    {},
    async () => ({
        content: [{ type: "text", text: JSON.stringify(skills, null, 2) }],
    })
);

server.tool(
    "get_experience",
    "Get Julio's full work experience and employment history",
    {},
    async () => ({
        content: [{ type: "text", text: JSON.stringify(experience, null, 2) }],
    })
);

server.tool(
    "get_contact",
    "Get Julio's contact information",
    {},
    async () => ({
        content: [{ type: "text", text: JSON.stringify(contact, null, 2) }],
    })
);

server.tool(
    "search_skills",
    "Check whether Julio has experience with a specific technology or skill",
    { technology: z.string().describe("The technology or skill to search for") },
    async ({ technology }) => {
        const allSkills = Object.values(skills).flat().map((s) => s.toLowerCase());
        const found = allSkills.some((s) => s.includes(technology.toLowerCase()));
        return {
            content: [
                {
                    type: "text",
                    text: found
                        ? `Yes, Julio has experience with ${technology}.`
                        : `${technology} is not listed in Julio's current skill set.`,
                },
            ],
        };
    }
);

// ── Start ─────────────────────────────────────────────────────────────────────

const transport = new StdioServerTransport();
await server.connect(transport);