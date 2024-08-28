import { useState } from "react";
const BmiCalculator = () => {
	const [weight, setWeight] = useState("");
	const [height, setHeight] = useState("");
	const [bmi, setBmi] = useState("");
	const [message, setMessage] = useState("");

	const handleWeightChange = (event) => {
		setWeight(event.target.value);
	};

	const handleHeightChange = (event) => {
		setHeight(event.target.value);
	};

	const calculateBmi = () => {
		const weightInKg = parseFloat(weight);
		const heightInM = parseFloat(height) / 100;

		if (
			isNaN(weightInKg) ||
			isNaN(heightInM) ||
			weightInKg <= 0 ||
			heightInM <= 0
		) {
			setMessage("Invalid input. Please enter positive numbers only.");
			return;
		}

		const bmiValue = weightInKg / (heightInM * heightInM);
		const bmiMessage = getBmiMessage(bmiValue);

		setBmi(bmiValue.toFixed(2));
		setMessage(bmiMessage);
	};

	const getBmiMessage = (bmi) => {
		if (bmi < 18.5) {
			return `Your BMI is ${bmi.toFixed(2)}. You are underweight.`;
		} else if (bmi < 25) {
			return `Your BMI is ${bmi.toFixed(2)}. You are normal weight.`;
		} else if (bmi < 30) {
			return `Your BMI is ${bmi.toFixed(2)}. You are overweight.`;
		} else {
			return `Your BMI is ${bmi.toFixed(2)}. You are obese.`;
		}
	};

	const clearMessage = () => {
		setMessage("");
	};
	return (
		<>
			<section className="py-6 section">
				<div className="container pb-5 has-text-centered">
					<h1 className="title"> BMI Calculator </h1>
				</div>
				<div className="container pt-5 ">
					<div className="columns is-multiline is-centered">
						<div className="column is-5 is-4-desktop">
							<div className="box">
								<form onSubmit={(e) => e.preventDefault()}>
									{bmi && (
										<div className="notification is-success">
											<button className="delete" onClick={() => setBmi("")} />
											Your BMI is {bmi}
										</div>
									)}

									{message && (
										<div className="notification is-warning">
											<button className="delete" onClick={clearMessage} />
											{message}
										</div>
									)}

									<div className="field">
										<label className="label">Weight (kg)</label>
										<div className="control">
											<input
												className={`input ${message ? "is-danger" : ""}`}
												type="number"
												value={weight}
												onChange={handleWeightChange}
												placeholder="Enter your weight"
												min="0"/>
										</div>
									</div>

									<div className="field">
										<label className="label">Height (cm)</label>
										<div className="control">
											<input
												className={`input ${message ? "is-danger" : ""}`}
												type="number"
												value={height}
												onChange={handleHeightChange}
												placeholder="Enter your height"
												min="0"/>
										</div>
									</div>

									<div className="field">
										<div className="control">
											<button
												type="button"
												className="button is-link"
												onClick={calculateBmi}>
												Calculate BMI
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default BmiCalculator;
