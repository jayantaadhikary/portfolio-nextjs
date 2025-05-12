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
      id: "gistal",
      title: "Gistal: AI Summarizer",
      description:
        "A web app that summarizes long texts using AI, either through local models (via Ollama) or cloud-based models.",
      technologies: ["Next.js", "TypeScript", "Ollama"],
      githubUrl: "https://github.com/jayantaadhikary/gistal",
    },
    // {
    //   id: "ollama-api",
    //   title: "Ollama API Integration",
    //   description:
    //     "An API integration with Ollama for local AI model access and inferencing.",
    //   technologies: ["Python", "FastAPI", "Ollama", "AI"],
    //   imageUrl: "/images/projects/ollama.png",
    //   githubUrl: "https://github.com/jayantaadhikary/ollama-integration",
    // },
  ];
};
