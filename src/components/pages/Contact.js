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
   
  );
}

export default Contact;

