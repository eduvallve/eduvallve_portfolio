import { Link } from "react-router-dom";
import { projects } from "../../static/json/portfolioList.js";
import { scrollUp } from "../../utils/utils.js";

const RelatedProjects = ({ slug, tags }) => {
  const shuffledProjects = [...projects].sort(() => Math.random() - 0.5);
  // Filter projects that share at least one tag with the current project, excluding the current project itself
  const relatedProjects = shuffledProjects.filter(
    (project) =>
      project.slug !== slug &&
      project.tags?.some((tag) => project.tags.includes(tag)),
  );


  return (
    <div className="related-projects grid-mobile grid-mobile-2-cols grid-desktop grid-desktop-4-cols">
      <h2 className="related-projects__title grid-mobile-1-2 grid-desktop-1-4">
        See more projects
      </h2>
      {relatedProjects.slice(0, 4).map((project, index) => (
        <Link
          key={index}
          className="related-projects__item"
          to={`/portfolio/${project.slug}`}
          style={{ "--portfolio-item-thumbnail": `url(${project.thumbnail})` }}
          onClick={() => scrollUp()}
          aria-label={`Portfolio link to ${project.title}`}
        >
          <h3 className="related-projects__item-title">{project.title}</h3>
        </Link>
      ))}
    </div>
  );
};

export default RelatedProjects;
