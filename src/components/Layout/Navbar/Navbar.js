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
                    <span aria-hidden="true">
                    </span><span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </NavLink>
            </div>
                <div className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
                    <div className="navbar-end">
                        <NavLink className="navbar-item" to="/">Home</NavLink>
                        <NavLink className="navbar-item" to="/crud">home</NavLink>
                        <NavLink className="navbar-item" to="/pagination">Pagination</NavLink>
                        <div className="navbar-item has-dropdown is-hoverable">
                                        <a className="navbar-link">More</a>
                                <div className="navbar-dropdown">
                                <NavLink className="navbar-item navbar-item-dropdown" to="/ShoppingCart">Shop</NavLink>
                                <NavLink className="navbar-item navbar-item-dropdown" to="/CoinEx">CoinEx</NavLink>

                                                <NavLink className="navbar-item navbar-item-dropdown" to="/DatePicker">DatePicker</NavLink>
                                                <NavLink className="navbar-item navbar-item-dropdown" to="/FormValid">Form Validation</NavLink>
                                                <NavLink className="navbar-item navbar-item-dropdown" to="/Search">Search</NavLink>
                                                <NavLink className="navbar-item navbar-item-dropdown" to="/Select">Select</NavLink>
                                                <NavLink className="navbar-item navbar-item-dropdown" to="/CopyClipboard">CopytoClipboard</NavLink>
                                    <NavLink className="navbar-item navbar-item-dropdown" to="/Accordion">Accordion</NavLink>
                                    <NavLink className="navbar-item navbar-item-dropdown" to="/RandomQuotes">RandomQuotes</NavLink>
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




















