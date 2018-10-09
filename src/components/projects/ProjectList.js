import React from "react";
import ProjectSummary from "./ProjectSummary";

const ProjectList = ({ projects }) => {
  return (
    <div className="project-list section">
      {projects &&
        projects.map(item => <ProjectSummary project={item} key={item.id} />)}
    </div>
  );
};

export default ProjectList;
