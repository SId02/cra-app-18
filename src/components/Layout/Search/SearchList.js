import Post from "./Post"

const SearchList = ({ searchResults }) => {
    const results = searchResults.map(post => <Post key={post.id} post={post} />)
    const content = results?.length ? results : <div className="container"><p className="px-3 has-text-centered is-size-3">No Matching Posts</p></div>
    return (
        <main>{content}</main>
    )
}
export default SearchList;

