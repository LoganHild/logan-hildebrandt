import React, { useState } from "react";
import { validateEmail } from "../../utils/validate";

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

  const handleSubmit = (e) => {
    e.preventDefault();

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
      <h2 className="col-6">Contact me <i class="fas fa-address-book"></i></h2>        
      {userMessage && (
          <div>
            <p className="error-text col-6"><i class="fas fa-exclamation-triangle"></i>{userMessage}</p>
          </div>
        )}
      <form
        className="contact-form"
        action="https://formspree.io/f/mnqleyjl"
        method="POST"
      >
        <div>
          <label className="contact-headers col-1" htmlFor="name">Name <i class="fas fa-signature"></i></label>
          <input
            className="col-5"
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
          <label className="contact-headers col-1" htmlFor="email">Email address <i class="fas fa-envelope-open-text"></i></label>
          <input
            className="col-5"
            type="email"
            autoComplete="false"
            name="_replyto"
            placeholder="Enter email"
            value={email}
            onChange={handleChange}
            onBlur={validateInput}
            id="email"
          />
        </div>

        <div>
          <label className="contact-headers col-1" htmlFor="message">Message <i class="far fa-comment-dots"></i></label>
          <textarea
            className="col-5"
            name="message"
            rows="5"
            placeholder="Thanks for your feedback"
            value={message}
            onChange={handleChange}
            onBlur={validateInput}
            id="message"
          />
        </div>

        <button className="contact-headers col-6" onClick={handleSubmit} type="submit" data-testid="button">
          Submit <i class="fas fa-arrow-right"></i>
        </button> 
      </form>
    </section>
  );
}

export default Contact;

