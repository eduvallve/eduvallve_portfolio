// Content for the Museu Picasso de Barcelona project page

import { Link } from 'react-router-dom';
import { Container, Image, Button, Separator } from '../../../../components';
import ProjectLogo from "./jewelsBcn-logo.png";
import Mockup02 from "./jewelsBcn-mockup.png";

const JewelsBcnContent = () => {
  return (
    <>
      <Link to="/portfolio/" aria-label="Back to portfolio" className="navigation navigation--back grid-mobile-1-4 grid-desktop-1-12 margin-top--24">
          Back to portfolio
      </Link>

      <Container className="grid-mobile-1-3 grid-desktop-1-9 align-vertical-center">
        <h1>Jewels Barcelona</h1>
        <p>Redesign of an ecommerce website for an online enamel jewelry store based in Barcelona.</p>
        <p className="text-highlighted text-small">
          Stack: BigCartel, HTML5, CSS3.
        </p>
        <p className="text-highlighted text-small">
          Developed in <b>2018</b> as a freelance project.
        </p>
      </Container>

      <Container className="grid-mobile-4-4 grid-desktop-10-12">
        <Image
          src={ProjectLogo}
          alt="Logo of Jewels Barcelona"
          className="project__main-image project__main-image-logo"
        />
      </Container>

      <Separator />

      <Image
        src={Mockup02}
        alt="Mockup of the Jewels Barcelona website redesign"
        className="project__image grid-mobile-1-4 grid-desktop-1-5"
      />

      <Container className="grid-mobile-1-4 grid-desktop-7-12 align-vertical-center">
        <h2>Design process</h2>
        <p>The client wanted a fresh and modern look for their online store, with a focus on simplicity and ease of navigation. The redesign aimed to enhance the user experience while maintaining the brand's identity.</p>
        <p>The new design features a clean layout, improved product categorization, and a streamlined checkout process to facilitate purchases. The color scheme was chosen to reflect the elegance of the jewelry while ensuring readability and accessibility.</p>
        <p>Overall, the redesign successfully improved the website's aesthetics and functionality, leading to increased user engagement and sales.</p>
        <Button
          type="external-link"
          url="https://www.jewelsbarcelona.com/"
          className="button__secondary button--fit-content"
        >
          Go to online store
        </Button>
      </Container>

      <Separator />
    </>
  );
};

export default JewelsBcnContent;
