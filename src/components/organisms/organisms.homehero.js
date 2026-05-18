import Marquee from "../atoms/atoms.marquee";
import profilePic from '../../static/images/profilePic.jpeg';
import scrollDown from '../../static/images/scroll_down-white.svg';
import graduated from '../../static/images/graduated-icon.svg';
import Button from "../atoms/atoms.button";
import NightSky from "../atoms/atoms.stars";
import TextLinkWithIcon from "../atoms/atoms.textLinkWithIcon";
import SocialIcons from "../molecules/molecules.socialIcons";
import Earth from "../atoms/atoms.earth";
import { useTranslation } from "react-i18next";

const HomeHero = ({ data }) => {
  const { t } = useTranslation();
  const years = new Date().getFullYear() - 2016;
  const texts = ["developer", "engineer", "creative", "explorer"];

  // Destructure data from Sanity but provide defaults just in case
  const {
    homeHeroTitle = "Hello, I'm Eduard Vallve",
    homeHeroRole = "a frontend",
    homeHeroBriefTitle = t('home.briefTitle'),
    homeHeroSubtitle = "Front-end first, but with a full-stack view.",
    aboutMe = "years of experience and passionate about creating clear, useful and attractive interfaces.",
    stackLabel = t('home.stack'),
    stackList = "HTML5, CSS3, JavaScript (ES6+), React.js, Sass, npm, NodeJS, Git, Adobe Experience Manager, PHP, SQL, MariaDB, and many more!"
  } = (data || {});

  return (
    <section id="hello" className="home__hero">
      <div className="home__hero-content">
        <div className="home__hero-greet">
          <div className="home__hero-greet--wave">
            <span>
              <h1>{homeHeroTitle}</h1>
            </span>
            <br />
            <div className="home__hero-greet-role-container">
              <span>{homeHeroRole}</span>{" "}
              <span>
                <Marquee texts={texts} />
              </span>
            </div>
          </div>
          <div className="home__hero__socialicons">
            <SocialIcons />
          </div>
        </div>
        <div className="home__hero-scroll scroll--down" id="about">
          <a href="#about" aria-label={t('a11y.scrollDown')}>
            <img src={scrollDown} alt={t('a11y.scrollDown')} width="30" height="30"></img>
          </a>
        </div>
        <div className="home__hero-brief flex-direction flex-direction-mobile-vertical">
          <div className="flex-direction grid-desktop grid-desktop-6-cols">
            <img src={profilePic} alt="profile" className="home__hero-brief--profile grid-desktop-1-1"></img>
            <div className="flex-direction flex-direction-mobile-vertical grid-desktop-2-6">
              <div className="flex-direction flex-direction-mobile-vertical">
                <div className="flex-direction flex-direction-mobile-horizontal align-center justify-between">
                  <h2 className="home__hero-brief--title">{homeHeroBriefTitle}</h2>
                  <Button className="button__secondary" type="external-link" url="https://www.linkedin.com/in/eduvallve/">linkedin</Button>
                </div>
              </div>
              <p>{homeHeroSubtitle}</p>
              <p>{years} {aboutMe}</p>
            </div>
          </div>
          <div className="flex-direction flex-direction-mobile-vertical grid-desktop grid-desktop-6-cols">
            <div className="flex-direction flex-direction-mobile-vertical grid-desktop-1-3 font-size-14">
              <TextLinkWithIcon iconUrl={graduated} alt={t('home.degree1')} label={t('home.degree1')} />
              <TextLinkWithIcon iconUrl={graduated} alt={t('home.degree2')} label={t('home.degree2')} />
            </div>
            <div className="grid-desktop-4-6 font-size-14">
              <b>{stackLabel}:</b> {stackList}
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
