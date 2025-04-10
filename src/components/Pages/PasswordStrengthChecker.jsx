import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const PasswordStrengthChecker = () => {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState("has-text-danger");
  const [messageBgColor, setMessageBgColor] = useState("has-background-danger-light");
  const [strengthBarWidth, setStrengthBarWidth] = useState("0%");
  const [strengthBarColor, setStrengthBarColor] = useState("is-danger");
  const [showMessage, setShowMessage] = useState(false);

  const inputHandler = (event) => {
    const enteredValue = event.target.value.trim();
    setPassword(enteredValue);
    setShowMessage(true);
  };

  useEffect(() => {
    let newWidth = "0%";
    let barColor = "is-danger";
    let textColor = "has-text-danger";
    let bgColor = "has-background-danger-light";
    let newMessage = "Very Weak";

    if (password.length === 0) {
      newMessage = "Very Weak";
      newWidth = "0%";
      setShowMessage(false);
    } else if (password.length <= 4) {
      newMessage = "Very Weak";
      newWidth = `${(password.length / 16) * 100}%`;
    } else if (password.length <= 6) {
      newMessage = "Weak";
      newWidth = `${(password.length / 16) * 100}%`;
      barColor = "is-warning";
      textColor = "has-text-warning";
      bgColor = "has-background-warning-light";
    } else if (password.length <= 8) {
      newMessage = "Medium";
      newWidth = `${(password.length / 16) * 100}%`;
      barColor = "is-primary";
      textColor = "has-text-primary";
      bgColor = "has-background-primary-light";
    } else if (password.length <= 12) {
      newMessage = "Strong";
      newWidth = `${(password.length / 16) * 100}%`;
      barColor = "is-info";
      textColor = "has-text-info";
      bgColor = "has-background-info-light";
    } else {
      newMessage = "Very Strong";
      newWidth = "100%";
      barColor = "is-success";
      textColor = "has-text-success";
      bgColor = "has-background-success-light";
    }

    setStrengthBarWidth(newWidth);
    setStrengthBarColor(barColor);
    setMessageColor(textColor);
    setMessageBgColor(bgColor);
    setMessage(newMessage);
  }, [password]);

  return (
    <>
      <div className="container is-fluid">
        <div className="columns is-centered">
          <div className="column is-half">
            <h3 className="title is-2 has-text-centered">
              Password Strength Checker
            </h3>
            <div className="field">
              <div className="control">
                <input
                  className="input"
                  type="password"
                  value={password}
                  onChange={inputHandler}
                  placeholder="Enter your password"
                />
              </div>
            </div>
            <progress
              className={`progress ${strengthBarColor}`}
              value={parseInt(strengthBarWidth, 10)}
              max="100"
              style={{ width: '100%' }}
            ></progress>
            {showMessage && (
              <div className={`notification ${messageBgColor} ${messageColor} is-light mt-2 has-text-centered`}>
                {message}
              </div>
            )}
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="content has-text-centered">
          <Link to="/" className="has-text-link">
            Back to Home
          </Link>
        </div>
      </footer>
    </>
  );
};

export default PasswordStrengthChecker;