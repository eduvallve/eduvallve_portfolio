import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { client } from "../../sanity/client";
import FollowMe from "../organisms/organisms.banner.followMe";
import HomeHero from "../organisms/organisms.homehero";
import Portfolio from "../organisms/organisms.portfolio";

const HomePage = () => {
  const { lang } = useParams();
  const [siteData, setSiteData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch translations for the homepage from siteSettings
    client
      .fetch(
        `*[_type == "siteSettings" && language == $lang][0]`,
        { lang: lang || 'en' }
      )
      .then((data) => {
        setSiteData(data);
        setLoading(false);
      })
      .catch(console.error);
  }, [lang]);

  if (loading) return null; // Or a loader

  return (
    <main className="homepage">
      <HomeHero data={siteData} />
      <Portfolio lang={lang} data={siteData} />
      <FollowMe data={siteData} />
    </main>
  );
};

export default HomePage;
