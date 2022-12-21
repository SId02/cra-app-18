import React, { useState } from "react";
import { NavLink ,Outlet} from "react-router-dom";

const CoinMenu = () => {
	return (
		<>
			<div className="section">
				<div className="container">
					<nav className="breadcrumb is-centered mb-3" aria-label="breadcrumbs">
						<ul>
							<li>
								<a href="#">Coins</a>
								<NavLink className="navbar-item" to="/coins">
									Exchange
								</NavLink>
							</li>
							<li>
								<a href="#">Exchange</a>
								<NavLink className="navbar-item" to="/exchanges">
									Exchange
								</NavLink>
							</li>
						</ul>
					</nav>
				</div>
            </div>
            <Outlet/>

		</>
	);
};

export default CoinMenu;
