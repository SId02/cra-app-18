import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Layout/Navbar/Navbar";
import Footer from "./components/Layout/Footer/Footer";
import Home from "./components/Pages/Home";
import DatePicker from "./components/Pages/DatePicker";
import NotFound from "./components/Pages/NotFound";
import Pagination from "./components/Pages/Paginations";
import Search from "./components/Pages/Search";
import RandomColorGenerator from "./components/Pages/RandomColorGenerator";
import Select from "./components/Pages/Select";
import RandomQuotes from "./components/Pages/RandomQuotes";
import MemeGenerator from "./components/Pages/MemeGenerators";
import ShoppingCart from "./components/Pages/ShoppingCart";
import CoinEx from "./components/Pages/CoinEx/CoinEx";
import Coins from "./components/Pages/CoinEx/Coins";
import Exchanges from "./components/Pages/CoinEx/Exchanges";
import Counter from "./components/Pages/Counter";
import DataFetchUsingUseReducer from "./components/Pages/DataFetchUsingUseReducer";
import PassowrdGenerators from "./components/Pages/PasswordGenerator";
import CurrencyConverter from "./components/Pages/CurrencyConverter";
import FormValidation from "./components/Pages/FormValidation";
import HackerNews from "./components/Pages/HackerNews";
import DatePickerWithMax from "./components/Pages/DatePickerWithMax";
import AgeValidation from "./components/Pages/AgeValidation";
import PokemonApi from "./components/Pages/PokemonApi";
import ProductCardSlider from "./components/Pages/ProductCardSlider"; 
import LeapYearChecker from "./components/Pages/LeapYearChecker";
import GithubApi from "./components/Pages/GithubApi";
import LoginPageWithDefaultValue from "./components/Pages/LoginPageWithDefaultValue";
import LoginPageWithAPI from "./components/Pages/LoginPageWithAPI";
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
				<Route path="/RandomColorGenerator" element={<RandomColorGenerator />} />
				<Route path="/RandomQuotes" element={<RandomQuotes />} />
		
				<Route path="/ShoppingCart" element={<ShoppingCart />} />
				<Route path="/Counter" element={ <Counter /> } />
				<Route path="/PasswordGenerator" element={<PassowrdGenerators/> } />
				<Route path="/CoinEx" element={<CoinEx />}>
					<Route path="Coins" element={<Coins />} />
					<Route path="Exchanges" element={<Exchanges />} />
				</Route>
				<Route path="/DataFetchUsingUseReducer" element={ <DataFetchUsingUseReducer /> } />
				<Route path="/FormValidation" element={ <FormValidation /> } />
				<Route path="/CurrencyConverter" element={ <CurrencyConverter /> } />
				<Route path="/MemeGenerator" element={ <MemeGenerator /> } />
				<Route path="/PokemonApi" element={ <PokemonApi /> } />
				<Route path="/ProductCardSlider" element={ <ProductCardSlider /> } />
				<Route path="/AgeValidation" element={ <AgeValidation /> } />
				<Route path="/LeapYearChecker" element={ <LeapYearChecker/> } />
				<Route path="/HackerNews" element={ <HackerNews /> } />
				<Route path="/DatePickerWithMax" element={<DatePickerWithMax />} />
				<Route path="/GithubApi" element={ <GithubApi /> } />
				<Route path="/LoginPageWithDefaultValue" element={ <LoginPageWithDefaultValue /> } />
				<Route path="/LoginPageWithAPI" element={ <LoginPageWithAPI /> } />
				
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
