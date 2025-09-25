import { NavLink } from "react-router-dom";

/**
 * Portfolio builds the homepage area related to the projects
 */
const Portfolio = () => {
  return (
    <>
      <h1>Portfolio</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/portfolio/project-1">Project 1</NavLink>
          </li>
          <li>
            <NavLink to="/portfolio/project-2">Project 2</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Portfolio;