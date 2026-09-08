export interface TimelineEntry {
  period: string;
  title: string;
  points: string[];
  current?: boolean;
}

export const timeline: TimelineEntry[] = [
  {
    period: "2025",
    title: "Started deeper exploration of software development and AI",
    points: [
      "Moved from learning concepts to building real, working software",
      "Began focusing on artificial intelligence as a primary area of study",
    ],
  },
  {
    period: "2025 — 2026",
    title: "BS Artificial Intelligence, full-stack projects & testing",
    points: [
      "BS Artificial Intelligence coursework and fundamentals",
      "Full-stack projects across React, Node.js, and Express",
      "Software testing and automation, including Playwright-based workflows",
      "Early product experimentation",
    ],
  },
  {
    period: "2026",
    title: "Acadexa, AI QA Agent & intelligent systems",
    points: [
      "Building Acadexa, an academic management platform",
      "Building AI QA Agent, an evidence-based AI testing platform",
      "Experimenting with intelligent, agent-based systems",
    ],
    current: true,
  },
];
