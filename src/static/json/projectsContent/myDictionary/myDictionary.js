// Content for the My Dictionary project page

import { Link } from 'react-router-dom';
import { Container, TextBlock, Image, Carousel, Slide, Separator } from '../../../../components';
import renderHTMLContent from '../../../../utils/renderHTMLContent.js';
import AppIcon from "./myDictionary-v1-square.webp";

const MyDictionaryContent = () => {
  return (
    <>
      <Link to="/portfolio/" className="navigation navigation--back grid-mobile-1-4 grid-desktop-1-12 margin-top--24">
          Back to portfolio
      </Link>

      <Container className="grid-mobile-1-3 grid-desktop-1-9 align-vertical-center">
        <h1>My Dictionary</h1>
        A fast, user-friendly WordPress plugin for effortless multilingual content management. Focused on performance and usability. Project in continuous development.
        <p className="text-highlighted text-small">
          Stack: WordPress, PHP, JavaScript
        </p>
        <p className="text-highlighted text-small">
          Developed in <b>2025</b>
        </p>
      </Container>

      <Image
        src={AppIcon}
        alt="Logo of My Dictionary WordPress plugin"
        className="project__main-image project__main-image-logo grid-mobile-4-4 grid-desktop-10-12"
      />

      <Separator />

      <Container className="grid-mobile-1-2 grid-desktop-1-3">
        <h2 className="text-highlighted">Purpose</h2>
        <b>User-friendly WordPress plugin</b> for <b>multilingual content</b>
        <Image
          src={AppIcon}
          alt="My Carousel purpose"
          className="image--boxed image--size-small image--aligned-centered"
        />
      </Container>

      <Container className="grid-mobile-3-4 grid-desktop-4-6">
        <Image
          src={AppIcon}
          alt="My Carousel role"
          className="image--boxed image--size-small image--aligned-centered"
        />
        <h2 className="text-highlighted">My role</h2>
        {renderHTMLContent("<b>Lead Developer</b>: Architecture, <b>database</b> design, performance optimization and WordPress <b>hooks</b> integration")}
      </Container>

      <Container className="grid-mobile-1-2 grid-desktop-7-9">
        <h2 className="text-highlighted">Challenges</h2>
        {renderHTMLContent("<b>Wordpress hooks</b>, database structure, <b>SEO</b> optimization")}
        <Image
          src={AppIcon}
          alt="My Carousel role"
          className="image--boxed image--size-small image--aligned-centered"
        />
      </Container>

      <Container className="grid-mobile-3-4 grid-desktop-10-12">
        <Image
          src={AppIcon}
          alt="My Carousel role"
          className="image--boxed image--size-small image--aligned-centered"
        />
        <h2 className="text-highlighted">Results</h2>
        Project in development. Updates will be provided soon.
      </Container>

      <Separator />

      <Carousel className="grid-mobile-1-4 grid-desktop-1-6">
        <Slide className="carousel__slide carousel__slide--1">
          <h3>Slide 1 — Intro</h3>
          <Image
            src="https://picsum.photos/900/600?random=2"
            alt="Slide 1 mockup"
            className="image--boxed image--size-medium image--aligned-centered"
          />
          <p className="text-small">
            A short intro slide demonstrating layout and basic content.
          </p>
        </Slide>

        <Slide className="carousel__slide carousel__slide--2">
          <h3>Slide 2 — Features</h3>
          <Image
            src="https://picsum.photos/900/600?random=2"
            alt="Slide 2 mockup"
            className="image--boxed image--size-medium image--aligned-centered"
          />
          <p className="text-small">
            Highlights: responsive behavior, touch support, and smooth transitions.
          </p>
        </Slide>

        <Slide className="carousel__slide carousel__slide--3">
          <h3>Slide 3 — Call to Action</h3>
          <Image
            src="https://picsum.photos/900/600?random=2"
            alt="Slide 3 mockup"
            className="image--boxed image--size-medium image--aligned-centered"
          />
          <p className="text-small">
            Final slide with a mock CTA and brief summary.
          </p>
        </Slide>
      </Carousel>

      <Separator />
    </>
  );
};

export default MyDictionaryContent;
