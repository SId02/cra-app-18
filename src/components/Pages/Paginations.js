import { getPosts } from '../Services/Api-User'
import { useState, useEffect } from 'react'
import Post from './Post'

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
            <nav className="pagination is-centered" role="navigation" aria-label="pagination">
                <button className="pagination-previous"  onClick={prevPage} disabled={page === 1}>Previou Page</button>
                <button className="pagination-next"  onClick={nextPage} disabled={!posts.length}>Next Page</button>
                    <ul className="pagination-list">
                        <li><a className="pagination-link" aria-label="Goto page 1">1</a></li>
                        <li><a className="pagination-link" aria-label="Goto page 45">2</a></li>
                        <li><a className="pagination-link is-current" aria-label="Page 46" aria-current="page">3</a></li>
                    </ul>
            </nav>
            {content}
        </>
    )
}
export default Paginations






