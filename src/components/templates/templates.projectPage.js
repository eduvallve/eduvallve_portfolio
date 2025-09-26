import { useParams } from "react-router-dom";

/**
 * This ProjectPage shows everything that is inside of a project single page
 */

const ProjectPage = () => {
  const { project_id } = useParams();
  return <h2>Project's ID is: {project_id}</h2>;
};

export default ProjectPage;