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
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.to(projectRef.current, {
      xPercent: -100 * (projectRef.current.length - 1),
      ease: "none",
      scrollTrigger: {
        markers: false,
        trigger: portfolioSectionRef.current,
        pin: true,
        pinnedContainer: portfolioSectionRef.current,
        anticipatePin: 1,
        scrub: 0.1,
        start: "top",
        end: ("top+=" + (projectRef.current.length * 100 * 2) + "vh"),
      }
    })
  }, []);



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
          <div className="portfolio__list">
            {projects.map(({id, title, thumbnail}, i) => {
              return (
                <NavLink key={i} className="portfolio__list-item" to={`/portfolio/project-${id}`} style={{'--portfolio-item-thumbnail': thumbnail}} ref={(ref) => projectRef.current[i] = ref}>
                  <span className="portfolio__list-item-label">{title}</span>
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
