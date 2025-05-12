import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="mb-5 p-5 border border-gray-400 rounded-md hover:shadow-md transition-shadow dark:border-gray-200 ">
      <h2 className="text-xl mb-2">{project.title}</h2>
      {/* <div className="relative w-full h-48 mb-4">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover rounded"
        />
      </div> */}
      <p className="text-gray-500 mb-3">{project.description}</p>

      <div className="mb-4 flex flex-wrap">
        {project.technologies.map((tech, index) => (
          <span
            key={index}
            className="text-xs mr-2 mb-2 px-2 py-1 bg-gray-800 text-gray-100 dark:bg-gray-100 dark:text-gray-800 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex items-center space-x-4">
        {project.githubUrl && (
          <Link
            href={project.githubUrl}
            className="text-blue-500 inline-flex items-center"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
            <ArrowRightIcon className="h-4 w-4 ml-1" />
          </Link>
        )}

        {project.demoUrl && (
          <Link
            href={project.demoUrl}
            className="text-blue-500 inline-flex items-center"
            target="_blank"
            rel="noreferrer"
          >
            Live
            <ArrowRightIcon className="h-4 w-4 ml-1" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
