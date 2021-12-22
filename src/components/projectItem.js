import React from "react";

const Project = ({ project }) => {
    return (
        <>
            <div id="marginFix" className="col-lg-5 col-md-11 col-sm-11 col-xs-11 card">
                <img 
                className="card-img-top" 
                src={require(`../../public/assets/images/${project.image}`).default}
                alt={project.name}
                />
                <div className="card-body portfolio-cards">
                    <h5 className="card-title">{project.name}</h5>
                    <p className="card-text">
                    {project.description}
                    </p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item tech-gray"><span className="title">Role: </span>{project.role}</li>
                    <li className="list-group-item tech-light"><span className="title">Technologies: </span>{project.technologies}</li>
                </ul>
                <div className="card-body portfolio-cards">
                    <a 
                    href={project.github} 
                    className="card-link social-link"
                    rel="noreferrer"
                    target="_blank"
                    >
                        Github Repo <i class="fab fa-github fab"></i>
                    </a>
                    <a 
                    href={project.deployed}
                    className="card-link social-link"
                    rel="noreferrer"
                    target="_blank"
                    >
                        Deployed <i class="fas fa-window-restore fab"></i>
                    </a>
                </div>
            </div>
        </>
    );
};

export default Project;