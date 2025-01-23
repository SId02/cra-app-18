import React, { useState, useEffect } from "react";
import DigitalClock from "./DigitalClock.jsx";
import StopWatch from "./StopWatch.jsx";
import axios from "axios";

const CurrencyConverter = () => {
	const [exchangeRates, setExchangeRates] = useState({});
	const [amount, setAmount] = useState(1);
	const [fromCurrency, setFromCurrency] = useState("USD");
	const [toCurrency, setToCurrency] = useState("INR");
	const [convertedAmount, setConvertedAmount] = useState(null);

	useEffect(() => {
		const api_Url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;

		axios
			.get(api_Url)
			.then((response) => {
				setExchangeRates(response.data.rates);
			})
			.catch((error) => {
				console.error("Error in fetching currency exchange rate:", error);
			});
	}, [fromCurrency]);

	useEffect(() => {
		const conversionRate = exchangeRates[toCurrency];
		if (conversionRate) {
			const converted = amount * conversionRate;
			setConvertedAmount(converted.toFixed(2));
		}
	}, [amount, fromCurrency, toCurrency, exchangeRates]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		switch (name) {
			case "amount":
				setAmount(value);
				break;
			case "fromCurrency":
				setFromCurrency(value);
				break;
			case "toCurrency":
				setToCurrency(value);
				break;
			default:
				break;
		}
	};

	return (
		<>
			<section>
				<div className="container p-5 has-text-centered">
					<h1 className="title ">Currency Converter</h1>
				</div>
				<div className="container p-6 is-centered ">
					<section className="p-5 m-5 box">
						<div className="columns is-multiline is-mobile is-desktop">
							<div className="column is-6 ">
								<div className="field">
									<label for="From Currency" className="label">
										From Currency :
									</label>
									<div className="control">
										<div className="select is-medium">
											<select
												name="fromCurrency"
												value={fromCurrency}
												onChange={handleChange}
											>
												{Object.keys(exchangeRates).map((currency) => (
													<option key={currency} value={currency}>
														{currency}
													</option>
												))}
											</select>
										</div>
									</div>
								</div>
							</div>

							<div className="column is-6">
								<div className="field">
									<label for="To Currency" className="label">
										To Currency :
									</label>
									<div className="control">
										<div className="select is-medium">
											<select
												name="toCurrency"
												value={toCurrency}
												onChange={handleChange}
											>
												{Object.keys(exchangeRates).map((currency) => (
													<option key={currency} value={currency}>
														{currency}
													</option>
												))}
											</select>
										</div>
									</div>
								</div>
							</div>

							<div className="column is-6">
								<div className="field">
									<label for="Amount" className="label">
										Amount :
									</label>
									<div className="control">
										<input
											className="input is-medium"
											id="amt"
											name="amount"
											placeholder="0000"
											value={amount}
											onChange={handleChange}
										/>
									</div>
								</div>
							</div>
							<div className="column is-6">
								<div className="field">
									<label for="Converted Amount" className="label">
										Converted Amount:
									</label>
									<div className="control">
										<p className="input is-medium" readonly>{convertedAmount}</p>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
			</section>
			<br />
			<hr/>
			<br/>
					{/*  */}
					<div className="container p-5">
						<div className="columns is-centered">
							<div className="column is-half">
								<div className="box has-background-light">
									<h2 className="subtitle has-text-centered">Digital Clock</h2>
									<DigitalClock />
								</div>
							</div>

							<div className="column is-half">
								<div className="box has-background-warning">
									<h2 className="subtitle has-text-centered">StopWatch</h2>
									<StopWatch /> 
								</div>
							</div>
						</div>
					</div>
					{/*  */}
		</>
	);
};

export default CurrencyConverter;
