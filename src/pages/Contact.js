import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const _handleEmailChange = (value) => {
    setEmail(value);
  };

  const _handleNameChange = (value) => {
    setName(value);
  };

  const _handleFormSubmit = (e) => {
    e.preventDefault();

    if (email.length > 0) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }

    if (name.length > 0) {
      setNameError(false);
    } else {
      setNameError(true);
    }

    if (email.length > 0 && name.length > 0) {
      setShowInfo(true);
    } else {
      setShowInfo(false);
    }
  };

  return (
    <>
      <form>
        <label>Email</label>
        <input
          style={emailError ? { borderColor: "red" } : { borderColor: "gray" }}
          type="email"
          onChange={(e) => _handleEmailChange(e.target.value)}
          readOnly={showInfo ? true : false}
        />
        <label>Nume</label>
        <input
          style={nameError ? { borderColor: "red" } : { borderColor: "gray" }}
          type="text"
          onChange={(e) => _handleNameChange(e.target.value)}
          readOnly={showInfo ? true : false}
        />

        <input
          type="submit"
          onClick={(e) => _handleFormSubmit(e)}
          value="Save data"
          readOnly={showInfo ? true : false}
        ></input>
      </form>

      <div>{showInfo ? email + " " + name : ""}</div>
    </>
  );
};

export default Contact;
