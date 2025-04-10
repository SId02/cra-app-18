import React, { useState, useEffect, useRef, useCallback } from 'react';

const LazyLoading = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const loaderRef = useRef(null);
  const limit = 10; // Number of posts to fetch per page

  const fetchPosts = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setPosts((prevPosts) => [...prevPosts, ...data]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [page, limit]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting && !loading && !error) {
          setPage((prevPage) => prevPage + 1);
        }
      },
      {
        root: null, // Use the viewport as the root
        rootMargin: '20px', // Load a bit before it's fully in view
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [loading, error]);

  return (
    <div className="container is-fluid">
      <h1 className="title is-2">Posts</h1>
      {posts.map((post) => (
        <div className="card mb-4" key={post.id}>
          <div className="card-content">
            <p className="title is-4">{post.title}</p>
            <p className="subtitle is-6">{post.body}</p>
          </div>
        </div>
      ))}

      {loading && (
        <div className="has-text-centered">
          <div className="loader is-loading"></div>
        </div>
      )}

      {error && <p className="has-text-danger">{error}</p>}

      <div ref={loaderRef}>
        {/* This empty div will trigger the Intersection Observer */}
        {loading ? null : posts.length > 0 ? (
          <p className="has-text-centered has-text-grey-light">Loading more posts...</p>
        ) : error ? null : (
          <p className="has-text-centered has-text-grey-light">No more posts to load.</p>
        )}
      </div>
    </div>
  );
};

export default LazyLoading;