
import { useState, useEffect } from "react";
import axios from "axios";

function GithubUserProfileFinder() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      if (username) {
        try {
          const response = await axios.get(`https://api.github.com/users/${username}`);
          const userData = response.data;
          setUser(userData);
          const repoResponse = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5`);
          const repoData = repoResponse.data;
          setRepos(repoData);
        } catch (error) {
          setError(error.message);
        }
      }
    };
    fetchUser();
  }, [username]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setUsername(document.querySelector("#username").value);
  };

  return (
    <section className="section">
      <div className="container">
        <section className="p-5">
          <div className="container p-5 has-text-centered">
            <h1 className="title">Github User Profile Finder</h1>
          </div>

          <div className="container p-6 is-centered">
            <div className="columns is-desktop has-text-centered">
              <div className="column box">
                <form className="p-5 m-5 has-background-light" onSubmit={handleSubmit}>
                  <div className="field">
                    <p className="control has-icons-left">
                      <input className="input" type="text" placeholder="Enter Username" id="username" />
                    </p>
                    <div className="p-5 control">
                      <button className="button is-primary" type="submit">
                        Submit
                        <i className="fas fa-send"></i>
                      </button>
                    </div>
                  </div>
                </form>

                {user && (
                  <div className="p-5 m-5 columns is-desktop is-half is-multiline is-centered is-vcentered has-background-grey-light">
                    <div className="column is-3">
                      <figure className="image is-128x128">
                        <img alt="imgone" src={user.avatar_url} />
                      </figure>
                      <h2 className="title is-2">{user.name}</h2>
                      <p>{user.bio}</p>
                      <a className="button is-primary" href={user.html_url} target="_blank">
                        Visit Github
                      </a>
                    </div>
                    <div className="column is-9">
                      <span className="tag is-primary is-light">
                        Public Repos: {user.public_repos}
                      </span>
                      <span className="tag is-primary is-light">
                        Public Gists: {user.public_gists}
                      </span>
                      <span className="tag is-primary is-light">
                        Followers: {user.followers}
                      </span>
                      <span className="tag is-primary is-light">
                        Following: {user.following}
                      </span>

                      <ul>
                        <li>Website: {user.name}</li>
                        <li>Company: {user.company}</li>
                        <li>Website: {user.blog}</li>
                        <li>Email: {user.email}</li>
                        <li>Created at: {user.created_at}</li>
                      </ul>
                    </div>
                  </div>
                )}
                {error && (
                  <p className="has-text-danger">{error}</p>
                )}
                {user && (
                  <div className="p-5 m-5 columns is-desktop is-half is-multiline is-centered is-vcentered has-background-grey-lighter">
                    <div className="column">
                      <h2 className="title is-3">List Of Top Public Repositories</h2>
                      <ul className="column is-8">
                        {repos.map((repo, index) => (
                          <li key={index} className="box">
                            <a href={repo.html_url} target="_blank">
                              {repo.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default GithubUserProfileFinder;
