export interface Skill {
  name: string;
  usedIn: string[]; // Project ids from data/projects.ts
}

export interface SkillGroup {
  id: string;
  title: string;
  skills: Skill[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: "ai-data",
    title: "Artificial Intelligence & Data",
    skills: [
      { name: "Python", usedIn: ["product-trend-intelligence"] },
      { name: "Machine Learning", usedIn: ["product-trend-intelligence"] },
      { name: "Data Analysis", usedIn: ["product-trend-intelligence"] },
      { name: "AI Agents", usedIn: ["ai-qa-agent"] },
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    skills: [
      { name: "React", usedIn: ["acadexa", "ai-qa-agent", "attendance-management-system"] },
      { name: "TypeScript", usedIn: ["acadexa", "ai-qa-agent"] },
      { name: "JavaScript", usedIn: ["attendance-management-system"] },
      { name: "Vite", usedIn: ["acadexa", "attendance-management-system"] },
      { name: "Tailwind CSS", usedIn: ["acadexa", "attendance-management-system"] },
      { name: "HTML", usedIn: [] },
      { name: "CSS", usedIn: [] },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    skills: [
      { name: "Node.js", usedIn: ["ai-qa-agent", "attendance-management-system"] },
      { name: "Express.js", usedIn: ["ai-qa-agent", "attendance-management-system"] },
      { name: "REST APIs", usedIn: ["ai-qa-agent", "acadexa"] },
    ],
  },
  {
    id: "database",
    title: "Database",
    skills: [
      { name: "MongoDB", usedIn: ["ai-qa-agent"] },
      { name: "Mongoose", usedIn: ["ai-qa-agent"] },
    ],
  },
  {
    id: "quality-engineering",
    title: "Quality Engineering",
    skills: [
      { name: "Selenium", usedIn: [] },
      { name: "Postman", usedIn: [] },
      { name: "API Testing", usedIn: ["ai-qa-agent"] },
      { name: "Test Automation", usedIn: ["ai-qa-agent"] },
      { name: "Playwright", usedIn: ["ai-qa-agent"] },
    ],
  },
  {
    id: "tools",
    title: "Tools",
    skills: [
      { name: "Git", usedIn: [] },
      { name: "GitHub", usedIn: [] },
      { name: "VS Code", usedIn: [] },
      { name: "Vercel", usedIn: ["acadexa"] },
      { name: "Docker", usedIn: ["ai-qa-agent"] },
    ],
  },
];
