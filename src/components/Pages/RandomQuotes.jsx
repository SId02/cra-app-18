import React, { useState } from "react";
import TestimonialSlider from "../Layout/TestimonialSlider/TestimonialSlider"
import axios from "axios";
import { Link } from 'react-router-dom';
const RandomQuotes = () => {
	const [qoute, setQuote] = useState("");
	const handleQuote = async () => {
		const res = await axios.get("https://api.quotable.io/random");
		setQuote(res.data.content);
	};
	return (
		<>
			<div className="container has-text-centered p-5 ">
				<h3 className="is-size-4"> Random Quotes </h3>
			</div>
			<div className="p-5">
				<div className="columns is-desktop mt-5 has-text-centered">
					<div className="column is-6 is-half is-offset-one-quarter ">
						<div className="card">
							<div className="card-content">
								<div className="content">
									<p	className="subtitle">{qoute}</p>
									<br />
								</div>
							</div>
							<div className="is-justify-content-space-evenly">
								
								<button className="button mb-3" onClick={handleQuote}>
									<span className="icon p-5">Next</span>
									<i className="fa-solid fa-caret-right"></i>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<br />
			<hr />
			<TestimonialSlider />
			<br />
			<hr />
<footer className="footer">
		<div className="content has-text-centered">
		  <Link to="/" className="has-text-link">
			Back to Home
		  </Link>
		</div>
	  </footer>
		</>
	);
};

export default RandomQuotes;
