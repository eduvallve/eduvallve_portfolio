import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { projects } from '../../static/json/portfolioList.js';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


/**
 * Portfolio builds the homepage area related to the projects
*/
const Portfolio = () => {
  const years = new Date().getFullYear() - 2016;

  const projectRef = useRef([]);
  const portfolioSectionRef = useRef();

  // Sort projects by timestamp in descending order (newest first)
  const sortedProjects = [...projects].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

  // Group projects into arrays of 4
  const projectsGrouped = [];
  for (let i = 0; i < sortedProjects.length; i += 4) {
    projectsGrouped.push(sortedProjects.slice(i, i + 4));
  }

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.to(projectRef.current, {
      xPercent: -100 * (projectsGrouped.length - 1),
      ease: "none",
      scrollTrigger: {
        markers: false,
        trigger: portfolioSectionRef.current,
        pin: true,
        pinnedContainer: portfolioSectionRef.current,
        anticipatePin: 1,
        scrub: 0.1,
        start: "top",
        end: ("top+=" + (projectsGrouped.length * 100) + "vh"),
      }
    })
  }, [projectsGrouped.length]);

  return (
    <section className="portfolio" id="portfolio" ref={portfolioSectionRef}>
      <div className="portfolio__area">
        <div className="portfolio__content">
          <div className="portfolio__header">
            <h2>See my projects</h2>
            <p>
              {years} years of experience and passionate about creating clear,
              useful and attractive interfaces.
            </p>
          </div>
          <div className="portfolio__list" style={{'--project-groups-amount': projectsGrouped.length}}>
            {projectsGrouped.map((projectGroup, groupIndex) => (
              <div key={groupIndex} className="portfolio__group" ref={(ref) => projectRef.current[groupIndex] = ref}>
                {projectGroup.map(({slug, title, description, thumbnail}, projectIndex) => (
                  <NavLink 
                    key={`${groupIndex}-${projectIndex}`} 
                    className="portfolio__list-item" 
                    to={`/portfolio/${slug}`} 
                    style={{'--portfolio-item-thumbnail': `url(${thumbnail})`}}
                  >
                    <span className="portfolio__list-item-label">
                      <span className="portfolio__list-item-label-title">{title}</span>
                      <span className="portfolio__list-item-label-description">{description}</span>
                      </span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
