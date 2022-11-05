import { Routes, Route, Link } from "react-router-dom";
import Navbar from "../src/components/Layout/Navbar/Navbar";
import Footer from "../src/components/Layout/Footer/Footer";
import Home from "../src/components/Pages/Home";
import Crud from "./components/Pages/Crud";
import DatePicker from "./components/Pages/DatePicker"
import NotFound	 from "../src/components/Pages/NotFound"
import Pagination from "./components/Pages/Paginations";
import Search from "./components/Pages/Search"
import CopyClipboard from "./components/Pages/CopytoClipboard"
import	Select	 from	"./components/Pages/Select"
function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route	path="/" element={<Home />} />
				<Route path="/Crud" element={ <Crud /> } />
				<Route path="/DatePicker" element={ <DatePicker /> } />
				<Route path="/Pagination" element={ <Pagination /> } />
				<Route path="/Search" element={ <Search /> } />
				<Route path="/Select" element={ <Select /> } />
			
				<Route path="/CopyClipboard" element={ <CopyClipboard /> } />
				<Route path="*" element={<NotFound/>} />
				
				{/* <Route path="/" element={ <Home /> } />
				<Route path="/" element={<Home />} /> */}
			</Routes>
			<Footer />
		</>
	);
}

export default App;
