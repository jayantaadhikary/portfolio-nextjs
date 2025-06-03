import { Project } from "../components/ProjectCard";

export const getProjects = (): Project[] => {
  return [
    {
      id: "thestoicmonk",
      title: "TheStoicMonk",
      description:
        "A meditation, mindfulness and journalling app focusing on stoic philosophy. Out now on Play Store!",
      technologies: ["React Native", "TypeScript", "Firebase"],
      demoUrl: "https://thestoicmonk.xyz",
    },
    {
      id: "moniqa",
      title: "Moniqa: Budgeting App",
      description:
        "Track your money without friction. Simple, private, and powerful expense tracking.",
      technologies: ["React Native", "TypeScript", "MMKV"],
      demoUrl: "https://jayantaadhikary.xyz/moniqa",
    },
    {
      id: "gistal",
      title: "Gistal: AI Summarizer",
      description:
        "A web app that summarizes long texts using AI, either through local models (via Ollama) or cloud-based models.",
      technologies: ["Next.js", "TypeScript", "Ollama"],
      githubUrl: "https://github.com/jayantaadhikary/gistal",
    },
    {
      id: "inbox-simplifier",
      title: "Inbox Simplifier",
      description:
        "Email Summarization tool: Simplify your inbox with AI-powered summaries.",
      technologies: ["Next.js", "TypeScript", "OpenAI API"],
      githubUrl: "https://github.com/jayantaadhikary/inbox-simplifier",
    },
  ];
};
