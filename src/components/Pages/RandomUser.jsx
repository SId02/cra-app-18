import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const USERS_TO_SHOW = 10;

const RandomUsers = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    const fetchInitialUsers = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://randomuser.me/api/?page=1&results=${USERS_TO_SHOW}`,
        );
        if (!response.ok) {
          throw new Error("Failed to fetch initial users");
        }
        const data = await response.json();
        setUsers(data.results);
        setPage(2);
      } catch (err) {
        setError(err.message || "An unknown error occurred");
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
          throw new Error("Failed to fetch more users");
        }
        return response.json();
      })
      .then((data) => {
        setUsers((prevUsers) => [...prevUsers, ...data.results]);
        setPage((prevPage) => prevPage + 1);
      })
      .catch((err) => {
        setError(err.message || "An unknown error occurred");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div
      style={{
        backgroundColor: "#f8f9fa",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <section className="section py-6">
        <div className="container">
          {/* Header */}
          <div className="has-text-centered mb-6">
            <h1
              className="title is-2 has-text-weight-bold mb-2"
              style={{ color: "#2c3e50" }}
            >
              Random Users Directory
            </h1>
            <p className="subtitle is-6 has-text-grey">
              Explore profile records fetched dynamically via API
            </p>
          </div>

          {/* Notifications */}
          {error && (
            <div
              className="notification is-danger is-light has-text-centered mb-5"
              style={{ borderRadius: "8px" }}
            >
              {error}
            </div>
          )}

          {initialLoad && loading && (
            <div className="has-text-centered py-6">
              <p className="has-text-grey has-text-weight-medium">
                Loading initial users...
              </p>
            </div>
          )}

          {/* Users Grid */}
          <div className="columns is-multiline">
            {users.map((user, index) => (
              <div
                className="column is-one-third-tablet is-one-quarter-desktop"
                key={index}
              >
                <div
                  className="box p-5 h-100 is-flex is-flex-direction-column is-align-items-center has-text-centered"
                  style={{
                    borderRadius: "16px",
                    border: "1px solid #e2e8f0",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.03)",
                    transition: "all 0.2s ease-in-out",
                    background: "#ffffff",
                    height: "100%",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow =
                      "0 12px 24px rgba(0, 0, 0, 0.08)";
                    e.currentTarget.style.borderColor = "#3273dc";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 12px rgba(0, 0, 0, 0.03)";
                    e.currentTarget.style.borderColor = "#e2e8f0";
                  }}
                >
                  <figure className="image is-96x96 mb-4">
                    <img
                      className="is-rounded"
                      src={user.picture.large}
                      alt={`${user.name.first} ${user.name.last}`}
                      style={{
                        objectFit: "cover",
                        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                      }}
                    />
                  </figure>

                  <div className="mb-3">
                    <p className="title is-5 has-text-dark mb-1">
                      {user.name.first} {user.name.last}
                    </p>
                    <p
                      className="is-size-7 has-text-grey text-overflow-ellipsis"
                      style={{ wordBreak: "break-all" }}
                    >
                      {user.email}
                    </p>
                  </div>

                  <div
                    className="mt-auto pt-3"
                    style={{ borderTop: "1px solid #f1f1f1", width: "100%" }}
                  >
                    <span className="tag is-light is-rounded has-text-weight-medium">
                      {user.location.country}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {!initialLoad && (
            <div className="has-text-centered mt-6">
              <button
                className={`button is-primary is-medium is-rounded has-text-weight-semibold px-6 ${loading ? "is-loading" : ""}`}
                onClick={handleLoadMore}
                disabled={loading}
                style={{ backgroundColor: "#3273dc", border: "none" }}
              >
                Load More Users
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer
        className="footer"
        style={{ backgroundColor: "#f1f3f5", borderTop: "1px solid #e2e8f0" }}
      >
        <div className="content has-text-centered">
          <Link
            to="/"
            className="has-text-weight-semibold"
            style={{ color: "#3273dc" }}
          >
            &larr; Back to Home
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default RandomUsers;