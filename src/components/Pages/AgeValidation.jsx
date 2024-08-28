import React, { useState } from "react";
import OTPChecker from "../Layout/OTPChecker/OTPChecker";
import BmiCalculator from "./BmiCalculator";

const AgeValidation = () => {
	const [age, setAge] = useState("");
	const [message, setMessage] = useState("");

	const handleInputChange = (event) => {
		const inputAge = parseInt(event.target.value, 10);
		setAge(inputAge);

		if (inputAge < 18) {
			setMessage("You are not yet 18 years old.");
		} else if (inputAge >= 60 && inputAge < 75) {
			setMessage("You are a senior citizen aged 60 or 75 years old.");
		} else if (inputAge >= 75) {
			setMessage("You are a senior citizen aged 75 or above.");
		} else {
			setMessage("");
		}
	};

	return (
		<>
			<section className="p-5">
				<div className="container p-5 has-text-centered">
					<h1 className="title">Age Validation</h1>
				</div>

				<div className="container p-6 is-centered">
					<div className="columns is-desktop  has-text-centered">
						<div className="column is-5 is-offset-one-quarter box ">
							<form>
								<input
									type="text"
									value={age}
									maxLength="3"
									onChange={handleInputChange}
									className="input"
								/>
								{message && (
									<p
										className={`notification p-3 m-2 ${
											message.includes("18") ? "is-danger" : "is-warning"
										}`}
									>
										{message}
									</p>
								)}
							</form>
						</div>
					</div>
				</div>
			</section>

			<hr />

			<OTPChecker />

		    <hr />

			<BmiCalculator/>


		</>
	);
};

export default AgeValidation;
