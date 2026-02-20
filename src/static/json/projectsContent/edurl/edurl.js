// Content for the EdURL project page

import { Link } from 'react-router-dom';
import { Container, Image, Button, Separator } from '../../../../components';
import LogoDesktop from './edurl-logo-extended.svg';
import LogoMobile from './edurl-logo.svg';
import Mockup01 from './edurl-mockup-1024-b.webp';

const EdURLContent = function () {
    return (
        <>
            <Link to="/portfolio/" aria-label="Back to portfolio" className="navigation navigation--back grid-mobile-1-4 grid-desktop-1-12 margin-top--24">
                Back to portfolio
            </Link>

            <Container className="grid-mobile-1-3 grid-desktop-1-9 align-vertical-center">
                <h1>EdUrl: easy URL Shortener</h1>
                <p>A simple, fast, and secure URL shortener service built with Node.js, Express, and Turso (cloud SQLite). </p>
                <p className="text-highlighted text-small">
                    Stack: HTML5, CSS3, NextJS, Express, SQLite.
                </p>
                <p className="text-highlighted text-small">
                    Developed in <b>2026</b> as a personal project.
                </p>
            </Container>

            <Container className="grid-mobile-4-4 grid-desktop-10-12">
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

            <Container className="grid-mobile-1-2 grid-desktop-1-3">
                <h2 className="text-highlighted">💡 Purpose</h2>
                <p><b>User friendly</b> URL shortener service for free use</p>
            </Container>

            <Container className="grid-mobile-3-4 grid-desktop-4-6">
                <h2 className="text-highlighted">👨🏻‍💻 My role: full-stack</h2>
                <p>Back-end architecture, Front-end development & QA testing</p>
            </Container>

            <Container className="grid-mobile-1-2 grid-desktop-7-9">
                <h2 className="text-highlighted">💪🏼 Challenges</h2>
                <p><b>NextJS & SQLite integration</b>, optimization and statistic monitoring</p>
            </Container>

            <Container className="grid-mobile-3-4 grid-desktop-10-12">
                <h2 className="text-highlighted">☑️ Results</h2>
                <p><b>Fast performance</b>, and <b>easy to use</b> feature</p>
            </Container>

            <Separator />

            <Image
                src={Mockup01}
                alt="Mockup of the EdUrl website"
                className="project__image grid-mobile-1-4 grid-desktop-1-5"
            />

            <Container className="grid-mobile-1-4 grid-desktop-7-12 align-vertical-center">
                <h2>About the project</h2>
                <p>A lightweight and efficient URL shortening tool developed with the support of AI-driven coding workflows. </p>
                <p>Built as an experiment in combining traditional development practices with AI-augmented programming, it demonstrates how modern tools can accelerate prototyping and streamline implementation.</p>
                <p>Free to use! <span className='text-highlighted'>I hope you enjoy it!</span></p>
                <Button
                    type="external-link"
                    url="https://edurl.vercel.app"
                    className="button__secondary button--fit-content"
                >
                    Go to the site
                </Button>
            </Container>

            <Separator />
        </>
    );
}

export default EdURLContent;