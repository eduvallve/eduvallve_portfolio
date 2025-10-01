import Marquee from "../atoms/Marquee";
import profilePic from '../../static/images/profilePic.jpeg';
import scrollDown from '../../static/images/scroll_down-white.svg';
import Button from "../atoms/button";
import NightSky from "../atoms/stars";

const HomeHero = () => {
  const texts = ["developer", "engineer", "creative", "explorer"];
  return (
    <section className="home__hero">
      <div className="home__hero-content">
        <div className="home__hero-greet">
          <span>
            <h1>Hello, I'm Eduard Vallve</h1>,
          </span>
          <br />
          <span>a frontend</span>{" "}
          <span>
            <Marquee texts={texts} />
          </span>
        </div>
        <div className="home__hero-scroll" id="about">
          <a href="#about">
            <img src={scrollDown} alt="scroll down"></img>
          </a>
        </div>
        <div className="home__hero-brief flex-direction flex-direction-mobile-vertical">
          <div className="flex-direction flex-direction-mobile-vertical  grid-desktop grid-desktop-6-cols">
              <img src={profilePic} alt="profile" className="home__hero-brief--profile grid-desktop-1-1"></img>
              <div className="flex-direction flex-direction-mobile-vertical grid-desktop-2-6">
                  <div className="flex-direction flex-direction-mobile-horizontal">
                      <h2 className="home__hero-brief--title">Briefly about me</h2>
                      <Button classes="button__secondary" type="link" url="https://www.linkedin.com/in/eduvallve/">linkedin</Button>
                  </div>
                  <p>Front-end first, but with a full-stack view.</p>
                  <p>
                      9 years of experience and passionate about creating clear, useful
                      and attractive interfaces.
                  </p>
              </div>
          </div>
          <div className="flex-direction flex-direction-mobile-vertical grid-desktop grid-desktop-6-cols">
              <div className="flex-direction flex-direction-mobile-vertical grid-desktop-1-2 font-size-14">
                  <p>Multimedia (UPC).</p>
                  <p>Master in UX & Interface design (UOC).</p>
              </div>
              <div className="grid-desktop-3-6 font-size-14">
                  Stack: HTML5, CSS3, JavaScript (ES6+), React.js, Sass, npm, NodeJS, Git, Adobe Experience Manager, PHP, SQL, MariaDB
              </div>
          </div>
        </div>
      </div>
      <div className="home__hero-night-box">
        <NightSky coef={1} />
        <NightSky maxStarRadius={2} starSpacing={25} canvasgrowth={.75} radius={'100%'} coef={.75} />
      </div>
    </section>
  );
};

export default HomeHero;
