import Groq from 'groq-sdk';
import { portfolioData } from './portfolio-data';

export type ToolName =
  | 'get_about'
  | 'get_projects'
  | 'get_skills'
  | 'get_experience'
  | 'get_contact_info'
  | 'get_education';

export const tools: Groq.Chat.ChatCompletionTool[] = [
  {
    type: 'function',
    function: {
      name: 'get_about',
      description: "Get Julio's professional bio and summary",
      parameters: { type: 'object', properties: {}, required: [] },
    },
  },
  {
    type: 'function',
    function: {
      name: 'get_projects',
      description: "Get the list of Julio's portfolio projects with tech stack and links",
      parameters: { type: 'object', properties: {}, required: [] },
    },
  },
  {
    type: 'function',
    function: {
      name: 'get_skills',
      description: "Get Julio's technical skills organized by category (frontend, backend, devops, AI, etc.)",
      parameters: { type: 'object', properties: {}, required: [] },
    },
  },
  {
    type: 'function',
    function: {
      name: 'get_experience',
      description: "Get Julio's full work experience history",
      parameters: { type: 'object', properties: {}, required: [] },
    },
  },
  {
    type: 'function',
    function: {
      name: 'get_contact_info',
      description: "Get Julio's contact information, email, GitHub, and LinkedIn",
      parameters: { type: 'object', properties: {}, required: [] },
    },
  },
  {
    type: 'function',
    function: {
      name: 'get_education',
      description: "Get Julio's educational background and degrees",
      parameters: { type: 'object', properties: {}, required: [] },
    },
  },
];

export function executeTool(name: ToolName): string {
  switch (name) {
    case 'get_about':
      return portfolioData.about;

    case 'get_projects':
      return JSON.stringify(portfolioData.projects, null, 2);

    case 'get_skills':
      return JSON.stringify(portfolioData.skills, null, 2);

    case 'get_experience':
      return JSON.stringify(portfolioData.experience, null, 2);

    case 'get_contact_info':
      return JSON.stringify({
        name: portfolioData.name,
        email: portfolioData.email,
        github: portfolioData.github,
        linkedin: portfolioData.linkedin,
        portfolio: portfolioData.portfolio,
        location: portfolioData.location,
        contactPage: 'https://juliowebmaster.com/contact',
      }, null, 2);

    case 'get_education':
      return JSON.stringify(portfolioData.education, null, 2);

    default:
      return 'Unknown tool';
  }
}
