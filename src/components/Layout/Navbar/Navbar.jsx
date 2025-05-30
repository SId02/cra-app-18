import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	const [isActive, setisActive] = useState(false);
	return (
		<>
			<nav className="navbar  is-light has-shadow">
				<div className="container">
					<div className="navbar-brand">
						<NavLink className="navbar-item" to="/">
							React App
						</NavLink>
						<NavLink
							onClick={ () => {
								setisActive(!isActive);
							} }
							className={ `navbar-burger burger ${isActive ? "is-active" : ""}` }
							role="button"
							aria-label="menu"
							aria-expanded="false"
						>
							<span aria-hidden="true"></span>
							<span aria-hidden="true"></span>
							<span aria-hidden="true"></span>
						</NavLink>
					</div>
					<div className={ `navbar-menu ${isActive ? "is-active" : ""}` }>
						<div className="navbar-end">
							<NavLink className="navbar-item is-selected" to="/">
								Home
							</NavLink>
							<div className="navbar-item has-dropdown is-hoverable is-multiple">
								<NavLink className="navbar-link"> More </NavLink>
								<div className="navbar-dropdown ">
									<div className="columns">
											{/* 1 st column */}
										<div className="column">
										<NavLink
										className="navbar-item navbar-item-dropdown"
										to="/Counter"
									>
										Counter
									</NavLink>
									<NavLink
										className="navbar-item navbar-item-dropdown"
										to="/CoinEx"
									>
										Coin Ex
									</NavLink>
									<NavLink
										className="navbar-item navbar-item-dropdown"
										to="/CRUDStudentComponent"
									>
										CRUDStudentComponent
									</NavLink> 
									<NavLink
										className="navbar-item navbar-item-dropdown"
										to="/DatePicker"
									>
										Date Picker
									</NavLink>
									<NavLink
										className="navbar-item navbar-item-dropdown"
										to="/DatePickerWithMax"
									>
										Date Picker Max
									</NavLink>
										<NavLink className="navbar-item" to="/MultiLang">MultiLang</NavLink>
									<NavLink
										className="navbar-item navbar-item-dropdown"
										to="/Search"
									>
										Search
											</NavLink>
											<NavLink
										className="navbar-item navbar-item-dropdown"
										to="/Select"
									>
										Select
									</NavLink>
									<NavLink
										className="navbar-item navbar-item-dropdown"
										to="/DataFetchUsingUseReducer"
									>
										Data Fetch
											</NavLink>
											<NavLink className="navbar-item" to="/NumberAnalyzer">NumberAnalyzer</NavLink>
										</div>
										{/* 2 nd column */}
										<div className="column">
										<NavLink
										className="navbar-item navbar-item-dropdown"
										to="/FormValidation"
									>
										Form Validation
									</NavLink>
									<NavLink
										className="navbar-item navbar-item-dropdown"
										to="/RandomQuotes"
									>
										Random Quotes
									</NavLink>
									<NavLink
										className="navbar-item navbar-item-dropdown"
										to="/AgeValidation"
									>
										Age Validation
									</NavLink>
									<NavLink
										className="navbar-item navbar-item-dropdown"
										to="/LeapYearChecker"
									>
										Leap Year Checker
									</NavLink>
									{/* <NavLink
										className="navbar-item navbar-item-dropdown"
										to="/Page"
									>
										Pages
									</NavLink> */}
									<NavLink
										className="navbar-item navbar-item-dropdown"
										to="/CurrencyConverter"
									>
										Currency Converter
											</NavLink>
											<NavLink
										className="navbar-item navbar-item-dropdown"
										to="/Typeahead"
									>
										Typeahead
											</NavLink>
											<NavLink
										className="navbar-item navbar-item-dropdown"
										to="/PokemonDash"
									>
										PokemonDash
									</NavLink>

									<NavLink
										className="navbar-item navbar-item-dropdown"
												to="/GithubApi">GithubApi</NavLink>
											
											<NavLink className="navbar-item" to="/NumberConverter">NumberConverter</NavLink>
										</div>
									</div>
									<NavLink className="navbar-item navbar-item-dropdown" to="/LoginPageWithDefaultValue">LoginPageWithDefault</NavLink>
						<NavLink className="navbar-item navbar-item-dropdown" to="/RandomColorGenerator">Random Color Generator</NavLink>
						<NavLink className="navbar-item" to="/ProductListPaginations">ProductListPaginations</NavLink>
						<NavLink className="navbar-item" to="/ProductListSearchSortFilter">ProductListSearchSortFilter</NavLink>
								</div>
							</div>
							<NavLink className="navbar-item" to="/pagination">
								Pagination
							</NavLink>
							<NavLink className="navbar-item" to="/PasswordGenerator">
								Password Generators
							</NavLink>
							<NavLink className="navbar-item" to="/InfiniteScroll">Infinite Scroll</NavLink>
						</div>
					</div>
				</div>
			</nav>


		
			
			{/* <NavLink className="navbar-item" to="/NumberAnalyzer">NumberAnalyzer</NavLink>
			<NavLink className="navbar-item" to="/NumberConverter">NumberConverter</NavLink>
			<NavLink className="navbar-item" to="/ProductListPaginations">ProductListPaginations</NavLink>
			<NavLink className="navbar-item" to="/ProductListSearchSortFilter">ProductListSearchSortFilter</NavLink>
			<NavLink className="navbar-item" to="/numberanalyzer">NumberAnalyzer</NavLink>
			<NavLink className="navbar-item" to="/numberanalyzer">NumberAnalyzer</NavLink>
			<NavLink className="navbar-item" to="/numberanalyzer">NumberAnalyzer</NavLink>
			<NavLink className="navbar-item" to="/numberanalyzer">NumberAnalyzer</NavLink>
			<NavLink className="navbar-item" to="/numberanalyzer">NumberAnalyzer</NavLink>
			<NavLink className="navbar-item" to="/numberanalyzer">NumberAnalyzer</NavLink> */}
		</>
	);
};
export default Navbar;
