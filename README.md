# Asad Ullah Sikandar — Portfolio

Personal portfolio site for Asad Ullah Sikandar — BS Artificial Intelligence student, developer, and product builder.

## Stack

React 18 · TypeScript · Vite · Tailwind CSS v4 · Framer Motion · React Router · Lucide React

## Getting started

```bash
npm install
npm run dev
```

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — type-check and build for production
- `npm run preview` — preview the production build locally
- `npm run lint` — run oxlint

## Structure

```text
src/
├── components/   # feature-organized UI: hero, about, projects, contact, ui primitives
├── pages/        # route-level components (Home, ProjectPage)
├── data/         # content: projects, skills, timeline, social links
├── hooks/        # theme, reduced motion, scroll progress, GitHub stats
├── lib/          # motion variants, portfolio assistant contract
├── assets/       # local image assets
└── main.tsx      # app bootstrap
```

Project content lives in `src/data/projects.ts` — add a new case study by adding an entry there; the `/work/:slug` route picks it up automatically.

## Content policy

Every project, skill, and timeline entry reflects real, verifiable work. Concept-stage ideas are explicitly labeled as concepts. No fabricated metrics, clients, or testimonials.

## Assets

- `src/assets/profile-image.jpeg` — profile photo
- `public/resume/Asad-Ullah-Sikandar-Resume.pdf` — resume

## Environment

No secrets are required to run this site. See `.env.example` for why — and where a future AI-assistant API key would live (server-side only, never in this repo).

