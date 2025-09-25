import Portfolio from "../../organisms/portfolio/Portfolio";

const HomePage = () => {
  return (
    <>
      <h1>HomePage</h1>
      <section className="section-test" id="about">
        About
      </section>
      <section className="section-test" id="portfolio">
        portfolio
        <Portfolio />
      </section>
      <section className="section-test" id="follow">
        Follow
      </section>
    </>
  );
};

export default HomePage;