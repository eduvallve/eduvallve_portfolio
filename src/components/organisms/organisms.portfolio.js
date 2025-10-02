import { NavLink } from "react-router-dom";
import { projects } from '../../static/json/portfolioList.js';

/**
 * Portfolio builds the homepage area related to the projects
 */
const Portfolio = () => {
  const years = new Date().getFullYear() - 2016;

  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio__content">
        <div className="portfolio__header">
          <h2>See my projects</h2>
          <p>
            {years} years of experience and passionate about creating clear,
            useful and attractive interfaces.
          </p>
        </div>
        <div className="portfolio__list">
          {projects.map(({id, title, thumbnail}, i) => {
            return (
              <NavLink key={i} className="portfolio__list-item" to={`/portfolio/project-${id}`} style={{'--portfolio-item-thumbnail': thumbnail}}>
                <span className="portfolio__list-item-label">{title}</span>
              </NavLink>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
