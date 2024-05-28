import { useState } from "react";

const DarkLightModeToggle = () => {
	const [isDarkMode, setIsDarkMode] = useState(false);

	const handleToggle = () => {
		setIsDarkMode(!isDarkMode);
	};

	return (
		<section className={`hero ${isDarkMode ? "is-dark" : "is-light"}`}>
			<div className="hero-body">
				<div className="container">
					<p className="title">Half height hero</p>

					<p className="subtitle">Half height subtitle</p>

					<button className="button" onClick={handleToggle}>
						{isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
					</button>
				</div>
			</div>
		</section>
	);
};

export default DarkLightModeToggle;
