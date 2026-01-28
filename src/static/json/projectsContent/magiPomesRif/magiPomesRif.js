import { Link } from 'react-router-dom';
import { Container, Image, Button, Separator } from '../../../../components';
import Thumbnail from "./magiPomesRif-thumbnail.png";
import Mockup from "./magiPomesRif-mockup.png";

const MagiPomesRif = () => {
  return (
    <>
      <Link to="/portfolio/" className="navigation navigation--back grid-mobile-1-4 grid-desktop-1-12 margin-top--24">
        Back to portfolio
      </Link>

      <Container className="grid-mobile-1-3 grid-desktop-1-9 align-vertical-center" role="main" aria-labelledby="project-title">
        <h1 id="project-title">Magí Pomés al Rif</h1>
        <span><b>Postcards collection</b> presenting the postcards Magí Pomés sent to his relatives during the Rif campaign</span>
        <p>
          This project curates Magí Pomés' postcards exchanged with family while he was involved in the Rif conflict around 1900.
          The site focuses exclusively on those personal postcards: images, transcriptions, dates and short contextual notes
          that help trace the correspondence and its emotional and historical contours.
        </p>
        <p className="text-highlighted text-small">
          Stack: React · CSS · GitHub Pages
        </p>
        <p className="text-highlighted text-small">
          Developed in <b>2020</b>
        </p>
      </Container>

      <Image
        src={Thumbnail}
        alt="Screenshot of Magí Pomés — Al Rif project homepage"
        className="project__main-image project__main-image--bg-muted grid-mobile-4-4 grid-desktop-10-12"
      />

      <Separator className="hidden--mobile" />
      
      <Container className="grid-mobile-1-4 grid-desktop-1-6">
        <h2>Purpose & approach</h2>
        <p>
          The site presents individual postcards as primary documents: legible images, transcriptions and brief translations
          when needed. The aim is a respectful, focused presentation of personal correspondence rather than a broad military history.
        </p>
      </Container>

      <Container className="grid-mobile-1-4 grid-desktop-7-12">
        <h2>What I built</h2>
        <ol>
          <li><b>Lightweight static site</b> in React and CSS.</li>
          <li><b>Image-first layout</b> to showcase the postcards themselves.</li>
          <li><b>Readable transcriptions</b> and short contextual notes for each item.</li>
        </ol>
      </Container>

      <Separator className="hidden--mobile" />

      <Image
        src={Mockup}
        alt="Sample archival postcard displayed in the project"
        className="project__image grid-mobile-1-4 grid-desktop-1-6"
      />

      <Container className="grid-mobile-1-4 grid-desktop-7-12 align-vertical-center">
        <h2>Visit the site</h2>
        <p>See the full postcard collection online:</p>
        <Button
          type="external-link"
          url="https://eduvallve.github.io/magi-pomes/"
          className="button__secondary button--fit-content"
          target="_blank"
          rel="noopener noreferrer"
        >
          View the live memorial site
        </Button>
      </Container>

      <Separator />
    </>
  );
};

export default MagiPomesRif;
