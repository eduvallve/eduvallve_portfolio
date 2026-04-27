import { Route, Routes, Navigate, useLocation, useParams, Outlet } from "react-router-dom";
import { useEffect, useState, createContext, useContext } from "react";
import { useTranslation } from "react-i18next";
import { scrollTo } from "./utils/utils.js";
import PortfolioList from "./components/organisms/organisms.portfolioList";
import HomePage from "./components/templates/templates.homepage";
import Header from "./components/organisms/organisms.header";
import Footer from "./components/organisms/organisms.footer";
import PrivacyPage from "./components/templates/templates.privacyPage";
import Tree from "./components/templates/templates.tree";
import BlogListPage from "./components/templates/templates.blogListPage";
import BlogPostPage from "./components/templates/templates.blogPostPage";
import AdminPage from "./components/templates/templates.adminPage";

// Context to share translation slugs between pages and the header
export const TranslationContext = createContext();

const LanguageWrapper = () => {
  const { lang } = useParams();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (lang && ['en', 'ca'].includes(lang)) {
      i18n.changeLanguage(lang);
      document.documentElement.lang = lang; // Accessibility: Sync html lang attribute
    }
  }, [lang, i18n]);

  return <Outlet />;
};

function Layout() {
  const location = useLocation();
  const [translations, setTranslations] = useState({}); // Example: { en: 'slug-en', ca: 'slug-ca' }

  useEffect(() => {
    if (location.hash) {
      scrollTo(location.hash.replace("#", ""));
    }
  }, [location, location.hash]); // Listen to any location change, specifically hashes

  const isAdmin = location.pathname.startsWith("/admin");

  return (
    <TranslationContext.Provider value={{ translations, setTranslations }}>
      {!isAdmin && <Header />}
      <Routes>
        <Route path="admin/*" element={<AdminPage />}></Route>

        <Route path=":lang" element={<LanguageWrapper />}>
          <Route index element={<HomePage />}></Route>
          <Route path="portfolio/*" element={<PortfolioList/>}></Route>
          <Route
            path="portfolio/"
            element={<Navigate to={`/#portfolio`} replace />}
          />
          <Route path="privacy" element={<PrivacyPage />}></Route>
          <Route path="tree" element={<Tree />}></Route>
          <Route path="blog" element={<BlogListPage />}></Route>
          <Route path="blog/:slug" element={<BlogPostPage />}></Route>
          <Route path="*" element={<>404: not found</>}></Route>
        </Route>

        <Route path="blog/*" element={<Navigate to={`/en${location.pathname}`} replace />} />
        <Route path="portfolio/*" element={<Navigate to={`/en${location.pathname}`} replace />} />
        <Route path="privacy" element={<Navigate to={`/en/privacy`} replace />} />
        <Route path="tree" element={<Navigate to={`/en/tree`} replace />} />
        <Route index element={<Navigate to={`/en`} replace />} />
        <Route path="*" element={<Navigate to={`/en`} replace />}></Route>
      </Routes>
      {!isAdmin && <Footer />}
    </TranslationContext.Provider>
  );
}

export default Layout;
