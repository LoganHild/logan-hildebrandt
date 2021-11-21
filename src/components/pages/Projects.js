import React from 'react';

export default function Projects() {
  return (
      //returns my project section with the cards associated with each project
    <section id="project-container">
        <br/>
      <h2 className="col-4">Portfolio <i class="fas fa-project-diagram"></i></h2>
        <div>
            {/*Welcome Neighbor card */}
            <div className="columns col-12">
                <div className="col-5 card">
                    <img 
                    className="card-img-top" 
                    src="./assets/images/welcomeNeighbor.png" 
                    alt="Deployed Welcome-Neighbor App"
                    />
                    <div className="card-body portfolio-cards">
                        <h5 className="card-title">Welcome-Neighbor!</h5>
                        <p className="card-text">
                        Welcome Neighbor is a web application that allows Users to connect to people 
                        in their Neighborhood on a more intimate level in close proximity.
                        </p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item tech-dark">MySQL/Sequelize</li>
                        <li className="list-group-item tech-gray">Handlebars</li>
                        <li className="list-group-item tech-light">
                        <a 
                            href='https://sendgrid.com/'
                            className="card-link tech-link"
                            rel="noreferrer"
                            target="_blank"
                            >
                                SendGrid API
                        </a>
                        </li>
                        
                    </ul>
                    <div className="card-body portfolio-cards">
                        <a 
                        href="https://github.com/delaluz12/Welcome-Neighbor" 
                        className="card-link social-link"
                        rel="noreferrer"
                        target="_blank"
                        >
                            Github Repo
                        </a>
                        <a 
                        href="https://hello-neighbor.herokuapp.com/" 
                        className="card-link social-link"
                        rel="noreferrer"
                        target="_blank"
                        >
                            Deployed App
                        </a>
                    </div>
                </div>
                {/*Welcome Neighbor end*/}

                {/*Forecast app card*/}
                <div className="card column col-5">
                    <img 
                    className="card-img-top" 
                    src="./assets/images/forecast-with-a-chance-of-camping.png" 
                    alt="Deployed Forecast With a Chance of Camping App"
                    />
                    <div className="card-body portfolio-cards">
                        <h5 className="card-title">Forecast With a Chance of Camping</h5>
                        <p className="card-text">
                            Simple to use application using an api to find recreational facilities by zip code and determining the weather for the week of the visit.
                        </p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item tech-dark">JavaScript</li>
                        <li className="list-group-item tech-gray">
                        <a 
                            href='https://openweathermap.org/api'
                            className="card-link tech-link"
                            rel="noreferrer"
                            target="_blank"
                            >
                                Open Weather API
                        </a>
                        </li>
                        <li className="list-group-item tech-light">
                        <a 
                            href='https://ridb.recreation.gov/docs#/Attributes/getCampsiteAttributes'
                            className="card-link tech-link"
                            rel="noreferrer"
                            target="_blank"
                            >
                                Recreation Information Database(RIDB) API
                        </a>
                        </li>
                    </ul>
                    <div className="card-body portfolio-cards">
                        <a 
                        href="https://github.com/LoganHild/forecast-with-a-chance-of-camping" 
                        className="card-link social-link"
                        rel="noreferrer"
                        target="_blank"
                        >
                            Github Repo
                        </a>
                        <a 
                        href="https://loganhild.github.io/forecast-with-a-chance-of-camping/" 
                        className="card-link social-link"
                        rel="noreferrer"
                        target="_blank"
                        >
                            Deployed App
                        </a>
                    </div>
                </div>
            </div>
                {/*Forecast App end */}
                
            
                {/*Weather App card*/}
            <div className="columns col-12">
                <div className="card col-5">
                    <img 
                    className="card-img-top" 
                    src="./assets/images/weather-or-not.png" 
                    alt="Deployed Weather or Not App"
                    />
                    <div className="card-body portfolio-cards">
                        <h5 className="card-title">Weather-or-Not</h5>
                        <p className="card-text">
                        An easy to use weather application for the user to see forecasts for searched cities and plan trips or events accordingly.
                        </p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item tech-dark">JavaScript</li>
                        <li className="list-group-item tech-gray">jQuery</li>
                        <li className="list-group-item tech-light">
                            <a 
                            href='https://openweathermap.org/api'
                            className="card-link tech-link"
                            rel="noreferrer"
                            target="_blank"
                            >
                                Open Weather API
                            </a>
                        </li>
                    </ul>
                    <div className="card-body portfolio-cards">
                        <a 
                        href="https://github.com/LoganHild/weather-or-not" 
                        className="card-link social-link"
                        rel="noreferrer"
                        target="_blank"
                        >
                            Github Repo
                        </a>
                        <a 
                        href="https://loganhild.github.io/weather-or-not/" 
                        className="card-link social-link"
                        rel="noreferrer"
                        target="_blank"
                        >
                            Deployed App
                        </a>
                    </div>
            </div>
            {/*Weather card end */}

            {/*Scribe app*/}
            
                <div className="card col-5">
                    <img 
                    className="card-img-top" 
                    src="./assets/images/Scribe.png" 
                    alt="Deployed Scribe App"
                    />
                    <div className="card-body portfolio-cards">
                        <h5 className="card-title">Scribe</h5>
                        <p className="card-text">
                        This application is a simple note taker application for writing and saving notes via express..
                        </p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item tech-dark">JavaScript</li>
                        <li className="list-group-item tech-gray">Express</li>
                        <li className="list-group-item tech-light">Bootstrap</li>
                    </ul>
                    <div className="card-body portfolio-cards">
                        <a 
                        href="https://github.com/LoganHild/scribe" 
                        className="card-link social-link"
                        rel="noreferrer"
                        target="_blank"
                        >
                            Github Repo
                        </a>
                        <a 
                        href="https://scribe-note-taker.herokuapp.com/" 
                        className="card-link social-link"
                        rel="noreferrer"
                        target="_blank"
                        >
                            Deployed App
                        </a>
                    </div>
                </div>
            </div>
            {/*Scribe app end */}
                
            
            {/*Team generator card*/}
            <div className="columns col-12">
                <div className="card col-5">
                    <img 
                    className="card-img-top" 
                    src="./assets/images/team-profile-generator.png" 
                    alt="Finished Page from Team Profile Generator App"/>
                    <div className="card-body portfolio-cards">
                        <h5 className="card-title">Team Profile Generator</h5>
                        <p className="card-text">
                        A Node.js command-line application that takes in information about employees on a software engineering team, 
                        then generates an HTML webpage that displays summaries for each person.
                        </p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item tech-dark">Node.js</li>
                        <li className="list-group-item tech-gray">Express</li>
                        <li className="list-group-item tech-light">Inquirer</li>
                    </ul>
                    <div className="card-body portfolio-cards">
                        <a 
                        href="https://github.com/LoganHild/Team-Profile-Generator" 
                        className="card-link social-link"
                        rel="noreferrer"
                        target="_blank"
                        >
                            Github Repo
                        </a>
                    </div>
                </div>
                {/*Team generator card end */}

                {/*Expense pal App card*/}
                <div className="card col-5">
                    <img 
                    className="card-img-top" 
                    src="./assets/images/expense-pal.png" 
                    alt="Deployed Expense-Pal application"
                    />
                    <div className="card-body portfolio-cards">
                        <h5 className="card-title">Expense-Pal</h5>
                        <p className="card-text">
                        PWA budget tracker application to manage expenses whether online or offline.
                        </p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item tech-dark">MongoDB/Mongoose</li>
                        <li className="list-group-item tech-gray">jQuery</li>
                        <li className="list-group-item tech-light">IndexedDB</li>
                    </ul>
                    <div className="card-body portfolio-cards">
                        <a 
                        href="https://github.com/LoganHild/expense-pal" 
                        className="card-link social-link"
                        rel="noreferrer"
                        target="_blank"
                        >
                            Github Repo
                        </a>
                        <a 
                        href="https://expense-pal.herokuapp.com/" 
                        className="card-link social-link"
                        rel="noreferrer"
                        target="_blank"
                        >
                            Deployed App
                        </a>
                    </div>
                </div>
            </div>
            {/* expense pal end */}
            
        </div>
    </section>
  );
}
