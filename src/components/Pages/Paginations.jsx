import { getPosts } from '../Services/Api-User';
import { useState, useEffect } from 'react';
import Post from '../Layout/Paginates/Post';
const Paginations = () => {
    const [page, setPage] = useState(1)
    const [posts, setPosts] = useState([])

    useEffect(() => {

        getPosts(page).then(json => setPosts(json))

    }, [page])

    const content = posts.map(post => <Post key={post.id} post={post} />)

    const nextPage = () => setPage(prev => prev + 1)

    const prevPage = () => setPage(prev => prev - 1)

    return (
        <>
            <div className="container m-5">
            <div className="container mt-5 ">
                <nav className="pagination is-rounded" role="navigation" aria-label="pagination">
                    <button className="pagination-previous" onClick={prevPage} disabled={page === 1}>Previous Page</button>
                    <button className="pagination-next"  onClick={nextPage} disabled={!posts.length}>Next Page</button>
                </nav>
            </div>
            <div className="container">
                 {content}
            </div>
            </div>
        </>
    )
}
export default Paginations






