import React, { useState} from 'react'
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [isActive, setisActive] = useState(false)
    return (
        <>
        <nav className="navbar  has-background-info-light has-shadow">
            <div className="container">
            <div className="navbar-brand">
                <NavLink className="navbar-item" to="/">CRA-18</NavLink>
                <NavLink  onClick={() => {
                setisActive(!isActive)
            }} className={`navbar-burger burger ${isActive ? 'is-active' : ''}`} role="button" aria-label="menu" aria-expanded="false"  to="/">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </NavLink>
            </div>
                <div className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
                    <div className="navbar-end">
                        <NavLink className="navbar-item" to="/">Home</NavLink>
                        <NavLink className="navbar-item" to="/pagination">Pagination</NavLink>
                        <NavLink className="navbar-item" to="/PasswordGenerator">Password Generators</NavLink>
                        <div className="navbar-item has-dropdown is-hoverable is-multiple">
                                            <NavLink className="navbar-link"> More </NavLink>
                                            <div className="navbar-dropdown is-multiple">
                                                <NavLink className="navbar-item navbar-item-dropdown" to="/Counter">Counter</NavLink>
                                    {/* <NavLink className="navbar-item navbar-item-dropdown" to="/"></NavLink> */}
                                    <NavLink className="navbar-item navbar-item-dropdown" to="/CopytoClipboard">Copy to Clipboard</NavLink>
                                                <NavLink className="navbar-item navbar-item-dropdown" to="/ShoppingCart">Shop</NavLink>
                                                <NavLink className="navbar-item navbar-item-dropdown" to="/CoinEx">Coin Ex</NavLink>
                                    <NavLink className="navbar-item navbar-item-dropdown" to="/DatePicker">Date Picker</NavLink>
                                    <NavLink className="navbar-item navbar-item-dropdown" to="/DatePickerWithMax">Date Picker Max</NavLink>
                                                <NavLink className="navbar-item navbar-item-dropdown" to="/FormValidation">Form Validation</NavLink>
                                                <NavLink className="navbar-item navbar-item-dropdown" to="/Search">Search</NavLink>
                                                <NavLink className="navbar-item navbar-item-dropdown" to="/Select">Select</NavLink>
                                                <NavLink className="navbar-item navbar-item-dropdown" to="/Accordion">Accordion</NavLink>
                                                <NavLink className="navbar-item navbar-item-dropdown" to="/MemeGenerator">Meme Generator</NavLink>
                                                <NavLink className="navbar-item navbar-item-dropdown" to="/RandomQuotes">Random Quotes</NavLink>
                                    <NavLink className="navbar-item navbar-item-dropdown" to="/YearCalculator">Year Calculator</NavLink>
                                    <NavLink className="navbar-item navbar-item-dropdown" to="/PokemonApi">PokemonApi</NavLink>
                                    <NavLink className="navbar-item navbar-item-dropdown" to="/CRUD">CRUD</NavLink>
                                    <NavLink className="navbar-item navbar-item-dropdown" to="/ProductCardSlider">Product Card Slider</NavLink>
                                    <NavLink className="navbar-item navbar-item-dropdown" to="/AgeValidation"> Age Validation</NavLink>
                                    <NavLink className="navbar-item navbar-item-dropdown" to="/LeapYearChecker">Leap Year Checker</NavLink>
                                    <NavLink className="navbar-item navbar-item-dropdown" to="/HackerNews">Hacker News</NavLink>
                                    <NavLink className="navbar-item navbar-item-dropdown" to="/CurrencyConverter">Currency Converter</NavLink>
                                    <NavLink className="navbar-item navbar-item-dropdown" to="/DataFetchUsingUseReducer">Data Fetch</NavLink>
                                    <NavLink className="navbar-item navbar-item-dropdown" to="/GithubApi">GithubApi</NavLink>
                                </div>                           
                            </div>                    
                    </div>
                </div>
            </div> 
        </nav>
    </>
)
}


export default Navbar;





















