import React from 'react';

export default function About() {
  return (
    <div className='aboutContainer'>
      <br/>
      <h2 className="col-4">About Me <i class="far fa-address-card"></i></h2>      


      <br/>
      <article className="aboutMe col-4">      
        <figure className="self-portrait-container">
          <img className='selfPortrait' src="./assets/images/portfolio.jpg" alt="Myself"/>
        </figure>         
        <p className="about"> Hello! My name is Logan and I am from Cannon Falls, Minnesota, a town of 4,000 or so people, currently residing in Red Wing, Minnesota.
          I've worked as a DSP for about 6 years taking care of vulnerable adults.
          My favorite hobby is just being at home and relaxing. I love Dogs, and I try to visit my family dog whenever I have a chance, his name is Teddy.
          Lately I have really enjoyed working with React and getting to create powerful single page applications out of nothing.
          I enjoy playing Video Games in my free time but lately I have been focused on trying new recipes, exercising more, 
          and just trying to live a healthier lifestyle in general.
        </p>      
      </article>  
      {/*image slider */}
      <div className="slider">
        <div className="slides">
          {/*radio button start*/}
          <input type="radio" name="radio-btn" id="radio1"></input>
          <input type="radio" name="radio-btn" id="radio2"></input>
          <input type="radio" name="radio-btn" id="radio3"></input>
          {/*radio button end */}

          {/*slide images */}
          <div className="slide first">
            <img className="sliderImage" src="./assets/images/Teddy.jpg" alt="My family dog, Teddy."/>
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
          <label for="radio1" className="manual-btn"></label>
          <label for="radio2" className="manual-btn"></label>
          <label for="radio3" className="manual-btn"></label>
        </div>
        {/*manual navigation end */}
      </div>
    </div>
  );
}