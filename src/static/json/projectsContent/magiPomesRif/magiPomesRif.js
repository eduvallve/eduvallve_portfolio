import { Link } from 'react-router-dom';
import { Container, HeaderBlock, TextBlock, ImageBlock, Button, Separator } from '../../../../components';
import renderHTMLContent from '../../../../utils/renderHTMLContent.js';

const MagiPomesRifContent = () => {
  return (
    <>
      <Container className="grid-mobile-1-4 grid-desktop-1-12 margin-top--24">
        <Link to="/portfolio/" className="link-block navigation navigation--back">
          Back to portfolio
        </Link>
      </Container>

      <Container className="grid-mobile-1-3 grid-desktop-1-9 align-vertical-center" role="main" aria-labelledby="project-title">
        <HeaderBlock id="project-title" label="h1">Magí Pomés — Al Rif (Memorial)</HeaderBlock>
        {renderHTMLContent("<b>Memorial site</b> documenting the 1900 Morocco / Rif conflict and its local resonances")}
        <p>
          A respectfully curated memorial site exploring the historical context, personal stories,
          and cultural impact of the 1900 conflict in the Rif region of Morocco. The project
          combines archival material, interpretive text, and a visual timeline to make the history
          accessible and reflective.
        </p>
        <TextBlock className="text-highlighted text-small">
          Topics: History, Memorial, Archival research
        </TextBlock>
      </Container>

      <Container className="grid-mobile-4-4 grid-desktop-10-12">
        <ImageBlock
          src="https://picsum.photos/1200/700?random=3"
          alt="Archival photograph related to the Rif region, early 20th century"
          className="project__main-image project__main-image--bg-muted"
        />
      </Container>

      <Separator />

      <Container className="grid-mobile-1-4 grid-desktop-1-6 align-vertical-center">
        <HeaderBlock label="h2">Purpose and approach</HeaderBlock>
        <p>
          The site documents events, shares biographical notes of people affected, and provides
          primary sources and translations where possible. It aims to be historically accurate,
          sensitive to descendants, and useful for researchers and the public.
        </p>
      </Container>

      <Container className="grid-mobile-3-4 grid-desktop-7-12">
        <HeaderBlock label="h2">Project contents</HeaderBlock>
        <ol>
          <li><strong>Archival Research:</strong> Collect and transcribe primary documents and images.</li>
          <li><strong>Oral Histories:</strong> Record personal accounts and family memories.</li>
          <li><strong>Interpretation:</strong> Provide timelines, context, and references to scholarly work.</li>
        </ol>
      </Container>

      <ImageBlock
        src="https://picsum.photos/900/600?random=4"
        alt="Detail of a historical document photographed for the memorial"
        className="project__image grid-mobile-1-4 grid-desktop-1-6"
      />

      <Container className="grid-mobile-1-4 grid-desktop-7-12 align-vertical-center">
        <HeaderBlock label="h2">Further reading</HeaderBlock>
        <p>Selected external resources and archives for deeper research.</p>
        <Button
          type="link"
          url="https://en.wikipedia.org/wiki/Rif_War"
          className="button__secondary button--fit-content"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read background (external)
        </Button>
      </Container>

      <Separator />
    </>
  );
};

export default MagiPomesRifContent;
