import Marquee from "../atoms/atoms.marquee";
import profilePic from '../../static/images/profilePic.jpeg';
import scrollDown from '../../static/images/scroll_down-white.svg';
import graduated from '../../static/images/graduated-icon.svg';
import Button from "../atoms/atoms.button";
import NightSky from "../atoms/atoms.stars";
import TextLinkWithIcon from "../atoms/atoms.textLinkWithIcon";
import SocialIcons from "../molecules/molecules.socialIcons";
import Earth from "../atoms/atoms.earth";

const HomeHero = () => {
  const years = new Date().getFullYear() - 2016;
  const texts = ["developer", "engineer", "creative", "explorer"];
  return (
    <section id="hello" className="home__hero">
      <div className="home__hero-content">
        <div className="home__hero-greet">
          <div className="home__hero-greet--wave">
            <span>
              <h1>Hello, I'm Eduard Vallve</h1>,
            </span>
            <br />
            <span>a frontend</span>{" "}
            <span>
              <Marquee texts={texts} />
            </span>
          </div>
          <div className="home__hero__socialicons">
            <SocialIcons />
          </div>
        </div>
        <div className="home__hero-scroll scroll--down" id="about">
          <a href="#about" aria-label="Scroll down to About section">
            <img src={scrollDown} alt="scroll down" width="30" height="30"></img>
          </a>
        </div>
        <div className="home__hero-brief flex-direction flex-direction-mobile-vertical">
          <div className="flex-direction grid-desktop grid-desktop-6-cols">
            <img src={profilePic} alt="profile" className="home__hero-brief--profile grid-desktop-1-1"></img>
            <div className="flex-direction flex-direction-mobile-vertical grid-desktop-2-6">
              <div className="flex-direction flex-direction-mobile-horizontal">
                <h2 className="home__hero-brief--title">Briefly about me</h2>
                <Button className="button__secondary" type="link" url="https://www.linkedin.com/in/eduvallve/">linkedin</Button>
              </div>
              <p>Front-end first, but with a full-stack view.</p>
              <p>
                {years} years of experience and passionate about creating clear, useful
                and attractive interfaces.
              </p>
            </div>
          </div>
          <div className="flex-direction flex-direction-mobile-vertical grid-desktop grid-desktop-6-cols">
            <div className="flex-direction flex-direction-mobile-vertical grid-desktop-1-3 font-size-14">
              <TextLinkWithIcon iconUrl={graduated} alt="Bachelor's degree in Multimedia" label="Bachelor's degree in Multimedia, UPC" />
              <TextLinkWithIcon iconUrl={graduated} alt="Master degree un Ux." label="Master's Degree in Interaction Design and User Experience (UX), UOC" />
            </div>
            <div className="grid-desktop-4-6 font-size-14">
              <b>Stack:</b> HTML5, CSS3, JavaScript (ES6+), React.js, Sass, npm, NodeJS, Git, Adobe Experience Manager, PHP, SQL, MariaDB, and many more!
            </div>
          </div>
        </div>
      </div>
      <div className="home__hero-night-box">
        <NightSky />
      </div>
      <Earth />
    </section>
  );
};

export default HomeHero;
