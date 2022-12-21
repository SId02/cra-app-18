import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import	CoinMenu	from"../Layout/Navbar/CoinMenu"
const CoinEx = () => {
	return (
		<>
			<Router>
				<CoinMenu/>
				<Routes>

				</Routes>
			</Router>
			
		</>
	);
};

export default CoinEx;
