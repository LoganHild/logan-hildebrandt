import React from 'react';
export default function Resume() {
  return (
    <div>
      <br/>
      <h2 className="col-4">Resume<i class="far fa-file"></i></h2>

      <div class="card col-4">
        <div class="card-body bg-dark">      
          {/*cover letter and pdf download*/}
          <p className="about-me bg-light ">
            Full-stack web developer leveraging a background in customer service and care for disabled 
            adults. Working with disabled adults provided skills in working with others and goal-oriented tasks while developing skills with 
            decision making and problem solving as an independent staff member. About 6 years in total spent in this position taught skills in how to stay focused, 
            organized,  calm under stress, and to adapt to change. These skills were demonstrated when a client we were serving became physically aggressive towards 
            staff and other clients. My immediate action was to divide roles between 3 staff for documentation/relocation of other clients, contacting supervisors for 
            the support needed, and myself working on de-escalating the physically aggressive client. This quick thinking allowed for a quick and safe solution to be 
            achieved for all parties while being commended by the supervisor and nursing when they arrived. These skills will allow me to find solutions to nearly any
            problem faced in a new position. Recently earned a certificate in full-stack development from the University of Minnesota Coding Bootcamp, learning quickly 
            to gain proficiency in HTML, CSS, and JavaScript. My goal with these newly acquired skills is to create a user-friendly, accessible, and interactive web 
            experience for every user, while aligning with specific goals and exceeding expectations.
          </p>
          <div className="download">
            <a id="download-link" href="./assets/Resume.pdf" download="./assets/newResume.pdf">Resume Download <i class="fas fa-download"></i></a>
          </div>
        </div>
      </div>
      {/*cover letter and pdf download end*/}

      {/*technical skills */}
      <h4 className="resume-headers col-4">Technical Skills<i class="fas fa-cogs"></i></h4>
      <ul className="skills col-4">
        <li className="list-group-item list-group-item-dark">HTML</li>
        <li className="list-group-item">CSS</li>
        <li className="list-group-item list-group-item-dark">JavaScript</li>
        <li className="list-group-item">Node JS</li>
        <li className="list-group-item list-group-item-dark">JQuery</li>
        <li className="list-group-item">Moment.js</li>
        <li className="list-group-item list-group-item-dark">Node.js</li>
        <li className="list-group-item">Bootstrap</li>
        <li className="list-group-item list-group-item-dark">Handlebars.js</li>
        <li className="list-group-item">API Experience</li>
        <li className="list-group-item list-group-item-dark">NPM Packages</li>
        <li className="list-group-item">Test Driven Development(TDD)</li>
        <li className="list-group-item list-group-item-dark">Regular Expressions(REGEX)</li>
        <li className="list-group-item">Express</li>
        <li className="list-group-item list-group-item-dark">MySQL</li>
        <li className="list-group-item">Sequelize</li>
        <li className="list-group-item list-group-item-dark">MySQLWorkbench</li>
        <li className="list-group-item">MongoDBMongoose</li>
        <li className="list-group-item list-group-item-dark">Mongoose</li>
        <li className="list-group-item">Robo 3T</li>
        <li className="list-group-item list-group-item-dark">MongoDB Atlas</li>
        <li className="list-group-item">React</li>
        <li className="list-group-item list-group-item-dark">RESTful API's</li>
        <li className="list-group-item">Heroku</li>
        <li className="list-group-item list-group-item-dark">GitHub</li>
        <li className="list-group-item">Figma</li>
        <li className="list-group-item list-group-item-dark">GraphQl</li>
      </ul>
      {/*technical skills end */}

      {/*soft skills */}
      <h4 className="resume-headers col-4">Soft Skills<i class="fas fa-user-friends"></i></h4>
      <ul className="skills col-4">
        <li className="list-group-item">Organized</li>
        <li className="list-group-item list-group-item-dark">Attention to Detail</li>
        <li className="list-group-item">Problem Solving</li>
        <li className="list-group-item list-group-item-dark">Calm Under Stress</li>
        <li className="list-group-item">Adaptability</li>
        <li className="list-group-item list-group-item-dark">StoryTeller</li>
        <li className="list-group-item">Collaborative</li>
        <li className="list-group-item list-group-item-dark">Passionate</li>
        <li className="list-group-item">Eager to Learn</li>
      </ul>
      {/*soft skills end*/}

      {/*education*/}
      <h4 className="resume-headers col-4">Education<i class="fas fa-university"></i></h4>
      <ul className="skills col-4">
        <li className="list-group-item list-group-item-dark">Certificate, Full Stack Web Development—University of Minnesota	Minneapolis, MN</li>
        <li className="list-group-item">High School Diploma—Cannon Falls High School	Cannon Falls, MN</li>
      </ul>
      {/*education end*/}
    </div>
  );
}
