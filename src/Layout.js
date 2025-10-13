import { Route, Routes, Navigate } from "react-router-dom";
import PortfolioList from "./components/organisms/organisms.portfolioList";
import HomePage from "./components/templates/templates.homepage";
import Header from "./components/organisms/organisms.header";
import Footer from "./components/organisms/organisms.footer";
import PrivacyPage from "./components/templates/templates.privacyPage";
import Tree from "./components/templates/templates.tree";

function Layout({basename}) {
  return (
    <>
      <Header basename={basename} />
      <Routes>
        {/* "/" route means the homepage route */}
        <Route index element={<HomePage basename={basename} />}></Route>
        {/* "portfolio/*" route allows any project URL to be listed inside of "portfolio/" directory */}
        <Route path={`portfolio/*`} element={<PortfolioList/>}></Route>
        {/* the exact "portfolio/" directory won't be used. If reached, user gets redirected to homepage's portfolio area */}
        <Route
          exact
          path={`portfolio/`}
          element={<Navigate to={`/#portfolio`} replace />}
        />
        <Route path="privacy" element={<PrivacyPage />}></Route>
        <Route path="tree" element={<Tree />}></Route>
        {/* For any other URL reached in the site, if no corresponding content exists, it redirects the user to a 404 error message */}
        <Route path={`*`} element={<>404: not found</>}></Route>
      </Routes>
      <Footer basename={basename} />
    </>
  );
}

export default Layout;
