// Content for the My Dictionary project page

import { Link } from 'react-router-dom';
import { Container, Button, Image, Carousel, Slide, Separator } from '../../../../components';
import AppIcon from "./myDictionary-v2-square.png";
import HandDrawnArrowBrokenLine from "../../../images/arrow-handdrawn-broken-line.svg";
import DownloadZip from "./my-dictionary.zip";

const MyDictionaryContent = () => {
  return (
    <>
      <Link to="/portfolio/" className="navigation navigation--back grid-mobile-1-4 grid-desktop-1-12 margin-top--24">
          Back to portfolio
      </Link>

      <Container className="grid-mobile-1-3 grid-desktop-1-9 align-vertical-center">
        <h1>My Dictionary</h1>
        <p>My Dictionary is a compact <b>WordPress plugin</b> designed to simplify multilingual content publishing. It provides editors with an intuitive translation workflow, while offering developers lightweight integration options via shortcodes.</p>
        <p>Status: <i>Minimal Viable Product</i>. Improvements will come soon.</p>
        
        <p className="text-highlighted text-small">
          Stack: WordPress, PHP, JavaScript
        </p>
        <p className="text-highlighted text-small">
          Developed in <b>2025</b>
        </p>
      </Container>

      <Container className="grid-mobile-4-4 grid-desktop-10-12">
        <Image
          src={AppIcon}
          alt="My Dictionary plugin logo"
          className="project__main-image project__main-image-logo"
          />
      </Container>

      <Separator />

      <Container className="grid-mobile-1-2 grid-desktop-1-3">
        <h2 className="text-highlighted">💡 Purpose</h2>
        <b>User-friendly WordPress plugin</b> for <b>multilingual content management</b>
      </Container>

      <Container className="grid-mobile-3-4 grid-desktop-4-6">
        <h2 className="text-highlighted">👨🏻‍💻 My role: full-stack</h2>
        Back-end architecture, Front-end development & QA testing
      </Container>

      <Container className="grid-mobile-1-2 grid-desktop-7-9">
        <h2 className="text-highlighted">💪🏼 Challenges</h2>
        WordPress integration, performance optimization, and intuitive UI design
      </Container>

      <Container className="grid-mobile-3-4 grid-desktop-10-12">
        <h2 className="text-highlighted">☑️ Results</h2>
        <b>Fast performance</b>, and <b>easy content management</b>
      </Container>

      <Separator />

      <Carousel className="grid-mobile-1-4 grid-desktop-1-6 carousel--basic" autoplay={false} autoplayDelay={5000}>
        <Slide>
          <h3>Overview — lightweight plugin and goals</h3>
          <Image
            src="https://picsum.photos/900/600?random=2"
            alt="Slide 1 mockup"
            className="image--boxed image--size-medium image--aligned-centered"
          />
          <p className="text-small">
            A short intro slide demonstrating layout and basic content.
          </p>
        </Slide>

        <Slide>
          <h3>Editor & shortcodes</h3>
          <Image
            src="https://picsum.photos/900/600?random=2"
            alt="Slide 2 mockup"
            className="image--boxed image--size-medium image--aligned-centered"
          />
          <p className="text-small">
            Highlights: responsive behavior, touch support, and smooth transitions.
          </p>
        </Slide>

        <Slide>
          <h3>Fast performance, simple integration</h3>
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

      <Container className='grid-mobile-1-4 grid-desktop-7-12 align-vertical-center'>
        <h2>Key Features</h2>
        <ul>
          <li>Easy translation editor with per‑post language fields</li>
          <li>Shortcode and template helper functions for theme integration</li>
          <li>Lightweight, performance‑focused output and caching friendly</li>
        </ul>
      </Container>

      <Separator />

      <Container className="grid-mobile-1-4 grid-desktop-1-12 align-vertical-center text--aligned-centered">
        <Image
          src={HandDrawnArrowBrokenLine}
          alt="Pointing arrow to github repo link in desktop."
          className="image--aligned-centered"
          style={{ width: "60px", height: "auto", fill: "#83c2c1", "--rotation-angle": "192deg" }}
        />
        <h2>Ready to use!</h2>
        <p className="text--aligned-centered text-highlighted">
          Try the plugin and enhance your WordPress site with multilingual capabilities!
        </p>
        <Button
          type="external-link"
          url={DownloadZip}
          className="button__primary button--fit-content button--centered">
          Download the .ZIP plugin
        </Button>
        <Button
          type="external-link"
          url="https://github.com/eduvallve/my-dictionary"
          className="button__secondary button--fit-content button--centered"
          target="_blank"
          rel="noopener noreferrer">
          View source code on GitHub
        </Button>
      </Container>

      <Separator />
    </>
  );
};

export default MyDictionaryContent;
