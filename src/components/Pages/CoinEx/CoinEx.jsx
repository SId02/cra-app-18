import React from "react";
import { Link, Outlet } from "react-router-dom";

const CoinEx = () => {
	return (
		<>
			

			<div className="section">
				<div className="container">
					<nav className="breadcrumb is-centered mb-3" aria-label="breadcrumbs">
						<ul>
							<li>
								
								<Link className="navbar-item" to="/CoinEx/Coins">
									Coins
								</Link>
							</li>
							<li>
								
								<Link className="navbar-item" to="/CoinEx/Exchanges">
									Exchange
								</Link>
							</li>
						</ul>
					</nav>
				</div>
            </div>
			<Outlet />
			
			
		</>
	);
};

export default CoinEx;
