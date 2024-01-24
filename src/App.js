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
import CurrencyConverter from "./components/Pages/CurrencyConverter";
import Calculator from "./components/Pages/Calculator";
import FormValidation from "./components/Pages/FormValidation";
import YearCalculator  from "./components/Pages/YearCalculator";
import TechNews from "./components/Pages/TechNews";
import DatePickerWithMax from "./components/Pages/DatePickerWithMax";
import AgeValidation from "./components/Pages/AgeValidation";
import PokemonApi from "./components/Pages/PokemonApi";
import ProductCardSlider from "./components/Pages/ProductCardSlider"; 
// import LeapYearChecker from "./components/Pages/LeapYearChecker";
function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={ <Home /> } />
				<Route path="/Accordion" element={<Accordion />} />
				<Route path="/CopyClipboard" element={<CopyClipboard />} />
				<Route path="/Calculator" element={ <Calculator /> } />
				<Route path="/CurrencyConverter" element={ <CurrencyConverter /> } />
				<Route path="/Counter" element={ <Counter /> } />
				<Route path="/CoinEx" element={<CoinEx />}>
					<Route path="Coins" element={<Coins />} />
					<Route path="Exchanges" element={<Exchanges />} />
				</Route>
				<Route path="/DatePicker" element={ <DatePicker /> } />
				<Route path="/DatePickerWithMax" element={<DatePickerWithMax />} />
				<Route path="/DataFetchUsingUseReducer" element={ <DataFetchUsingUseReducer /> } />
				<Route path="/FormValidation" element={ <FormValidation /> } />
				<Route path="/MemeGenerator" element={ <MemeGenerator /> } />
				<Route path="/PasswordGenerator" element={ <PassowrdGenerators /> } />
				<Route path="/ProductCardSlider" element={ <ProductCardSlider /> } />
				<Route path="/PokemonApi" element={ <PokemonApi /> } />
				<Route path="/Pagination" element={<Pagination />} />
				<Route path="/Search" element={<Search />} />
				<Route path="/Select" element={<Select />} />
				<Route path="/ShoppingCart" element={<ShoppingCart />} />
				<Route path="/RandomQuotes" element={<RandomQuotes />} />
				<Route path="/AgeValidation" element={ <AgeValidation /> } />
				<Route path="/TechNews" element={ <TechNews /> } />
				<Route path="/YearCalculator" element={ <YearCalculator /> } />
				<Route path="*" element={<NotFound />} />
				{/* <Route path="/LeapYearChecker" element={ <LeapYearChecker/> } /> */}
			</Routes>
			<Footer />
		</>
	);
}

export default App;
