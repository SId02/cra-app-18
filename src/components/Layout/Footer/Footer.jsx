import React, { useState, useEffect } from "react";

const Footer = () => {
	const mystyle = {
		color: "#202020",
		padding: "1rem",
		background: "#e3e3e3",
	};

	const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
	useEffect(() => {
		setCurrentYear(new Date().getFullYear());
	}, []);
	return (
		<>
			<footer className="main-footer has-text-centered" style={mystyle}>
				<div className="container">
					<div className="footer-copyright">
						<p> 2022 - {currentYear} CRA-APP-18. </p>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
