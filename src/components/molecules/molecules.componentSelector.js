import React from 'react';
import Container from '../atoms/atoms.container.js';
import HeaderBlock from '../atoms/atoms.headerBlock.js';
import TextBlock from '../atoms/atoms.textBlock.js';
import ImageBlock from '../atoms/atoms.imageBlock.js';
import Hero from '../atoms/atoms.hero.js';
import IframeBlock from '../atoms/atoms.iframeBlock.js';
import Slide from '../atoms/atoms.slide.js';
import Carousel from './molecules.carousel.js';
import Button from '../atoms/atoms.button.js';
import renderHTMLContent from '../../utils/renderHTMLContent.js';

const ComponentSelector = ({ comp, children, data, className, ...props }) => {
  const componentName = comp?.split('@')[1]?.toLowerCase();

  const componentMap = {
    container: Container,
    headerblock: HeaderBlock,
    textblock: TextBlock,
    text: TextBlock,
    imageblock: ImageBlock,
    image: ImageBlock,
    carousel: Carousel,
    slide: Slide,
    hero: Hero,
    iframeblock: IframeBlock,
    iframe: IframeBlock,
    button: Button,
  };

  const isComponent = (item) => {
    return typeof item === 'string' && item.startsWith('@');
  };

  const isComponentArray = (item) => {
    return Array.isArray(item) && item.length >= 2 && isComponent(item[0]);
  };

  const renderContent = (content) => {
    if (!content) return null;
    if (React.isValidElement(content)) return content;

    if (Array.isArray(content)) {
      return content.map((item, index) => {
        if (React.isValidElement(item)) return item;

        if (isComponentArray(item)) {
          const [subCompType, subContent, subProps = {}] = item;
          return (
            <ComponentSelector key={index} comp={subCompType} {...subProps}>
              {renderContent(subContent)}
            </ComponentSelector>
          );
        }

        if (isComponent(item)) {
          return <ComponentSelector key={index} comp={item} />;
        }

        if (typeof item === 'object' && item !== null) {
          if (React.isValidElement(item)) return item;

          return (
            <div key={index} className="content-object">
              {Object.entries(item).map(([key, value], objIndex) => {
                if (isComponent(key)) {
                  const hasProps =
                    Array.isArray(value) &&
                    value.length > 1 &&
                    typeof value[value.length - 1] === 'object' &&
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

        return <p key={index}>{renderHTMLContent(item)}</p>;
      });
    }

    if (typeof content === 'object' && content !== null) {
      if (React.isValidElement(content)) return content;

      return Object.entries(content).map(([key, value], index) => {
        if (isComponent(key)) {
          const hasProps =
            Array.isArray(value) &&
            value.length > 1 &&
            typeof value[value.length - 1] === 'object' &&
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

export default ComponentSelector;
