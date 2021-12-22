import React from 'react';
import Project from '../projectItem'
import projectList from "../../projectList.json";

export default function Projects() {
  return (
      //returns my project section with the cards associated with each project
    <section id="project-container">
        <br/>
      <h2 className="col-lg-4 col-md-6">Portfolio <i className="fas fa-project-diagram"></i></h2>
      <div id="row" className="row">
        {projectList.map((project) => (
            <Project project={project} key={`${project.name}`} />
        ))}   
      </div>
    
    </section>
  );
}
