import { Routes, Route } from "react-router-dom";
import Navbar from "../src/components/Layout/Navbar/Navbar";
import Footer from "../src/components/Layout/Footer/Footer";
import Home from "../src/components/Pages/Home";
import DatePicker from "./components/Pages/DatePicker";
import NotFound from "../src/components/Pages/NotFound";
import Pagination from "./components/Pages/Paginations";
import Search from "./components/Pages/Search";
import CopyClipboard from "./components/Pages/CopytoClipboard";
import Select from "./components/Pages/Select";
import RandomQuotes from "./components/Pages/RandomQuotes";
import Accordion from "./components/Pages/Accordion";
import MemeGenerator from "./components/Pages/MemeGenerators";
import ShoppingCart from "./components/Pages/ShoppingCart";
import CoinEx from "./components/Pages/CoinEx/CoinEx";
import Coins from "./components/Pages/CoinEx/Coins";
import Exchanges from "./components/Pages/CoinEx/Exchanges";
import Counter from "./components/Pages/Counter";
import DataFetchUsingUseReducer from "./components/Pages/DataFetchUsingUseReducer";
import PassowrdGenerators from "./components/Pages/PasswordGenerator";
import Calculator from "./components/Pages/Calculator";
import FormValid from "./components/Pages/FormValidation";
function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/DatePicker" element={<DatePicker />} />
				<Route path="/Pagination" element={<Pagination />} />
				<Route path="/Search" element={<Search />} />
				<Route path="/Select" element={<Select />} />
				<Route path="/CopyClipboard" element={<CopyClipboard />} />
				<Route path="/RandomQuotes" element={<RandomQuotes />} />
				<Route path="/Accordion" element={<Accordion />} />
				{/* <Route path="/FormValid" element={<FormValid />} /> */}
				<Route path="/ShoppingCart" element={<ShoppingCart />} />
				<Route path="/Counter" element={ <Counter /> } />
				<Route path="/PasswordGenerator" element={<PassowrdGenerators/> } />
				<Route path="/CoinEx" element={<CoinEx />}>
					<Route path="Coins" element={<Coins />} />
					<Route path="Exchanges" element={<Exchanges />} />
				</Route>
				<Route path="/DataFetchUsingUseReducer" element={ <DataFetchUsingUseReducer /> } />
				<Route path="/Calculator" element={ <Calculator /> } />
				<Route path="/FormValidation" element={ <FormValid/> } />
				<Route path="/MemeGenerator" element={ <MemeGenerator/> } />

				<Route path="*" element={<NotFound />} />
			</Routes>
			<br />
			<Footer />
			{/* <Route path="/" element={ <Home /> } />
				<Route path="/" element={<Home />} /> */}
		</>
	);
}

export default App;
