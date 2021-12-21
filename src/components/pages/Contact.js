import React, { useState } from "react";
import { validateEmail } from "../../utils/validate";
import emailjs from 'emailjs-com'

function Contact() {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [message, setMessage] = useState("");

  const [userMessage, setUserMessage] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;

    if (id === "email") {
      setEmail(value);
    } else if (id === "name") {
      setName(value);
    } else {
      setMessage(value);
    }
    return;
  };

  const validateInput = (e) => {
    if (!e.target.value.length) {
      setUserMessage(`Your ${e.target.id} is required!`);
    } else {
      setUserMessage("");
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

  

  }

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lpvg2nh', 'template_ehb9z1s', 'form', 'user_OFvkXt7Nuj2hvvlG1ZDNQ').then(res=> {
      console.log(res);
    }).catch(err => console.log(err));

    if (!name) {
      setUserMessage("Your name is required!");
    } else if (!email) {
      setUserMessage("Your email is required!");
    } else if (!message) {
      setUserMessage("Your message is required!");
    } else {
      setUserMessage("");
    }

    const isValid = validateEmail(email);

    if (!isValid) {
      setUserMessage("Your email is invalid!");
    } else {
      setUserMessage(`Thank you, ${name}!`);
    }

    // Add post to Formspree

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="contact-wrapper">
      
      <h2 className="col-lg-4 col-md-6">Contact me <i className="fas fa-address-book"></i></h2>        
      {userMessage && (
          <div>
            <p className="error-text col-lg-4 col-md-6 col-sm-10 col-12">{userMessage}</p>
          </div>
        )}
      <form
        className="contact-form"
        action="https://formsubmit.co/hildebrandtlogan@gmail.com"
        method="POST"
      >
        <div>
          <label className="contact-headers col-lg-1 col-md-2 col-sm-3 col-3" htmlFor="name">Name <i className="fas fa-signature"></i></label>
          <input
            className="col-lg-3 col-md-4 col-sm-7 col-xs-12 col-8"
            type="text"
            autoComplete="false"
            name="name"
            placeholder="Enter name"
            value={name}
            onChange={handleChange}
            onBlur={validateInput}
            id="name"
          />
        </div>

        <div>
          <label className="contact-headers col-lg-1 col-md-2 col-sm-3 col-4" htmlFor="email">Email address <i className="fas fa-envelope-open-text"></i></label>
          <input
            className="col-lg-3 col-md-4 col-sm-7 col-7"
            type="email"
            autoComplete="false"
            name="email"
            placeholder="Enter email"
            value={email}
            onChange={handleChange}
            onBlur={validateInput}
            id="email"
          />
        </div>

        <div>
          <label className="contact-headers col-lg-1 col-md-2 col-sm-3 col-3" htmlFor="message">Message <i className="far fa-comment-dots"></i></label>
          <textarea
            className="col-lg-3 col-md-4 col-sm-7 col-8"
            name="message"
            rows="5"
            placeholder="Thanks for your feedback"
            value={message}
            onChange={handleChange}
            onBlur={validateInput}
            id="message"
          />
        </div>

        <button className="contact-headers col-lg-4 col-md-6 col-sm-10 col-12" onClick={handleSubmit} type="submit" data-testid="button">
          Submit <i className="fas fa-arrow-right"></i>
        </button> 
      </form>

    </section>
  );
}

export default Contact;

