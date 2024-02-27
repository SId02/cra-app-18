import React, { useState } from 'react';
import axios from 'axios';

const LoginPageWithAPI = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://dummyjson.com/auth/login', {
        username,
        password,
      });

      setIsLoggedIn(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
    <div>
      { isLoggedIn ? (
              <section className="hero is-link">
                  <div className="hero-body">
                        <p className="title has-text-centered">Welcome {username}</p>
                        <button className="button" onClick={handleLogout}>Logout</button>
                  </div>
              </section>
        ) : (
          <div className="container">
          <h1 className=" has-text-centered m-5">Login using API</h1>
          <div className="columns is-desktop  mt-5 is-centered">
            <div className="column is-half">
            <form onSubmit={ handleSubmit } className="box">
                <div className="field">
                   <label className="label">Username</label>
                      <div className="control">
                        <input className="input" type="text" value={username}	onChange={(e) => setUsername(e.target.value)}/>
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
      </>
  );
};

export default LoginPageWithAPI;
