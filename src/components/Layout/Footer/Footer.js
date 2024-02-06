import React, { useState, useEffect } from 'react';


const Footer = () => {
	const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
	useEffect(() => {

		setCurrentYear(new Date().getFullYear());
	
	  }, []);
	return (
		<>
			<footer className="footer is-flex-align-items-flex-end mt-5	is-fixed-bottom	has-background-link-light" >
				<div className="container">
					<p className="content subtitle has-text-centered is-6">2022 - {currentYear} CRA-APP-18.</p>
				</div>
			</footer>

		</>
		
	);
};

export default Footer;
