import { getPosts } from "../Services/Api-User";
import { useState, useEffect } from "react";
import Post from "../Layout/Paginates/Post";

const Paginations = () => {
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getPosts(page)
      .then((json) => {
        setPosts(json);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [page]);

  const nextPage = () => setPage((prev) => prev + 1);
  const prevPage = () => setPage((prev) => prev - 1);

  return (
    <div
      style={{
        backgroundColor: "#f8f9fa",
        minHeight: "100vh",
        paddingBottom: "3rem",
      }}
    >
      <div className="container py-6" style={{ maxWidth: "800px" }}>
        {/* Header */}
        <div className="has-text-centered mb-5">
          <h1
            className="title is-2 has-text-weight-bold"
            style={{ color: "#2c3e50" }}
          >
            Paginated Posts
          </h1>
          <p className="subtitle is-6 has-text-grey">
            Browse through records fetched dynamically from API
          </p>
        </div>

        {/* Pagination Controls Bar */}
        <div
          className="box p-4 mb-5 is-flex is-justify-content-space-between is-align-items-center"
          style={{
            borderRadius: "12px",
            border: "1px solid #e2e8f0",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.03)",
            background: "#ffffff",
          }}
        >
          <button
            className="button is-light is-rounded has-text-weight-semibold px-4"
            onClick={prevPage}
            disabled={page === 1 || loading}
          >
            &larr; Previous Page
          </button>

          <span className="tag is-info is-medium is-rounded has-text-weight-bold">
            Page {page}
          </span>

          <button
            className="button is-info is-rounded has-text-weight-semibold px-4"
            onClick={nextPage}
            disabled={!posts.length || loading}
            style={{ backgroundColor: "#3273dc", border: "none" }}
          >
            Next Page &rarr;
          </button>
        </div>

        {/* Loading Indicator */}
        {loading && (
          <div className="has-text-centered py-5">
            <p className="has-text-grey has-text-weight-medium">
              Loading posts...
            </p>
          </div>
        )}

        {/* Posts List */}
        {!loading && (
          <ul style={{ padding: 0, margin: 0 }}>
            {posts.map((post) => (
              <Post key={post.id} post={post} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Paginations;