import { Routes, Route } from "react-router-dom";
 import { Provider } from 'react-redux';
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
import CoinEx from "./components/Pages/CoinEx/CoinEx";
import Coins from "./components/Pages/CoinEx/Coins";
import Exchanges from "./components/Pages/CoinEx/Exchanges";
import Counter from "./components/Pages/Counter";
import CRUDRT from "./components/Layout/CRUDComponentRT/CRUDRT";
import DataFetchUsingUseReducer from "./components/Pages/DataFetchUsingUseReducer";
import PassowrdGenerators from "./components/Pages/PasswordGenerator";
import CurrencyConverter from "./components/Pages/CurrencyConverter";
import FormValidation from "./components/Pages/FormValidation";
import DatePickerWithMax from "./components/Pages/DatePickerWithMax";
import AgeValidation from "./components/Pages/AgeValidation";
import LeapYearChecker from "./components/Pages/LeapYearChecker";
import LoginPageWithDefaultValue from "./components/Pages/LoginPageWithDefaultValue";
import GithubUserProfileFinder from "./components/Pages/GithubUserProfileFinder";
import Typeahead from "./components/Pages/Typeahead";
import PokemonDash from "./components/Pages/PokemonDash";
import MultiLang from "./components/Pages/MultiLang";
import InfiniteScroll from "./components/Pages/InfiniteScroll";
import WordCounter from "./components/Pages/WordCounter";
import DigitalClock from "./components/Pages/DigitalClock";
import StopWatch from "./components/Pages/StopWatch";
import GradientColorGenerator from "./components/Layout/GradientColorGenerator/GradientColorGenerator";
import ProductListPaginations from "./components/Pages/ProductListPaginations";
import ProductListSearchSortFilter from "./components/Pages/ProductListSearchSortFilter";
import PasswordStrengthChecker from "./components/Pages/PasswordStrengthChecker";
import RandomUser from "./components/Pages/RandomUser";
import FormValidationUsinguseReducer from "./components/Pages/FormValidationUsinguseReducer";
import CRUDStudentComponent from "./components/Pages/CRUDStudentComponent";
import WeatherChecker from "./components/Pages/WeatherChecker";
import Store from "./components/Store/store"
import NumberConverter from "./components/Pages/NumberConverter";
import NumberAnalyzer from "./components/Pages/NumberAnalyzer";
import LazyLoading from "./components/Pages/LazyLoading";
function App() {
  return (
    <>
		  <Navbar />
		  <Provider store={Store}>
		  <Routes>
				<Route path="/" element={<Home />} />
				<Route path="/DatePicker" element={<DatePicker />} />
				<Route path="/Pagination" element={<Pagination />} />
				<Route path="/Search" element={<Search />} />
			  	<Route path="/Select" element={ <Select /> } />
				  <Route path="/CRUDRT" element={ <CRUDRT /> } />
				   <Route path="/LazyLoading" element={ <LazyLoading /> } />
				  
				<Route path="/RandomColorGenerator" element={<RandomColorGenerator />} />
				<Route path="/RandomQuotes" element={<RandomQuotes />} />		
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
			<Route path="/LoginPageWithDefaultValue"element={<LoginPageWithDefaultValue/>}/>
			  <Route path="/Typeahead" element={ <Typeahead /> } />
			  <Route path="/PokemonDash" element={ <PokemonDash /> } />
				<Route path="*" element={<NotFound />} />
				<Route path="/MultiLang" element={ <MultiLang /> } />
			  <Route path="/InfiniteScroll" element={ <InfiniteScroll /> } />
			  <Route path="/WordCounter" element={ <WordCounter /> } />
			  <Route path="/DigitalClock" element={ <DigitalClock /> } />
			  <Route path="/StopWatch" element={ <StopWatch /> } />
			  <Route path="/ProductListPaginations" element={ <ProductListPaginations /> } />
			  <Route path="/ProductListSearchSortFilter" element={ <ProductListSearchSortFilter /> } />
			  <Route path="/GradientColorGenerator" element={ <GradientColorGenerator /> } />
			  <Route path="/PasswordStrengthChecker" element={ <PasswordStrengthChecker /> } />
			  <Route path="/RandomUser" element={ <RandomUser /> } />
			  <Route path="/InfiniteScroll" element={<InfiniteScroll />} />
			  <Route path="/CRUDStudentComponent" element={ <CRUDStudentComponent /> } />
			  <Route path="/WeatherChecker" element={<WeatherChecker/>} />
				  <Route path="/FormValidationUsinguseReducer" element={ <FormValidationUsinguseReducer /> } />
				  <Route path="/NumberConverter" element={ <NumberConverter /> } />
				  <Route path="/NumberAnalyzer" element={<NumberAnalyzer />} />
			  </Routes>
			  </Provider> 
			<Footer />
    </>
  )
}

export default App
