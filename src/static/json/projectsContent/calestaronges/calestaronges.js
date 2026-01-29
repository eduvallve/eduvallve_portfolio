import { Link } from 'react-router-dom';
import { Container, Image, Button, Separator } from '../../../../components';
import LogoDesktop from "./calestaronges-logo.svg";
import LogoMobile from "./calestaronges-logo-mini.svg";
import Mockup from "./calestaronges-mockup.png";
import eCommerceMockup from "./calestaronges-ecommerce.png";
import motionGraphics from "./calestaroges-motion-graphics.webp";

const CaLesTaronges = () => {
    return (
        <>
            <Link to="/portfolio/" className="navigation navigation--back grid-mobile-1-4 grid-desktop-1-12 margin-top--24">
                Back to portfolio
            </Link>

            <Container className="grid-mobile-1-3 grid-desktop-1-9 align-vertical-center" role="main" aria-labelledby="project-title">
                <h1 id="project-title">Ca Les Taronges</h1>
                <span>Global design project</span>
                <p>
                    Fully responsive website and video creation for Ca les Taronges, a boutique cake shop in Valls, Tarragona.
                    The project included website development, eCommerce management and promotional video production.
                </p>
                <p className="text-highlighted text-small">
                    Stack: WordPress · PHP · JavaScript · CSS · After Effects · Premiere Pro · Bigcartel
                </p>
                <p className="text-highlighted text-small">
                    Developed <b>2016</b> - <b>2023</b>
                </p>
            </Container>

            <Container className="grid-mobile-4-4 grid-desktop-10-12">
                {/* Logo variations in different screen sizes. TODO: replace this with <picture> and <sources> tags */}
                <Image
                    src={LogoMobile}
                    alt="Ca les taronges corporate logo"
                    className="hidden--desktop margin-top--0"
                    fill="#83c2c1"
                />
                <Image
                    src={LogoDesktop}
                    alt="Ca les taronges corporate logo"
                    className="hidden--mobile margin-top--0"
                    fill="#83c2c1"
                />
            </Container>

            <Separator />

            <Image
                src={Mockup}
                alt="Sample archival postcard displayed in the project"
                className='grid-mobile-1-4 grid-desktop-1-6'
            />

            <Container className="grid-mobile-1-4 grid-desktop-7-12 align-vertical-center">
                <h2 className='text-highlighted'>1. Website</h2>
                <p>A brand new corporate website has been designed from scratch. by means of User Centered Design techniques, an initial wireframe became a Figma mockup prototype, and eventually a former fully-functional responsive website that automatically adapts its main content to the current time of the year.</p>
                <p>A great User Experience is key for the project. For that, I made efforts to find the balance between appeal and functionality, cross-browser and cross-device.</p>
                <p>At the end, the site must be a clear source of knowledge about the company for the end users, and it must communicate with the cake shop eCommerce in a clear, smooth way.</p>
                <Button
                    type="external-link"
                    url="https://calestaronges.com"
                    className="button__secondary button--fit-content"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Visit the corporate site
                </Button>

            </Container>

            <Separator className='hidden-desktop' />

            <Container className="grid-mobile-1-4 grid-desktop-1-6 align-vertical-center">
                <h2 className='text-highlighted'>2. eCommerce</h2>
                <p>The next step for a global digitalization of the shop is an eCommerce. In a cooperative effort, the online store was populated with all the catalogue products in stock. The eCommerce feels like an inner part of the corporate website despite having its own engine and back-end configurations.</p>
                <p>As a developer, I integrated the navigation areas (header & footer) from the corporate website in the eCommerce.</p>
                <p>As a result, both site and eCommerce offer a unified experience to the end user.</p>
                <Button
                    type="external-link"
                    url="https://www.melmeladesartesanes.com"
                    className="button__secondary button--fit-content"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Visit the eCommerce site
                </Button>

            </Container>

            <Image
                src={eCommerceMockup}
                alt="Sample archival postcard displayed in the project"
                className='grid-mobile-1-4 grid-desktop-7-12'
            />

            <Separator />

            <Image
                src={motionGraphics}
                alt="Sample archival postcard displayed in the project"
                className='grid-mobile-1-4 grid-desktop-1-5'
            />

            <Container className="grid-mobile-1-4 grid-desktop-7-12 align-vertical-center">
                <h2 className='text-highlighted'>3. Motion graphics</h2>
                <p>Videos are a fundamental pillar of the communication nowadays. Pastisseria Valls already used them in their social networks.</p>
                <p>Even though, new videos were required for some campaigns. I helped them create several videos and motion graphic animations for special days all over the year.</p>
                <p>This content was used in social networks, the website and even the TVs located inside of the physical cake shop.</p>
                <Button
                    type="external-link"
                    url="https://calestaronges.com/videoteca/"
                    className="button__secondary button--fit-content"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Go to video gallery
                </Button>

            </Container>

            <Separator className="separator--doubled" />
        </>
    );
};

export default CaLesTaronges;
