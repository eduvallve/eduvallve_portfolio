// Content for the My Carousel project page

import { Link } from 'react-router-dom';
import { Container, Image, Carousel, Button, Separator } from '../../../../components';
import AppIcon from "./myCarousel-v2-square.png";
import HandDrawnArrowBrokenLine from "../../../images/arrow-handdrawn-broken-line.svg";
import DownloadZip from './my-carousel.zip';

const MyCarouselContent = () => {
  return (
    <>
      <Link to="/portfolio/" aria-label="Back to portfolio" className="navigation navigation--back grid-mobile-1-4 grid-desktop-1-12 margin-top--24">
        Back to portfolio
      </Link>

      <Container className="grid-mobile-1-3 grid-desktop-1-9 align-vertical-center">
        <h1>My Carousel</h1>
        <span>A <b>WordPress carousel plugin</b> built with <b>SwiperJS</b> for creating <b>responsive, mobile-friendly, and customizable sliders</b> with <b>fast performance</b>, smooth animations, and <b>touch interactions</b>.</span>
        Status: Completed
        <p className="text-highlighted text-small">
          Stack: <b>WordPress, PHP, JavaScript, SwiperJS</b>
        </p>
        <p className="text-highlighted text-small">
          Developed in <b>2025</b>
        </p>
      </Container>

      <Container className="grid-mobile-4-4 grid-desktop-10-12">
        <Image
          src={AppIcon}
          alt="Logo of My Carousel WordPress plugin"
          className="project__main-image project__main-image-logo"
        />
      </Container>

      <Separator />

      <Container className="grid-mobile-1-2 grid-desktop-1-3">
        <h2 className="text-highlighted">💡 Purpose</h2>
        <p><b>User-friendly WordPress plugin</b> for <b>responsive carousels</b></p>
      </Container>

      <Container className="grid-mobile-3-4 grid-desktop-4-6">
        <h2 className="text-highlighted">👨🏻‍💻 My role: full-stack</h2>
        <p>Back-end architecture, Front-end development & QA testing</p>
      </Container>

      <Container className="grid-mobile-1-2 grid-desktop-7-9">
        <h2 className="text-highlighted">💪🏼 Challenges</h2>
        <p><b>WordPress integration</b>, <b>theme compatibility</b>, and <b>intuitive UI design</b></p>
      </Container>

      <Container className="grid-mobile-3-4 grid-desktop-10-12">
        <h2 className="text-highlighted">☑️ Results</h2>
        <p><b>Smooth animations</b>, <b>touch interactions</b>, and <b>full customization</b></p>
      </Container>

      <Separator />

      <Container className="grid-mobile-1-4 grid-desktop-1-12">
        <Image
          src={HandDrawnArrowBrokenLine}
          alt="Pointing arrow to demo carousel"
          label="This is a live demo of one SwiperJS carousel in action."
          className="image__svg--show-alt hidden--desktop text-small"
          style={{ width: "60px", height: "auto", fill: "#83c2c1", color: "#83c2c1", "--rotation-angle": "155deg" }}
        />
      </Container>

      <Carousel className="grid-mobile-1-4 grid-desktop-1-6 carousel--default" />

      <Container className="grid-mobile-1-4 grid-desktop-7-12 align-vertical-center">
        <h2>Functional result</h2>
        The carousel plugin offers a seamless way to showcase images and content with customizable options for transitions, navigation, and responsiveness:
        <ol>
          <li><b>Smooth slide transitions</b> and <b>touch/swipe support for mobile devices</b>.</li>
          <li><b>Customizable navigation</b> and <b>pagination</b>.</li>
          <li><b>Responsive design adapting to various screen sizes</b>.</li>
          <li><b>Easy integration with WordPress via shortcode</b>.</li>
        </ol>
        <Image
          src={HandDrawnArrowBrokenLine}
          alt="Pointing arrow to demo carousel"
          label="This is a live demo of one SwiperJS carousel in action."
          className="image__svg--show-alt hidden--mobile text-small"
          style={{ width: "60px", height: "auto", fill: "#83c2c1", color: "#83c2c1", "--rotation-angle": "-45deg" }}
        />
      </Container>

      <Separator className="hidden--mobile" />

      <Container className="grid-mobile-1-4 grid-desktop-1-6 align-vertical-center">
        <h2>Transparent back-office</h2>
        The plugin includes a user-friendly back-office interface for easy management of carousel settings and content:
        <ol>
          <li><b>Intuitive UI</b> for creating and managing carousels.</li>
          <li>Minimal field requirements.</li>
          <li>Full CSS customization.</li>
        </ol>
      </Container>

      <Separator className="hidden--desktop" />

      <Image
        src="https://picsum.photos/900/600?random=2"
        alt="Random image representing the back-office of My Carousel plugin"
        className="grid-mobile-1-4 grid-desktop-7-12"
      />

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
          Try the plugin and enhance your WordPress site with beautiful, responsive carousels!
        </p>
        <Button
          type="external-link"
          url={DownloadZip}
          className="button__primary button--fit-content button--centered">
          Download the .ZIP plugin
        </Button>
        <Button
          type="external-link"
          url="https://github.com/eduvallve/my-carousel"
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

export default MyCarouselContent;
