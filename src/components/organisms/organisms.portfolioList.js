import { Routes, Route } from "react-router-dom";
import ProjectPage from "../templates/templates.projectPage";

/**
 * PortfolioList prepares the navigation to create every single project URL. No styles needed here.
 */
const PortfolioList = () => {
  return (
    <Routes>
      <Route path={`:project_id`} element={<ProjectPage />}></Route>
    </Routes>
  );
};

export default PortfolioList;