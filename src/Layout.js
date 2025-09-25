import { Route, Routes, NavLink, Navigate } from "react-router-dom";
import PortfolioList from "./components/organisms/portfolioList/PortfolioList";
import HomePage from "./components/templates/homePage/Homepage";
import Header from "./components/organisms/header/Header";
import Footer from "./components/organisms/footer/Footer";



function Layout() {
  return (
    <>
      <Header />
      <main clasname="evp-main">
        <Routes>
          {/* "/" route means the homepage route */}
          <Route index element={<HomePage />}></Route>
          {/* "portfolio/*" route allows any project URL to be listed inside of "portfolio/" directory */}
          <Route path="portfolio/*" element={<PortfolioList />}></Route>
          {/* the exact "portfolio/" directory won't be used. If reached, user gets redirected to homepage's portfolio area */}
          <Route
            exact
            path="portfolio/"
            element={<Navigate to="/#portfolio" replace />}
          />
          {/* For any other URL reached in the site, if no corresponding content exists, it redirects the user to a 404 error message */}
          <Route path="*" element={<>404: not found</>}></Route>
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default Layout;
