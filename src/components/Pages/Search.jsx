import { getSearch } from "../Services/Api-User";
import { useState, useEffect } from "react";
import SearchBar from "../Layout/Search/SearchBar";
import SearchList from "../Layout/Search/SearchList";

function App() {
	const [posts, setPosts] = useState([]);
	const [searchResults, setSearchResults] = useState([]);

	useEffect(() => {
		getSearch().then((json) => {
			setPosts(json);
			setSearchResults(json);
		});
	}, []);

	return (
		<>
			<SearchBar posts={posts} setSearchResults={setSearchResults} />
			<SearchList searchResults={searchResults} />
		</>
	);
}

export default App;
