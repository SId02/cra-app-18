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
import Select from "./components/Pages/Select"
import	RandomQuotes	from"./components/Pages/RandomQuotes"
import Accordion from "./components/Pages/Accordion"
import FormValid from "./components/Pages/FormValid"
import	ShoppingCart	from	"./components/Pages/ShoppingCart"
import Coins from "./components/Pages/Coins";

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
				<Route path="/RandomQuotes" element={ <RandomQuotes /> } />
				<Route path="/Accordion" element={ <Accordion /> } />
				<Route path="/FormValid" element={ <FormValid /> } />
				<Route path="/ShoppingCart" element={ <ShoppingCart/> } />
				<Route path="/Coins" element={<Coins />} />
			
				<Route path="*" element={<NotFound/>} />
				
				{/* <Route path="/" element={ <Home /> } />
				<Route path="/" element={<Home />} /> */}
			</Routes>
			<Footer />
		</>
	);
}

export default App;
