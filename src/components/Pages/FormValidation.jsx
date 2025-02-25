import  { useState } from "react";
import WordCounter from "../Pages/WordCounter";
import TrafficSignal from "../Layout/TrafficSignal/TrafficSignal";
const FormValidation = () => {
	const [username, setusername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const [errorUserName, setErrorUserName] = useState("");
	const [errorEmail, setErrorEmail] = useState("");
	const [errorPassword, setErrorPassword] = useState("");
	const [errorConfrimPassword, setErrorConfirmPassword] = useState("");

	function validate(e) {
		e.preventDefault();

		if (username.length > 3) {
			setErrorUserName("");
		} else {
			setErrorUserName("Username must be 3 Character.");
		}

		if (email.includes("@")) {
			setErrorEmail("");
		} else {
			setErrorEmail("Email should have @");
		}

		if (password.length > 8) {
			setErrorPassword("");
		} else {
			setErrorPassword("Password should be 8 Character.");
		}

		if (password !== "" && password === confirmPassword) {
			setErrorConfirmPassword("");
		} else {
			setErrorConfirmPassword("Passwords didn't matched.");
		}
	}

	return (
		<>
			<div className="container">
				<h3 className=" has-text-centered m-5">Form Validation</h3>
				<div className="columns is-desktop  mt-5 ">
					<div className="column is-4 is-half"></div>
					<div className="column is-4 box">
						<div className="field">
							<label className="label">Username</label>
							<div className="control">
								<input
									className="input"
									type="text"
									placeholder="username"
									value={username}
									onChange={(e) => setusername(e.target.value)}
								/>
							</div>
							<p className="help is-danger">{errorUserName}</p>
						</div>

						<div className="field">
							<label className="label">Email</label>
							<div className="control">
								<input
									className="input"
									type="email"
									placeholder="Email input"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>
							<p className="help is-danger">{errorEmail}</p>
						</div>

						<div className="field">
							<label className="label">Password</label>
							<div className="control">
								<input
									className="input"
									type="email"
									placeholder="Password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
								/>
							</div>
							<p className="help is-danger">{errorPassword}</p>
						</div>

						<div className="field">
							<label className="label">Confirm Password</label>
							<div className="control">
								<input
									className="input"
									type="email"
									placeholder="Confirm Password"
									value={confirmPassword}
									onChange={(e) => setConfirmPassword(e.target.value)}
								/>
							</div>
							<p className="help is-danger">{errorConfrimPassword}</p>
						</div>

						<div className="field">
							<div className="control">
								<button className="button is-link" onClick={validate}>
									Submit
								</button>
							</div>
						</div>
					</div>
					<div className="column is-4"></div>
				</div>
			</div>
			<br />
			<br />
			<WordCounter/>
			<hr />
			<br />
			<br />
		    <TrafficSignal /> 
			<hr />
			<br />
			<br />
		</>
	);
};

export default FormValidation;
