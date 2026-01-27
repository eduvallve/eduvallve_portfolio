// Content for the My Dictionary project page

import { Link } from 'react-router';
import { Container, HeaderBlock, TextBlock, ImageBlock, Carousel, Slide, Separator } from '../../../../components';
import renderHTMLContent from '../../../../utils/renderHTMLContent.js';
import AppIcon from "./myDictionary-v1-square.webp";

const MyDictionaryContent = () => {
  return (
    <>
      <Link to="/portfolio/" className="navigation navigation--back grid-mobile-1-4 grid-desktop-1-12 margin-top--24">
          Back to portfolio
      </Link>

      <Container className="grid-mobile-1-3 grid-desktop-1-9 align-vertical-center">
        <HeaderBlock label="h1">My Dictionary</HeaderBlock>
        A fast, user-friendly WordPress plugin for effortless multilingual content management. Focused on performance and usability. Project in continuous development.
        <TextBlock className="text-highlighted text-small">
          Stack: WordPress, PHP, JavaScript
        </TextBlock>
        <TextBlock className="text-highlighted text-small">
          {renderHTMLContent("Developed in <b>2025</b>")}
        </TextBlock>
      </Container>

      <ImageBlock
        src={AppIcon}
        alt="Image 1"
        className="project__main-image project__main-image-logo grid-mobile-4-4 grid-desktop-10-12"
      />

      <Separator />

      <Container className="grid-mobile-1-2 grid-desktop-1-3">
        <HeaderBlock label="h2">Purpose</HeaderBlock>
        {renderHTMLContent("<b>User-friendly WordPress plugin</b> for <b>multilingual content</b>")}
        <ImageBlock
          src={AppIcon}
          alt="My Carousel purpose"
          className="image--boxed image--size-small image--aligned-centered"
        />
      </Container>

      <Container className="grid-mobile-3-4 grid-desktop-4-6">
        <ImageBlock
          src={AppIcon}
          alt="My Carousel role"
          className="image--boxed image--size-small image--aligned-centered"
        />
        <HeaderBlock label="h2">My role</HeaderBlock>
        {renderHTMLContent("<b>Lead Developer</b>: Architecture, <b>database</b> design, performance optimization and WordPress <b>hooks</b> integration")}
      </Container>

      <Container className="grid-mobile-1-2 grid-desktop-7-9">
        <HeaderBlock label="h2">Challenges</HeaderBlock>
        {renderHTMLContent("<b>Wordpress hooks</b>, database structure, <b>SEO</b> optimization")}
        <ImageBlock
          src={AppIcon}
          alt="My Carousel role"
          className="image--boxed image--size-small image--aligned-centered"
        />
      </Container>

      <Container className="grid-mobile-3-4 grid-desktop-10-12">
        <ImageBlock
          src={AppIcon}
          alt="My Carousel role"
          className="image--boxed image--size-small image--aligned-centered"
        />
        <HeaderBlock label="h2">Results</HeaderBlock>
        Project in development. Updates will be provided soon.
      </Container>

      <Separator />

      <Carousel className="grid-mobile-1-4 grid-desktop-1-6">
        <Slide className="carousel__slide carousel__slide--1">
          <HeaderBlock label="h3">Slide 1 — Intro</HeaderBlock>
          <ImageBlock
            src="https://picsum.photos/900/600?random=2"
            alt="Slide 1 mockup"
            className="image--boxed image--size-medium image--aligned-centered"
          />
          <TextBlock className="text-small">
            A short intro slide demonstrating layout and basic content.
          </TextBlock>
        </Slide>

        <Slide className="carousel__slide carousel__slide--2">
          <HeaderBlock label="h3">Slide 2 — Features</HeaderBlock>
          <ImageBlock
            src="https://picsum.photos/900/600?random=2"
            alt="Slide 2 mockup"
            className="image--boxed image--size-medium image--aligned-centered"
          />
          <TextBlock className="text-small">
            Highlights: responsive behavior, touch support, and smooth transitions.
          </TextBlock>
        </Slide>

        <Slide className="carousel__slide carousel__slide--3">
          <HeaderBlock label="h3">Slide 3 — Call to Action</HeaderBlock>
          <ImageBlock
            src="https://picsum.photos/900/600?random=2"
            alt="Slide 3 mockup"
            className="image--boxed image--size-medium image--aligned-centered"
          />
          <TextBlock className="text-small">
            Final slide with a mock CTA and brief summary.
          </TextBlock>
        </Slide>
      </Carousel>

      <Separator />
    </>
  );
};

export default MyDictionaryContent;
