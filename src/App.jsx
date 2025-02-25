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
import ShoppingCart from "./components/Pages/ShoppingCart";
import CoinEx from "./components/Pages/CoinEx/CoinEx";
import Coins from "./components/Pages/CoinEx/Coins";
import Exchanges from "./components/Pages/CoinEx/Exchanges";
import Counter from "./components/Pages/Counter";
import DataFetchUsingUseReducer from "./components/Pages/DataFetchUsingUseReducer";
import PassowrdGenerators from "./components/Pages/PasswordGenerator";
import CurrencyConverter from "./components/Pages/CurrencyConverter";
import FormValidation from "./components/Pages/FormValidation";
import DatePickerWithMax from "./components/Pages/DatePickerWithMax";
import AgeValidation from "./components/Pages/AgeValidation";
import LeapYearChecker from "./components/Pages/LeapYearChecker";
import LoginPageWithDefaultValue from "./components/Pages/LoginPageWithDefaultValue";
import LoginPageWithAPI from "./components/Pages/LoginPageWithAPI";
import GithubUserProfileFinder from "./components/Pages/GithubUserProfileFinder";
import Typeahead from "./components/Pages/Typeahead";
import PokemonDash from "./components/Pages/PokemonDash";
import MultiLang from "./components/Pages/MultiLang";

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
				<Route path="/AgeValidation" element={ <AgeValidation /> } />
				<Route path="/LeapYearChecker" element={ <LeapYearChecker/> } />
				<Route path="/DatePickerWithMax" element={<DatePickerWithMax />} />
				<Route path="/GithubApi" element={ <GithubUserProfileFinder /> } />
				<Route path="/LoginPageWithDefaultValue" element={ <LoginPageWithDefaultValue /> } />
				<Route path="/LoginPageWithAPI" element={ <LoginPageWithAPI /> } />
			  <Route path="/Typeahead" element={ <Typeahead /> } />
			  <Route path="/PokemonDash" element={ <PokemonDash /> } />
				<Route path="*" element={<NotFound />} />
				<Route path="/MultiLang" element={ <MultiLang /> } />
			</Routes>
			<Footer />
    </>
  )
}

export default App
