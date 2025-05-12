import { useState } from "react";
import "animate.css";
import Layout from "../../layout/layout";
import ProjectCard, { Project } from "@/components/ProjectCard";
import { getProjects } from "@/helpers/projects";

const ProjectsPage = (props: { projects: Project[] }) => {
  const { projects } = props;

  return (
    <div className="w-full animate__animated animate__slideInLeft">
      <h1 className="text-3xl pb-5 text-center">My Projects</h1>
      <p className="text-center text-gray-500 mb-8">
        Here are some of my releases & projects. Click on the links to check them out.  
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;

export async function getStaticProps() {
  const projects = getProjects();
  return {
    props: {
      projects,
    },
  };
}
