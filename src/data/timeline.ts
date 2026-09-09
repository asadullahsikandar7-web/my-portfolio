export interface TimelineEntry {
  period: string;
  title: string;
  points: string[];
  current?: boolean;
}

export const timeline: TimelineEntry[] = [
  {
    period: "2025",
    title: "Started my SQA internship at GlowingSoft Technologies",
    points: [
      "Joined GlowingSoft Technologies as a QA intern and began learning software quality in a real production environment",
      "Worked on testing and validating multiple projects, understanding how software behaves under real user and workflow conditions",
      "Learned how to think critically about defects, test coverage, release readiness, and quality standards",
      "Passed through hands-on testing work across various project flows and gained confidence in QA execution",
    ],
  },
  {
    period: "2025 — 2026",
    title: "Started BS in Artificial Intelligence and began exploring AI deeply",
    points: [
      "Started my BS AI degree and shifted from just using technology to understanding how intelligent systems actually work",
      "Began exploring machine learning, AI workflows, agentic thinking, and practical product-building with AI",
      "Connected software testing, product logic, and AI together to build more meaningful systems",
      "Started building projects that solve real user and workflow problems using AI-driven ideas",
    ],
  },
  {
    period: "2026",
    title: "Building with AI, developing useful tools, and turning ideas into products",
    points: [
      "Built projects that combine AI, full-stack development, automation, and product thinking",
      "Focused on solving real-world problems through AI-powered systems and modern web interfaces",
      "Created tools around academic management, intelligent testing, and workflow automation",
      "Continued learning by shipping experiments, improving them through feedback, and turning concepts into working products",
    ],
    current: true,
  },
];
