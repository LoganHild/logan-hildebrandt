import React from 'react';
import './About.css'

export default function About() {
  return (
    <div className='aboutContainer'>
      <img src="./assets/images/portfolio.jpg" alt="Myself"/>
      <article>
        <h2>About Me</h2>
        <p>Full-stack web developer leveraging a background in customer service and care for disabled adults. 
          Working with disabled adults provided skills in working with others and goal-oriented tasks while developing skills with decision making and problem solving as an independent staff member. 
          The independence taught skills in how to stay focused, organized,  calm under stress, and to adapt to change.
          Recently earned a certificate in full-stack development from the University of Minnesota Coding Bootcamp, learning quickly to gain proficiency in HTML, CSS, and JavaScript. As well as gaining
          proficiency with MySQL, MongoDB, Express, React, and Node. My goal with these newly acquired skills is to create a user-friendly, accessible, and interactive web experience for every user, while aligning with specific goals and exceeding expectations.
        </p>
        <p> I am from Cannon Falls, Minnesota, a town of 4,000 or so people, currently residing in Red Wing, Minnesota.
          I've worked as a DSP for about 6 years taking care of vulnerable adults.
          My favorite hobby is just being at home and relaxing. I love Dogs, and I try to visit my family dog whenever I have a chance. His name is Teddy.
          Lately I have really enjoyed working with CSS and getting to see my changes in real time.
          I enjoy playing Video Games in my free time but lately I have been focused on trying new recipes, exercising more, 
          and just trying to live a healthier lifestyle in general.
        </p>
      </article>      
      <figure>
        <img class="teddy photo" src="./assets/images/Teddy.jpg" alt="My family dog, Teddy."/>
        <img id="family" src="./assets/images/family.jpg" alt="Myself and Family at brother's football game."/>
        <img src="./assets/images/Teddy2.jpg" alt="My family dog, Teddy" class="teddy photo"/>
      </figure>
    </div>

  );
}