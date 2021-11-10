import React from 'react';

export default function Projects() {
  return (
    <section>
    <h3 id="projects" class="col-4">Projects</h3>
        <div class="center col-12">
            <div class="forecast col-10">
                <h4><a class="repoLink" href="https://github.com/LoganHild/forecast-with-a-chance-of-camping" rel="noreferrer" target="_blank">Forecast with a chance of Camping</a></h4>
                <a class="imgLink col-8" href="https://loganhild.github.io/forecast-with-a-chance-of-camping/" rel="noreferrer" target="_blank"><img class="deployed" src="./assets/images/forecast-with-a-chance-of-camping.png" alt="Forecast-with-a-chance-of-Camping deployed"></img></a>
            </div>
            <div class="row col-10">
                <div class="weather col-6">
                    <h4><a class="repoLink" href="https://github.com/LoganHild/weather-or-not" rel="noreferrer" target="_blank">Weather or Not</a></h4>
                    <a class="imgLink col-8" href="https://loganhild.github.io/weather-or-not/" rel="noreferrer" target="_blank"><img class="deployed" src="./assets/images/weather-or-not.png" alt="Weather-or-Not Deployed"></img></a>
                </div> 
                <div class="planner col-6">
                    <h4><a class="repoLink" href="https://github.com/delaluz12/Welcome-Neighbor" rel="noreferrer" target="_blank">Welcome Neighbor</a></h4>
                    <a class="imgLink col-8" href="https://hello-neighbor.herokuapp.com/" rel="noreferrer" target="_blank"><img class="deployed" src="./assets/images/welcomeNeighbor.png" alt="Easy-Planner deployed"></img></a>
                </div>
            </div>
        </div>
    </section>
  );
}
