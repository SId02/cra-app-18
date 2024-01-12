import React, { useState} from 'react'
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [isActive, setisActive] = useState(false)
    return (
        <>
        <nav className="navbar  is-light">
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
                        <div className="navbar-item has-dropdown is-hoverable">
                                            <a className="navbar-link">More</a>
                                            <div className="navbar-dropdown">
                                                <NavLink className="navbar-item navbar-item-dropdown" to="/Counter">Counter</NavLink>
                                                <NavLink className="navbar-item navbar-item-dropdown" to="/Calculator">Calculator</NavLink>
                                                <NavLink className="navbar-item navbar-item-dropdown" to="/ShoppingCart">Shop</NavLink>
                                                <NavLink className="navbar-item navbar-item-dropdown" to="/CoinEx">CoinEx</NavLink>
                                    <NavLink className="navbar-item navbar-item-dropdown" to="/DatePicker">DatePicker</NavLink>
                                    <NavLink className="navbar-item navbar-item-dropdown" to="/DatePickerWithMax">DatePickerMax</NavLink>
                                                <NavLink className="navbar-item navbar-item-dropdown" to="/FormValidation">Form Validation</NavLink>
                                                <NavLink className="navbar-item navbar-item-dropdown" to="/Search">Search</NavLink>
                                                <NavLink className="navbar-item navbar-item-dropdown" to="/Select">Select</NavLink>
                                                <NavLink className="navbar-item navbar-item-dropdown" to="/Accordion">Accordion</NavLink>
                                                <NavLink className="navbar-item navbar-item-dropdown" to="/MemeGenerator">MemeGenerator</NavLink>
                                                <NavLink className="navbar-item navbar-item-dropdown" to="/RandomQuotes">RandomQuotes</NavLink>
                                    <NavLink className="navbar-item navbar-item-dropdown" to="/YearCalculator">Year Calculator</NavLink>
                                    <NavLink className="navbar-item navbar-item-dropdown" to="/TechNews">TechNews</NavLink>
                                    <NavLink className="navbar-item navbar-item-dropdown" to="/CurrencyConverter">Currency Converter</NavLink>
                                    <NavLink className="navbar-item navbar-item-dropdown" to="/">Data Fetch</NavLink>
                                            </div>      
                        </div>
                    </div>
                </div>
            </div> 
        </nav>
    
    </>
)
}


export default Navbar




















