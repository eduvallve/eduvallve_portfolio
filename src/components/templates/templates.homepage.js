import FollowMe from "../organisms/organisms.banner.followMe";
import HomeHero from "../organisms/organisms.homehero";
// import Portfolio from "../organisms/organisms.portfolio";

const HomePage = ({basename}) => {
  return (
    <main className="homepage">
      <HomeHero />
      {/* <Portfolio /> */}
      <FollowMe />
    </main>
  );
};

export default HomePage;
