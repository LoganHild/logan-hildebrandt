import React from 'react';

export default function About() {
  return (
    <div className='aboutContainer'>
      <br/>
      <h2 className="col-lg-4 col-md-6">About Me <i className="far fa-address-card"></i></h2>      


      <br/>
      <article className="aboutMe row col-lg-4 col-md-6">  
          <figure className="self-portrait-container">
            <img className='selfPortrait' src="./assets/images/portfolio.jpg" alt="Myself"/>
          </figure>         
          <p className="about"><span className="tab">Hello!</span> My name is Logan and I am from Cannon Falls, Minnesota, a town of 4,000 or so people, currently residing in Red Wing, Minnesota.
            I've worked as a DSP for about 6 years taking care of vulnerable adults.
            My favorite hobby is just being at home and relaxing. I love Dogs, and I try to visit my family dog whenever I have a chance, his name is Teddy.
            Lately I have really enjoyed working with React and getting to create powerful single page applications out of nothing.
            I enjoy playing Video Games in my free time but lately I have been focused on trying new recipes, exercising more, 
            and just trying to live a healthier lifestyle in general.
          </p>
          <p className="about"><span className="tab">I</span> recently took on the commitment of completing the Full-Stack Web Development Boot-Camp course offered by the University of Minnesota.
            Juggling a full-time job, keeping up on homework, and giving my best to each project. It was during this course I developed a new-found 
            passion for Web Development, enjoying the challenges and celebrating victories. Nobody enjoys seeing a big red error on the screen
            but there is truly nothing better than the feeling when a solution is finally found. I am so excited to be a part of an ever-evolving field
            that never stops moving forward and providing new challenges to hash out. 
          </p>
      
  
      </article>  
      {/*image slider */}
      <div className="slider col-xl-3 col-lg-5 col-md-6 col-sm-8 col-12">
        <div className="slides">
          {/*radio button start*/}
          <input type="radio" name="radio-btn" id="radio1"></input>
          <input type="radio" name="radio-btn" id="radio2"></input>
          <input type="radio" name="radio-btn" id="radio3"></input>
          {/*radio button end */}

          {/*slide images */}
          <div className="slide first">
            <img className="sliderImage" src="./assets/images/teddy.jpg" alt="My family dog, Teddy."/>
          </div>
          <div className="slide">
            <img className="sliderImage" src="./assets/images/family.jpg" alt="My family dog, Teddy."/>
          </div>
          <div className="slide">
            <img className="sliderImage" src="./assets/images/bluff.jpg" alt="My family dog, Teddy."/>
          </div>
          {/*slide image end */}

          {/*automatic navigation */}
          <div className="navigation-auto">
            <div className="auto-btn1"></div>
            <div className="auto-btn2"></div>
            <div className="auto-btn3"></div>
          </div>
          {/*auto navigation end */}
        </div>   
        {/*manual navigation start */}
        <div className="navigation-manual">
          <label htmlFor="radio1" className="manual-btn"></label>
          <label htmlFor="radio2" className="manual-btn"></label>
          <label htmlFor="radio3" className="manual-btn"></label>
        </div>
        {/*manual navigation end */}
      </div>
    </div>
  );
}