import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const USERS_PER_PAGE = 10;

const InfiniteScroll = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isGridLayout, setIsGridLayout] = useState(true);

  const fetchPosts = async (currentPage) => {
    if (loading) return;
    setLoading(true);

    try {
      const skip = (currentPage - 1) * USERS_PER_PAGE;
      const response = await fetch(
        `https://dummyjson.com/posts?limit=${USERS_PER_PAGE}&skip=${skip}`,
      );

      if (!response.ok) {
        throw new Error("Failed to fetch posts");
      }

      const data = await response.json();

      setPosts((prevPosts) => {
        // Prevent duplicate posts if race conditions occur
        const existingIds = new Set(prevPosts.map((p) => p.id));
        const newPosts = data.posts.filter((p) => !existingIds.has(p.id));
        return [...prevPosts, ...newPosts];
      });

      if (
        data.posts.length < USERS_PER_PAGE ||
        posts.length + data.posts.length >= data.total
      ) {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts(page);
  }, [page]);

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 100 &&
      hasMore &&
      !loading
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasMore, loading]);

  const toggleLayout = () => {
    setIsGridLayout((prevState) => !prevState);
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
        <div className="container" style={{ maxWidth: "1000px" }}>
          {/* Header & Controls Header */}
          <div
            className="is-flex is-justify-content-space-between is-align-items-center mb-6 flex-wrap"
            style={{ gap: "1rem" }}
          >
            <div>
              <h1
                className="title is-2 has-text-weight-bold mb-5"
                style={{ color: "#2c3e50" }}
              >
                Infinite Scroll Feed
              </h1>
              <p className="subtitle  is-6 has-text-grey">
                Scroll down continuously to load more records
              </p>
            </div>
            <button
              className="button is-light is-rounded has-text-weight-semibold px-4"
              onClick={toggleLayout}
              style={{ border: "1px solid #cbd5e1" }}
            >
              {isGridLayout ? "Switch to List Layout" : "Switch to Grid Layout"}
            </button>
          </div>

          {/* Content Layouts */}
          {isGridLayout ? (
            <div className="columns is-multiline">
              {posts.map((post) => (
                <div className="column is-one-third-tablet" key={post.id}>
                  <div
                    className="box p-5 h-100 is-flex is-flex-direction-column justify-content-between"
                    style={{
                      borderRadius: "16px",
                      border: "1px solid #e2e8f0",
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.03)",
                      transition: "all 0.2s ease-in-out",
                      background: "#ffffff",
                      height: "100%",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-3px)";
                      e.currentTarget.style.boxShadow =
                        "0 10px 20px rgba(0, 0, 0, 0.06)";
                      e.currentTarget.style.borderColor = "#3273dc";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow =
                        "0 4px 12px rgba(0, 0, 0, 0.03)";
                      e.currentTarget.style.borderColor = "#e2e8f0";
                    }}
                  >
                    <div>
                      <span className="tag is-info is-light is-rounded has-text-weight-semibold mb-3">
                        #{post.id}
                      </span>
                      <p className="title is-5 has-text-dark mb-2">
                        {post.title}
                      </p>
                      <p
                        className="is-size-7 has-text-grey"
                        style={{ lineHeight: "1.6" }}
                      >
                        {post.body}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <ul style={{ padding: 0, margin: 0 }}>
              {posts.map((post) => (
                <li
                  key={post.id}
                  style={{ listStyle: "none" }}
                  className="mb-3"
                >
                  <div
                    className="box p-5"
                    style={{
                      borderRadius: "16px",
                      border: "1px solid #e2e8f0",
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.03)",
                      background: "#ffffff",
                      transition: "border-color 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "#3273dc";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "#e2e8f0";
                    }}
                  >
                    <div className="is-flex is-align-items-center mb-2">
                      <span className="tag is-info is-light is-rounded has-text-weight-semibold mr-2">
                        #{post.id}
                      </span>
                      <p className="title is-5 has-text-dark mb-0">
                        {post.title}
                      </p>
                    </div>
                    <p
                      className="is-size-7 has-text-grey pl-1"
                      style={{ lineHeight: "1.6" }}
                    >
                      {post.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}

          {/* Loading State Indicator */}
          {loading && (
            <div className="has-text-centered py-5">
              <p className="has-text-grey has-text-weight-medium">
                Loading more posts...
              </p>
            </div>
          )}

          {!hasMore && (
            <div className="has-text-centered py-5">
              <p className="has-text-grey-light is-size-6">
                You've reached the end of the list!
              </p>
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

export default InfiniteScroll;