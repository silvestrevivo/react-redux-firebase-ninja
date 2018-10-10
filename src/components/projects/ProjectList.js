import React from "react";
import ProjectSummary from "./ProjectSummary";
import { Link } from "react-router-dom";

const ProjectList = ({ projects }) => {
  return (
    <div className="project-list section">
      {projects &&
        projects.map(item => {
          return (
            <Link to={`/project/${item.id}`} key={item.id}>
              <ProjectSummary project={item} />
            </Link>
          );
        })}
    </div>
  );
};

export default ProjectList;
