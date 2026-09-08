export interface ThinkingEntry {
  title: string;
  topic: string;
  comingSoon: boolean;
}

// Writing hasn't been published yet — these are the topics queued up next,
// shown honestly as upcoming rather than backdated as if they already exist.
export const thinkingEntries: ThinkingEntry[] = [
  {
    title: "What I'm learning about AI",
    topic: "AI & Machine Learning",
    comingSoon: true,
  },
  {
    title: "Lessons from building Acadexa",
    topic: "Product & Engineering",
    comingSoon: true,
  },
  {
    title: "Exploring AI-assisted software testing",
    topic: "AI & Quality Engineering",
    comingSoon: true,
  },
  {
    title: "From university concepts to real-world software",
    topic: "Learning in Public",
    comingSoon: true,
  },
  {
    title: "Building intelligent systems as a student",
    topic: "AI Systems",
    comingSoon: true,
  },
];
