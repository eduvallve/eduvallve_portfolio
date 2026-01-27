import React from 'react';
import { useParams, Link } from "react-router-dom";
import { projects } from "../../static/json/portfolioList.js";
import Button from "../atoms/button.js";
import RelatedProjects from "../organisms/organisms.relatedProjects.js";
import Carousel from "../molecules/molecules.carousel.js";

/**
 * This ProjectPage shows everything that is inside of a project single page
 */

// Helper function to render HTML content or plain children
const renderHTMLContent = (children) => {
  const content = typeof children === "string" ? children : children;
  const isHTMLString =
    typeof content === "string" &&
    (content.includes("<b>") ||
      content.includes("<i>") ||
      content.includes("<strong>") ||
      content.includes("<em>") ||
      content.includes("<i>") ||
      content.includes("<br>"));
  return isHTMLString ? (
    <span dangerouslySetInnerHTML={{ __html: content }} />
  ) : (
    children
  );
};

// Define your components
const Container = ({ children, className = "", ...props }) => {
  return (
    <div className={`container ${className}`.trim()} {...props}>
      {renderHTMLContent(children)}
    </div>
  );
};

const TextBlock = ({ children, className = "", ...props }) => {
  return (
    <p className={`text-block ${className}`.trim()} {...props}>
      {renderHTMLContent(children)}
    </p>
  );
};

const LinkBlock = ({ children, className = "", path = "/", ...props }) => {
  return (
    <Link to={path} className={`link-block ${className}`.trim()} {...props}>
      {renderHTMLContent(children)}
    </Link>
  );
};

const HeaderBlock = ({ children, className = "", label, ...props }) => {
  const renderedContent = renderHTMLContent(children);

  if (label === "h1") {
    return (
      <h1 className={`${className}`.trim()} {...props}>
        {renderedContent}
      </h1>
    );
  } else if (label === "h2") {
    return (
      <h2 className={`${className}`.trim()} {...props}>
        {renderedContent}
      </h2>
    );
  } else if (label === "h3") {
    return (
      <h3 className={`${className}`.trim()} {...props}>
        {renderedContent}
      </h3>
    );
  } else if (label === "h4") {
    return (
      <h4 className={`${className}`.trim()} {...props}>
        {renderedContent}
      </h4>
    );
  } else if (label === "h5") {
    return (
      <h5 className={`${className}`.trim()} {...props}>
        {renderedContent}
      </h5>
    );
  } else if (label === "h6") {
    return (
      <h6 className={`${className}`.trim()} {...props}>
        {renderedContent}
      </h6>
    );
  } else {
    return (
      <div className={`${className}`.trim()} {...props}>
        {renderedContent}
      </div>
    );
  }
};

const ImageBlock = ({ className, src, alt, ...props }) => {
  return (
    <img
      className={`image-block ${className}`.trim()}
      src={src}
      alt={alt}
      {...props}
    />
  );
};

const IframeBlock = ({
  src,
  title = "iframe",
  className = "",
  width = "100%",
  height = "100%",
  styles,
  ...props
}) => (
  <div className={`iframe-block ${className}`.trim()} {...props}>
    <iframe
      src={src}
      title={title}
      style={{ width, height, border: "none", ...styles }}
    />
  </div>
);

const Hero = ({ children, className = "", ...props }) => {
  return (
    <section className={`hero ${className}`.trim()} {...props}>
      {renderHTMLContent(children)}
    </section>
  );
};

const Slide = ({ children, className = "", ...props }) => {
  return (
    <div className={`carousel__slide ${className}`.trim()} {...props}>
      {renderHTMLContent(children)}
    </div>
  );
};

