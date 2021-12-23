import React from 'react';
export default function Resume() {
  return (
    <div>
      <br/>        
      <h2 className="col-lg-4 col-md-6">Resume<i className="far fa-file"></i></h2>

      <div>      

        <div className="card col-lg-6 col-md-6 col-sm-10 col-12">
          <div className="card-body bg-dark">      
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
              <a id="download-link" href="./assets/Resume.pdf" download="./assets/Resume.pdf">Resume Download <i className="fas fa-download"></i></a>
            </div>
          </div>
        </div>              
        {/*cover letter and pdf download end*/}
      </div>
      <div className="row">        
        {/*technical skills */}
        <div className="col-lg-4 col-md-6 center">
          <h4 className="resume-headers">Technical Skills<i className="fas fa-cogs"></i></h4>
          <ul className="skills">
            <li className="list-group-item list-group-item-dark">HTML</li>
            <li className="list-group-item">CSS</li>
            <li className="list-group-item list-group-item-dark">JavaScript</li>
            <li className="list-group-item">Node JS</li>
            <li className="list-group-item list-group-item-dark">JQuery</li>
            <li className="list-group-item">Bootstrap</li>
            <li className="list-group-item list-group-item-dark">Handlebars.js</li>
            <li className="list-group-item">API Experience</li>
            <li className="list-group-item list-group-item-dark">Test Driven Development(TDD)</li>
            <li className="list-group-item">Regular Expressions(REGEX)</li>
            <li className="list-group-item list-group-item-dark">Express</li>
            <li className="list-group-item">MySQL/Sequelize</li>
            <li className="list-group-item list-group-item-dark">MongoDB/Mongoose</li>
            <li className="list-group-item">MongoDB Atlas</li>
            <li className="list-group-item list-group-item-dark">React</li>
            <li className="list-group-item">RESTful API's</li>
            <li className="list-group-item list-group-item-dark">Heroku</li>
            <li className="list-group-item">GitHub</li>
            <li className="list-group-item list-group-item-dark">Figma</li>
            <li className="list-group-item">GraphQl</li>
          </ul>
          {/*technical skills end */}
        </div>
        <div className="col-lg-4 col-md-6 center">
          {/*soft skills */}
          <h4 className="resume-headers">Soft Skills<i className="fas fa-user-friends"></i></h4>
          <ul className="skills">
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
          <div>
            {/*education*/}
            <h4 className="resume-headers">Education<i className="fas fa-university"></i></h4>
            <ul className="skills">
              <li className="list-group-item list-group-item-dark">Certificate, Full Stack Web Development—University of Minnesota	Minneapolis, MN</li>
              <li className="list-group-item">High School Diploma—Cannon Falls High School	Cannon Falls, MN</li>
            </ul>
            {/*education end*/}
          </div>
        </div>

      </div>  
    </div>
  );
}
