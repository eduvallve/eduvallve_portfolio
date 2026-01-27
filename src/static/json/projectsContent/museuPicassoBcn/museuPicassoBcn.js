// Content for the Museu Picasso de Barcelona project page

import { Link } from 'react-router';
import { Container, HeaderBlock, TextBlock, ImageBlock, Button, Separator } from '../../../../components';
import renderHTMLContent from '../../../../utils/renderHTMLContent.js';
import ProjectLogo from "./Logo-Picasso-black.svg";
import Mockup02 from "./museuPicassoBcn_mockup_02.webp";

const MuseuPicassoBcnContent = () => {
  return (
    <>
      <Link to="/portfolio/" className="navigation navigation--back grid-mobile-1-4 grid-desktop-1-12 margin-top--24">
          Back to portfolio
      </Link>

      <Container className="grid-mobile-1-3 grid-desktop-1-9 align-vertical-center">
        <HeaderBlock label="h1">Museu Picasso de Barcelona</HeaderBlock>
        {renderHTMLContent("<b>Fictional redesign</b> of the website for the Picasso Museum in Barcelona")}
        Full website redesign based on UI/UX techniques learnt during the Master's Degree in Interaction Design and User Experience (UX), UOC.
        <TextBlock className="text-highlighted text-small">
          Stack: FIGMA
        </TextBlock>
        <TextBlock className="text-highlighted text-small">
          Academical project developed in 2022.
        </TextBlock>
      </Container>

      <Container className="grid-mobile-4-4 grid-desktop-10-12">
        <ImageBlock
          src={ProjectLogo}
          alt="Image 1"
          className="project__main-image project__main-image--bg-blue project__main-image-logo"
        />
      </Container>

      <Separator />

      <ImageBlock
        src={Mockup02}
        alt="Image 1"
        className="project__image grid-mobile-1-4 grid-desktop-1-6"
      />

      <Container className="grid-mobile-1-4 grid-desktop-7-12 align-vertical-center">
        <HeaderBlock label="h2">UI design based on UX techniques</HeaderBlock>
        UX phases and techniques applied into the project to reach the desired result:
        1. Research phase: <b>Heuristic Evaluation</b>, <b>User Personas</b>, User Journeys and Tree Testing.
        2. Protoyping phase: Card sorting, Sketching, Low-fidelity wireframes, High-fidelity mockups and Interactive prototype.
        3. Evaluation phase: Usability testing, Cognitive walkthrough, Euristic evaluation and Feedback analysis.
        <Button
          type="link"
          url="https://www.figma.com/proto/OayvxxOwv4kcHV7nRbENXw/TFM-Edu-Vallv%C3%A9---Prototip-redisseny-web-Museu-Picasso-BCN---Amb-colors-i-imatges?content-scaling=fixed&kind=proto&node-id=14-359&page-id=14%3A268&scaling=min-zoom&starting-point-node-id=14%3A359"
          className="button__secondary button--fit-content"
        >
          View prototype in Figma
        </Button>
      </Container>

      <Separator />
    </>
  );
};

export default MuseuPicassoBcnContent;
