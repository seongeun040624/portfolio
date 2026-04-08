import React from "react";
import { Link } from "react-router-dom";
import "../style/projects.scss";

const Projects = () => {
  return (
    <div className="projects">
      <div className="inner">
        <h2>All Projects</h2>
        <p>진행한 프로젝트를 한 번에 볼 수 있는 페이지입니다.</p>

        <div className="project-list">
          <Link to="/projects/1">Project 1</Link>
          <Link to="/projects/2">Project 2</Link>
          <Link to="/projects/3">Project 3</Link>
          <Link to="/projects/4">Project 4</Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;