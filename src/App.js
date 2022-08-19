import { Routes, Route, Link } from "react-router-dom";
import Navbar from "../src/components/Layout/Navbar/Navbar";
import Footer from "../src/components/Layout/Footer/Footer";
import Home from "../src/components/Pages/Home";
import Crud from "./components/Pages/Crud";
//import Pagination from "./components/Pages/Pagination";
function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route	path="/" element={<Home />} />
				<Route path="/Crud" element={<Crud />} />
				{/* <Route path="/Pagination" element={<Pagination />} /> */}
				{/* <Route path="/" element={ <Home /> } />
				<Route path="/" element={<Home />} /> */}
			</Routes>
			<Footer />
		</>
	);
}

export default App;