const ComponentSelector = ({ comp, children, data, className, ...props }) => {
  // Extract component name after '@' symbol
  const componentName = comp?.split("@")[1]?.toLowerCase();

  // Map component names to actual components
  const componentMap = {
    container: Container,
    headerblock: HeaderBlock,
    textblock: TextBlock,
    text: TextBlock,
    linkblock: LinkBlock,
    imageblock: ImageBlock,
    image: ImageBlock,
    carousel: Carousel,
    slide: Slide,
    hero: Hero,
    iframeblock: IframeBlock,
    iframe: IframeBlock,
    button: Button,
  };

  // Helper function to check if an item is a component identifier
  const isComponent = (item) => {
    return typeof item === "string" && item.startsWith("@");
  };

  // Helper function to check if an item is a component array [componentType, content]
  const isComponentArray = (item) => {
    return Array.isArray(item) && item.length >= 2 && isComponent(item[0]);
  };

  // Recursive function to render content and find sub-components
  const renderContent = (content) => {
    if (!content) return null;

    // If it's already a React element, return it unchanged to avoid re-processing
    if (React.isValidElement(content)) return content;

    // If content is an array, process each item
    if (Array.isArray(content)) {
      return content.map((item, index) => {
        if (React.isValidElement(item)) return item;
        // Check if item is a sub-component array like ["@TextBlock", content, props]
        if (isComponentArray(item)) {
          const [subCompType, subContent, subProps = {}] = item;
          return (
            <ComponentSelector key={index} comp={subCompType} {...subProps}>
              {renderContent(subContent)}
            </ComponentSelector>
          );
        }

        // Check if item is just a component identifier string
        if (isComponent(item)) {
          return <ComponentSelector key={index} comp={item} />;
        }

        // Check if item is an object that might contain sub-components
        if (typeof item === "object" && item !== null) {
          // If it's a React element-like object, return as-is
          if (React.isValidElement(item)) return item;

          return (
            <div key={index} className="content-object">
              {Object.entries(item).map(([key, value], objIndex) => {
                if (isComponent(key)) {
                  // Handle props if value is an array with props object
                  const hasProps =
                    Array.isArray(value) &&
                    value.length > 1 &&
                    typeof value[value.length - 1] === "object" &&
                    !Array.isArray(value[value.length - 1]) &&
                    !isComponent(value[value.length - 1]);

                  const content = hasProps ? value.slice(0, -1) : value;
                  const propsObj = hasProps ? value[value.length - 1] : {};

                  return (
                    <ComponentSelector key={objIndex} comp={key} {...propsObj}>
                      {renderContent(content)}
                    </ComponentSelector>
                  );
                }
                return (
                  <div key={objIndex} className={`content-${key}`}>
                    {renderContent(value)}
                  </div>
                );
              })}
            </div>
          );
        }

        // Regular content (string, number, etc.)
        return <p key={index}>{renderHTMLContent(item)}</p>;
      });
    }

    // If content is an object, check for component keys
    if (typeof content === "object" && content !== null) {
      return Object.entries(content).map(([key, value], index) => {
        if (isComponent(key)) {
          // Handle props if value is an array with props object
          const hasProps =
            Array.isArray(value) &&
            value.length > 1 &&
            typeof value[value.length - 1] === "object" &&
            !Array.isArray(value[value.length - 1]) &&
            !isComponent(value[value.length - 1]);

          const content = hasProps ? value.slice(0, -1) : value;
          const propsObj = hasProps ? value[value.length - 1] : {};

          return (
            <ComponentSelector key={index} comp={key} {...propsObj}>
              {renderContent(content)}
            </ComponentSelector>
          );
        }
        return (
          <div key={index} className={`content-${key}`}>
            {renderContent(value)}
          </div>
        );
      });
    }

    // Simple content (string, number)
    return content;
  };

  const Component = componentMap[componentName];

  if (!Component) {
    console.warn(`Component "${componentName}" not found in componentMap`);
    return <div className="unknown-component">Unknown component: {comp}</div>;
  }

  return (
    <Component className={className} {...props}>
      {renderContent(children)}
    </Component>
  );
};

const ProjectPage = () => {
  const { project_id } = useParams();

  // Find the project data by matching slug with project_id
  const currentProject = projects.find(
    (project) => project.slug === parseInt(project_id),
  );

  return (
    <main className="project-page grid-mobile grid-mobile-4-cols grid-desktop grid-desktop-12-cols">
      {currentProject && !currentProject.content && (
        <section className="grid-mobile-1-4 grid-desktop-1-12 container--no-content">
          <h2>Project: {currentProject.title}</h2>
          <p>No content available for this project yet.</p>
        </section>
      )}
      {currentProject?.content?.map((section, index) => {
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
