import { projects } from "../../static/json/portfolioList.js";

const RelatedProjects = ({ slug, tags }) => {
  // Randomly shuffle the list of tags
  const shuffledTags = tags.sort(() => Math.random() - 0.5);
  // Filter projects that share at least one tag with the current project, excluding the current project itself
  const relatedProjects = projects.filter(
    (project) =>
      project.slug !== slug && project.tags?.includes(shuffledTags[0]),
  );
  return (
    <div className="project-page__related-projects grid-desktop-1-12 grid-desktop grid-desktop-12-cols">
      <h2 className="grid-desktop-1-12">Related projects to: {shuffledTags[0]}</h2>
      {relatedProjects.map((project, index) => (
        <div key={index} className="grid-desktop-1-3">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <img
            src={project.thumbnail}
            alt={project.title}
            style={{ width: "100%" }}
          />
        </div>
      ))}
    </div>
  );
};

export default RelatedProjects;
