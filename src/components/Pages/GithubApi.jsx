import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GithubApi = () => {
	
	const [user, setUser] = useState(null);
 	const [repos, setRepos] = useState([]);
  	const username = 'bradtraversy';
  
	useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`https://api.github.com/users/${username}`);
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user: ', error);
      }
    };

    const fetchRepos = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/users/${username}/repos`
        );

        setRepos(response.data);
      } catch (error) {
        console.error('Error fetching repos: ', error);
      }
    };
    fetchUser();
    fetchRepos();
  }, [username]);
  return (
    <>
      <div className="section">
        <div className="container">
          <h1 className="title has-text-centered">
            {user ? user.name : 'Loading...'}
          </h1>

          <div className="columns is-multiline">
            {repos.map((repo) => (
              <div key={repo.id} className="column is-one-third">
                <div className="box">
                  <h2 className="subtitle has-text-centered">{repo.name}</h2>
				  <h3 className="subtitle has-text-centered">Name : {user.name}</h3>
                  <h4 className="subtitle has-text-centered">Followers : {user.followers}</h4>
                  <h5 className="subtitle has-text-centered">Following : {user.following}</h5>
                  <h5 className="subtitle has-text-centered">Public Repos : {user.public_repos}</h5>
                  <h5 className="subtitle has-text-centered">Star : {user.starred}</h5>

                  <p className="has-text-centered">  {repo.description || 'No description'}</p>

                  <a className="button is-primary is-fullwidth"  href={repo.html_url} target="_blank" rel="noopener noreferrer">
                    View Repo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default GithubApi