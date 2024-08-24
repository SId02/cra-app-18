import { useState } from "react";

const CreditCard = () => {
	const [cardNumber, setCardNumber] = useState("");
	const [cardType, setCardType] = useState("");
	const [error, setError] = useState("");

	const cardTypeRegex = {
		visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
		mastercard: /^(5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12})$/,
		americanexpress: /^3[47][0-9]{13}$/,
		rupay: /^(60|65|81)[0-9]{14}$/,
	};

	const handleCardNumberChange = (e) => {
		const cardNumberValue = e.target.value.replace(/\s/g, "");
		setCardNumber(cardNumberValue);

		const { type, isValid } = validateCardNumber(cardNumberValue);
		setCardType(type);
		setError(isValid ? "" : "Invalid card number");
	};

	const validateCardNumber = (number) => {
		for (const [type, regex] of Object.entries(cardTypeRegex)) {
			if (regex.test(number)) {
				return { type, isValid: true };
			}
		}
		return { type: "", isValid: false };
	};

	return (
		<>
			<section className="section">
				<div className="container has-text-centered p-5">
					<h3 className="title"> Credit Card Validation </h3>
				</div>
				<div className="container">
					<div className="columns is-multiline is-centered">
						<div className="column is-8 is-6-desktop">
							<div className="box">
								<div className="field">
									<label className="label">Card Number</label>
									<div className="control">
										<input
											className={`input ${error ? "is-danger" : ""}`}
											type="text"
											value={cardNumber.replace(/(\d{4})(?=\d)/g, "$1 ")} // Format card number
											onChange={handleCardNumberChange}
											placeholder="Enter card number"/>
										{error && <p className="help is-danger">{error}</p>}
									</div>
								</div>

								<div className="field">
									<label className="label">Card Type</label>
									<div className="control">
										<input
											className="input"
											type="text"
											value={cardType.toUpperCase() || "N/A"} // Show "N/A" if no type
											readOnly/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default CreditCard;
