const SearchBar = ({ posts, setSearchResults }) => {
	const handleSubmit = (e) => e.preventDefault();

	const handleSearchChange = (e) => {
		if (!e.target.value) return setSearchResults(posts);
		const resultsArray = posts.filter(
			(post) =>
				post.title.includes(e.target.value) ||
				post.body.includes(e.target.value)
		);
		setSearchResults(resultsArray);
	};
	return (
		<>
			<div className="columns is-desktop is-centered  mt-5">
                <div className="column is-half">
                <header>
					<form className="search" onSubmit={handleSubmit}>
						<div className="field is-grouped">
							<p className="control is-expanded">
								<input className="input" type="text" placeholder="Enter word to Search" id="search"	onChange={handleSearchChange}/>
							</p>
							<p className="control">
								<button className="button">
									<span className="icon">
										<i className="fa-solid fa-magnifying-glass"></i>
									</span>
								</button>
							</p>
						</div>
					</form>
				</header>
                </div>
			</div>
		</>
	);
};
export default SearchBar;
