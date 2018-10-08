import React from "react";

const ProjectDetails = props => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            assumenda dolores a quo quos ratione rem quibusdam similique dolore
            mollitia ab delectus consequuntur quod non aperiam, doloremque, quis
            quia provident?
          </p>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted By Silvestre</div>
            <div>2nd Okt 2018, 2am</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
