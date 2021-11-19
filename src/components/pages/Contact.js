import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function Contact() {
  let [userName, setUserName] = useState("");
  let [email, setEmail] = useState("");
  let [text, setText] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;

    if (name === "email") {
      setEmail(value);
    } else if (name === "userName") {
      setUserName(value);
    } else {
      setText(value);
    }
    return;
  };


}

export default Contact;

