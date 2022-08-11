import React, { useState} from 'react'

const Navbar = () => {
    const [isActive, setisActive] = useState(false)
return (
    <>
        <nav className="navbar">
        <div className="container">
        <div className="navbar-brand">
            <a className="navbar-item" href="#">CRA-18</a>
            <a  onClick={() => {
            setisActive(!isActive)
        }} className={`navbar-burger burger ${isActive ? 'is-active' : ''}`} role="button" aria-label="menu" aria-expanded="false">
                <span aria-hidden="true">
                </span><span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <div className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
            <div className="navbar-end">
                <a className="navbar-item" href="#">Features</a>
                <a className="navbar-item" href="#">Enterprise</a>
                <a className="navbar-item" href="#">Support</a>
            <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">ICO</a>
                    <div className="navbar-dropdown">
                        <a className="navbar-item navbar-item-dropdown" href="#">Whitepaper</a>
                        <a className="navbar-item navbar-item-dropdown" href="#">Token</a></div>
            </div>
            </div>
        </div>
        </div>
</nav>
    
    </>
)
}

export default Navbar




















