import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function GithubUserProfileFinder() {
  const [inputValue, setInputValue] = useState("");
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGithubData = async () => {
      if (!username) return;

      setLoading(true);
      setError(null);
      setUser(null);
      setRepos([]);

      try {
        const userRes = await fetch(`https://api.github.com/users/${username}`);
        if (!userRes.ok) {
          throw new Error("User not found or API rate limit exceeded.");
        }
        const userData = await userRes.json();
        setUser(userData);

        const repoRes = await fetch(
          `https://api.github.com/users/${username}/repos?per_page=5&sort=updated`,
        );
        if (repoRes.ok) {
          const repoData = await repoRes.json();
          setRepos(repoData);
        }
      } catch (err) {
        setError(err.message || "An unknown error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchGithubData();
  }, [username]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim()) {
      setUsername(inputValue.trim());
    }
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
        <div className="container" style={{ maxWidth: "850px" }}>
          {/* Header */}
          <div className="has-text-centered mb-6">
            <h1
              className="title is-2 has-text-weight-bold mb-5"
              style={{ color: "#2c3e50" }}
            >
              GitHub User Profile Finder
            </h1>
            <p className="subtitle is-6 has-text-grey">
              Search any GitHub handle to view profile statistics and
              repositories
            </p>
          </div>

          {/* Search Box Card */}
          <div
            className="box p-5 mb-5"
            style={{
              borderRadius: "16px",
              border: "1px solid #e2e8f0",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.03)",
              background: "#ffffff",
            }}
          >
            <form onSubmit={handleSubmit}>
              <div className="field has-addons">
                <div className="control is-expanded">
                  <input
                    className="input is-medium is-rounded"
                    type="text"
                    placeholder="Enter GitHub Username (e.g., torvalds)..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                </div>
                <div className="control">
                  <button
                    className={`button is-primary is-medium is-rounded has-text-weight-semibold px-5 ${loading ? "is-loading" : ""}`}
                    type="submit"
                    disabled={loading}
                    style={{ backgroundColor: "#3273dc", border: "none" }}
                  >
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Error Message */}
          {error && (
            <div
              className="notification is-danger is-light has-text-centered mb-5"
              style={{ borderRadius: "8px" }}
            >
              {error}
            </div>
          )}

          {/* Loading State */}
          {loading && (
            <div className="has-text-centered py-6">
              <p className="has-text-grey has-text-weight-medium">
                Fetching GitHub profile...
              </p>
            </div>
          )}

          {/* User Profile Card */}
          {user && !loading && (
            <div
              className="box p-6 mb-5"
              style={{
                borderRadius: "16px",
                border: "1px solid #e2e8f0",
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.05)",
                background: "#ffffff",
              }}
            >
              <div className="columns is-vcentered">
                <div className="column is-4 has-text-centered">
                  <figure className="image is-128x128 is-inline-block mb-3">
                    <img
                      className="is-rounded"
                      src={user.avatar_url}
                      alt={user.name || user.login}
                      style={{
                        objectFit: "cover",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                      }}
                    />
                  </figure>
                  <h2 className="title is-5 has-text-dark mb-1">
                    {user.name || user.login}
                  </h2>
                  <p className="is-size-7 has-text-grey mb-3">@{user.login}</p>
                  <a
                    className="button is-small is-info is-light is-rounded has-text-weight-semibold"
                    href={user.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View GitHub Profile
                  </a>
                </div>

                <div className="column is-8">
                  {user.bio && (
                    <p
                      className="is-size-6 has-text-grey-dark mb-4"
                      style={{ fontStyle: "italic" }}
                    >
                      "{user.bio}"
                    </p>
                  )}

                  <div className="tags are-medium mb-4">
                    <span className="tag is-info is-light">
                      Public Repos: {user.public_repos}
                    </span>
                    <span className="tag is-info is-light">
                      Followers: {user.followers}
                    </span>
                    <span className="tag is-info is-light">
                      Following: {user.following}
                    </span>
                    <span className="tag is-info is-light">
                      Gists: {user.public_gists}
                    </span>
                  </div>

                  <ul
                    className="is-size-7 has-text-grey"
                    style={{ lineHeight: "1.8" }}
                  >
                    {user.company && (
                      <li>
                        <strong>Company:</strong> {user.company}
                      </li>
                    )}
                    {user.blog && (
                      <li>
                        <strong>Website:</strong>{" "}
                        <a
                          href={
                            user.blog.startsWith("http")
                              ? user.blog
                              : `https://${user.blog}`
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {user.blog}
                        </a>
                      </li>
                    )}
                    {user.location && (
                      <li>
                        <strong>Location:</strong> {user.location}
                      </li>
                    )}
                    <li>
                      <strong>Joined:</strong>{" "}
                      {new Date(user.created_at).toLocaleDateString()}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Top Repositories Section */}
          {user && repos.length > 0 && !loading && (
            <div
              className="box p-5"
              style={{
                borderRadius: "16px",
                border: "1px solid #e2e8f0",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.03)",
                background: "#ffffff",
              }}
            >
              <h3 className="title is-5 has-text-dark mb-4">
                Top Public Repositories
              </h3>
              <div className="columns is-multiline">
                {repos.map((repo) => (
                  <div className="column is-6-tablet" key={repo.id}>
                    <div
                      className="p-3 h-100"
                      style={{
                        borderRadius: "10px",
                        border: "1px solid #f1f5f9",
                        background: "#f8fafc",
                        transition: "border-color 0.2s ease",
                      }}
                    >
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="has-text-weight-semibold has-text-info"
                      >
                        {repo.name}
                      </a>
                      <p
                        className="is-size-7 has-text-grey mt-1"
                        style={{
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {repo.description || "No description provided."}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
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
}

export default GithubUserProfileFinder;