
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bulma/css/bulma.css';

const InfiniteScroll = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [isGridLayout, setIsGridLayout] = useState(true);

    const fetchPosts = async () => {
        if (loading) return;
        setLoading(true);

        try {
            const response = await axios.get(`https://dummyjson.com/posts?limit=10&skip=${(page - 1) * 10}`);
            setPosts(prevPosts => [...prevPosts, ...response.data.posts]);
            setHasMore(response.data.posts.length > 0);
        } catch (error) {
            console.error("Error fetching posts:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, [page]);

    const handleScroll = () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight && hasMore) {
            setPage(prevPage => prevPage + 1);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [hasMore]);

    const toggleLayout = () => {
        setIsGridLayout(prevState => !prevState);
    };

    return (
        <div className="container">
            <h1 className="title">Infinite Scroll Posts</h1>
            <button className="button" onClick={toggleLayout}>
                {isGridLayout ? 'Switch to List Layout' : 'Switch to Grid Layout'}
            </button>
            {isGridLayout ? (
                <div className="columns is-multiline">
                    {posts.map(post => (
                        <div className="column is-one-third" key={post.id}>
                            <div className="card">
                                <div className="card-content">
                                    <p className="title">{post.title}</p>
                                    <p className="content">{post.body}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <ul>
                    {posts.map(post => (
                        <li key={post.id}>
                            <div className="card">
                                <div className="card-content">
                                    <p className="title">{post.title}</p>
                                    <p className="content">{post.body}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
            {loading && <p>Loading...</p>}
        </div>
    );
};

export default InfiniteScroll;

