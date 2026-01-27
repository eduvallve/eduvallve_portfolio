import React from 'react';
import { useParams } from "react-router-dom";
import { projects } from "../../static/json/portfolioList.js";
import RelatedProjects from "../organisms/organisms.relatedProjects.js";
import ComponentSelector from "../molecules/molecules.componentSelector.js";

/**
 * This ProjectPage shows everything that is inside of a project single page
 */

// Components moved to individual files in src/components/

const ProjectPage = () => {
  const { project_id } = useParams();

  // Find the project data by matching slug with project_id
  const currentProject = projects.find(
    (project) => project.slug === parseInt(project_id),
  );

  return (
    <main className="project-page grid-mobile grid-mobile-4-cols grid-desktop grid-desktop-12-cols" role='main' aria-labelledby='project-title'>
      {currentProject && !currentProject.content && (
        <section className="grid-mobile-1-4 grid-desktop-1-12 container--no-content">
          <h2>Project: {currentProject.title}</h2>
          <p>No content available for this project yet.</p>
        </section>
      )}
      {currentProject?.content && typeof currentProject.content === 'function' && (
        <currentProject.content />
      )}
      {currentProject?.content && Array.isArray(currentProject.content) && currentProject.content.map((section, index) => {
        const [componentType, containerContent, sectionProps = {}] = section;

        return (
          <ComponentSelector key={index} comp={componentType} {...sectionProps}>
            {containerContent}
          </ComponentSelector>
        );
      })}
      {currentProject ? (
        <RelatedProjects
          slug={currentProject.slug}
          tags={currentProject.tags}
        ></RelatedProjects>
      ) : (
        <p className="grid-mobile-1-4 grid-desktop-1-12">Project not found</p>
      )}
    </main>
  );
};

export default ProjectPage;
