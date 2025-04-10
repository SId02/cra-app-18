import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const USERS_TO_SHOW = 10;

const RandomUsers = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [initialLoad, setInitialLoad] = useState(true); // Track initial load

  useEffect(() => {
    const fetchInitialUsers = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`https://randomuser.me/api/?page=${1}&results=${USERS_TO_SHOW}`);
        if (!response.ok) {
          throw new Error('Failed to fetch initial users');
        }
        const data = await response.json();
        setUsers(data.results);
        setPage(2);
      } catch (err) {
        setError(err.message || 'An unknown error occurred');
      } finally {
        setLoading(false);
        setInitialLoad(false);
      }
    };

    if (initialLoad) {
      fetchInitialUsers();
    }
  }, [initialLoad]);

  const handleLoadMore = () => {
    setLoading(true);
    setError(null);
    fetch(`https://randomuser.me/api/?page=${page}&results=${USERS_TO_SHOW}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch more users');
        }
        return response.json();
      })
      .then((data) => {
        setUsers((prevUsers) => [...prevUsers, ...data.results]);
        setPage(page + 1);
      })
      .catch((err) => {
        setError(err.message || 'An unknown error occurred');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <div className="container is-fluid">
        <h1 className="title is-2 has-text-centered mb-4">Random Users</h1>
        {error && <div className="notification is-danger">{error}</div>}
        {loading && initialLoad && <div className="notification is-info">Loading initial users...</div>}
        {loading && !initialLoad && <div className="notification is-info">Loading more users...</div>}
        <div className="columns is-multiline">
          {users.map((user, index) => (
            <div key={index} className="column is-one-third">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-128x128">
                    <img
                      className="is-rounded"
                      src={user.picture.large}
                      alt={`${user.name.first} ${user.name.last}`}
                      style={{ objectFit: 'cover' }}
                    />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="title is-4">{user.name.first} {user.name.last}</p>
                      <p className="subtitle is-6">{user.email}</p>
                    </div>
                  </div>
                  <div className="content">
                    {user.location.country}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="has-text-centered mt-4">
          <button
            className={`button is-primary ${loading ? 'is-loading' : ''}`}
            onClick={handleLoadMore}
            disabled={loading}
          >
            Load More
          </button>
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

export default RandomUsers;