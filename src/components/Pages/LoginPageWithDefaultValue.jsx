import React, { useState } from "react";

const LoginPageWithDefaultValue = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "password") {
      setIsLoggedIn(true);
    } else {
      setErrorMessage(" Invalid Credentials Please Check USernames and Password ");
      setTimeout(() => {
        setErrorMessage('');
      }, 2000);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      <div className="p-5">
        {isLoggedIn ? (
          <section className="hero is-link">
            <div className="hero-body">
              <p className="title has-text-centered">Welcome {username}</p>
              <button className="button" onClick={handleLogout}>Logout</button>
            </div>
          </section>
        ) : (
          <div className="container">
            <h1 className="has-text-centered m-5 is-size-1">Login</h1>
            <div className="columns is-desktop  mt-5 is-centered">
                <div className="column is-half">
                {errorMessage && (
                  <div className="notification is-danger mt-3 text-center">
                    <button className="delete" onClick={() => setErrorMessage("")}></button>
                    {errorMessage}
                  </div>
                )}
                <form onSubmit={handleSubmit} className="box pt-5 is-light">
                  <div className="field">
                    <label className="label">Username</label>
                    <div className="control">
                      <input className="input" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Password</label>
                    <div className="control">
                      <input className="input" type="password" placeholder="********" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                  </div>
                  <button className="button is-primary">Sign in</button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
      <br />
    </>
  );
};

export default LoginPageWithDefaultValue;
