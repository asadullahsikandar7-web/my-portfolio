export type ProjectStatus = "active" | "concept" | "maintained";

export interface Project {
  id: string;
  slug: string;
  number: string;
  title: string;
  tagline: string;
  category: string[];
  description: string;
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  architecture: string[];
  technologies: string[];
  challenges: string[];
  roadmap: string[];
  status: ProjectStatus;
  statusLabel: string;
  featured: boolean;
  isConcept?: boolean;
  github?: string;
  live?: string;
}

export const projects: Project[] = [
  {
    id: "acadexa",
    slug: "acadexa",
    number: "01",
    title: "Acadexa",
    tagline: "An academic ecosystem, not just a dashboard.",
    category: ["EdTech", "AI", "Full-Stack", "Product Development"],
    description:
      "An intelligent academic management platform designed to connect students, teachers, administrators, and parents through a unified ecosystem.",
    overview:
      "Acadexa is a product I'm building to bring institute management into a single, coherent system — replacing scattered spreadsheets, notice boards, and phone calls with one platform that every stakeholder in an institute actually wants to use.",
    problem:
      "Most educational institutes run on a patchwork of tools: attendance in a register, results in spreadsheets, announcements on WhatsApp, and fee records in a filing cabinet. Nothing talks to anything else, and parents are usually the last to know what's happening.",
    solution:
      "Acadexa centralizes the core academic workflow — student records, attendance, results, announcements, and fee tracking — into one platform with dedicated views for students, teachers, administrators, and parents, so the same source of truth reaches everyone instantly.",
    features: [
      "Role-based dashboards for students, teachers, admins, and parents",
      "Centralized student records and academic history",
      "Real-time announcements and notifications",
      "Structured attendance and result tracking",
      "A marketing site with a working, serverless-backed contact flow",
    ],
    architecture: [
      "React 18 + TypeScript single-page application built on Vite",
      "Tailwind CSS with a custom design token system",
      "Client-side routing via React Router v6",
      "Vercel serverless functions for backend concerns like the contact form",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "React Router",
      "Vercel Serverless Functions",
    ],
    challenges: [
      "Designing role-based information architecture that stays simple for four very different user types",
      "Keeping the product scope honest — resisting the urge to build every feature before validating the core workflow",
    ],
    roadmap: [
      "Expand from the current marketing/product shell into the full multi-role application",
      "Add real-time data sync across student, teacher, and parent views",
      "Introduce AI-assisted insights on attendance and performance trends",
    ],
    status: "active",
    statusLabel: "Active Development",
    featured: true,
    github: "https://github.com/asadullahsikandar7-web/Acadaxa-website",
  },
  {
    id: "ai-qa-agent",
    slug: "ai-qa-agent",
    number: "02",
    title: "AI QA Agent",
    tagline: "Testing software the way a careful QA engineer would.",
    category: ["AI", "SQA", "Automation", "Intelligent Agents"],
    description:
      "An AI-powered software testing concept designed to understand applications, generate test scenarios, execute testing workflows, and assist with identifying software issues.",
    overview:
      "AI QA Agent is an autonomous QA platform that combines AI reasoning with deterministic, evidence-based testing — using Playwright to actually execute against real applications rather than guessing at outcomes.",
    problem:
      "Manual QA doesn't scale, and most 'AI testing' tools either hallucinate results or replace human judgment with a black box. Teams need testing that's fast to set up but still grounded in real, verifiable evidence.",
    solution:
      "The agent reasons about an application the way a QA engineer would — forming test scenarios, then executing them through Playwright and validating outcomes with deterministic assertions, so every result is backed by actual evidence rather than a model's guess.",
    features: [
      "AI-assisted generation of test scenarios from application context",
      "Automated execution through Playwright",
      "Deterministic, evidence-based assertions rather than free-form AI judgments",
      "Background worker architecture for running test jobs asynchronously",
      "Containerized setup via Docker for consistent test environments",
    ],
    architecture: [
      "Node.js + TypeScript monorepo with separate client and server workspaces",
      "React client for orchestrating and reviewing test runs",
      "Express-based server with a dedicated background worker process",
      "MongoDB for persisting test runs, scenarios, and evidence",
      "Playwright for real browser-level test execution",
      "Docker Compose for local and reproducible environments",
    ],
    technologies: [
      "Node.js",
      "TypeScript",
      "React",
      "Playwright",
      "MongoDB",
      "Docker",
      "Express",
    ],
    challenges: [
      "Keeping AI-generated test reasoning grounded in deterministic, verifiable assertions instead of unverifiable model output",
      "Coordinating a server, background worker, and client into one reliable local dev workflow",
    ],
    roadmap: [
      "Broaden coverage from functional UI flows toward API and regression testing",
      "Add richer reporting on why a test failed, not just that it failed",
      "Explore feeding QA findings back into the AI's future test planning",
    ],
    status: "active",
    statusLabel: "Active Development",
    featured: true,
    github: "https://github.com/asadullahsikandar7-web/QA--Agent-",
  },
  {
    id: "product-trend-intelligence",
    slug: "product-trend-intelligence",
    number: "03",
    title: "Product Trend Intelligence",
    tagline: "Reading e-commerce signal out of pricing noise.",
    category: ["AI", "Data", "Analytics", "E-commerce"],
    description:
      "A data-driven concept for discovering e-commerce product trends, pricing patterns, and market insights.",
    overview:
      "This is an early-stage concept exploring how AI and data analysis could surface meaningful trends — rising products, pricing shifts, demand signals — from e-commerce data, rather than requiring a person to spot patterns manually across spreadsheets.",
    problem:
      "E-commerce sellers and analysts are sitting on large amounts of pricing and listing data, but spotting a genuine trend inside it usually means manual, repetitive spreadsheet work.",
    solution:
      "A system that ingests product and pricing data and applies analysis to highlight trends and pricing patterns worth a closer look — turning raw listings into a smaller set of signals a person can act on.",
    features: [
      "Trend detection across product categories",
      "Pricing pattern analysis over time",
      "Market insight summaries designed for quick scanning",
    ],
    architecture: [
      "Still being designed — this is a concept-stage exploration, not a shipped architecture.",
    ],
    technologies: ["Python", "Data Analysis", "Machine Learning"],
    challenges: [
      "Sourcing clean, reliable e-commerce data to validate the concept against",
      "Defining what counts as a meaningful 'trend' versus normal price noise",
    ],
    roadmap: [
      "Validate the concept against a real, bounded dataset",
      "Prototype the first trend-detection model",
      "Decide on a concrete product surface — dashboard, report, or API",
    ],
    status: "concept",
    statusLabel: "Concept Stage",
    featured: true,
    isConcept: true,
  },
  {
    id: "attendance-management-system",
    slug: "attendance-management-system",
    number: "04",
    title: "Attendance Management System",
    tagline: "A focused tool for a real, everyday classroom problem.",
    category: ["Full-Stack", "Education", "Web Development"],
    description:
      "A class attendance management system built to make daily attendance tracking faster for teachers and more transparent for parents.",
    overview:
      "A full-stack web application for managing daily classroom attendance, with automatic email notifications so absences don't go unnoticed and get flagged as they happen rather than at the end of a term.",
    problem:
      "Paper or spreadsheet-based attendance is slow to record and easy to lose track of, and parents often only learn about repeated absences long after the fact.",
    solution:
      "A lightweight web app where teachers mark daily attendance, the system tracks it date-wise with real-time statistics, and automatic email notifications go out for absences as they happen.",
    features: [
      "Add and manage student records",
      "Daily attendance marking",
      "Automatic email notifications for absences",
      "Date-wise attendance history and real-time statistics",
      "Attendance data export",
    ],
    architecture: [
      "React 18 + Vite single-page frontend styled with Tailwind CSS",
      "Node.js + Express backend",
      "Nodemailer for transactional email notifications",
    ],
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "Nodemailer",
    ],
    challenges: [
      "Wiring reliable email delivery for absence notifications without a heavyweight backend",
      "Keeping the UI fast enough for a teacher to use it during an actual class",
    ],
    roadmap: [
      "Move from local data persistence to a proper database-backed setup",
      "Add role-based access for multiple teachers and classes",
    ],
    status: "maintained",
    statusLabel: "Supporting Project",
    featured: false,
    github: "https://github.com/asadullahsikandar7-web/Institute-portal",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
