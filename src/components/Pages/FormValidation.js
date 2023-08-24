import React from "react";

const FormValidation = () => {
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
									className="input is-success"
									type="text"
									placeholder="Text input"
									value="bulma"
								/>
								
							</div>
							<p className="help is-success">This username is available</p>
						</div>

						<div className="field">
							<label className="label">Email</label>
							<div className="control">
								<input
									className="input is-danger"
									type="email"
									placeholder="Email input"
									value="hello@"
								/>
								
							</div>
							<p className="help is-danger">This email is invalid</p>
						</div>

                        <div className="field">
							<label className="label">Password</label>
							<div className="control">
								<input
									className="input is-danger"
									type="email"
									placeholder="Email input"
									value="hello@"
								/>
								
							</div>
							<p className="help is-danger">This Password is invalid</p>
						</div>

                        <div className="field">
							<label className="label">Password</label>
							<div className="control">
								<input
									className="input is-danger"
									type="email"
									placeholder="Email input"
									value="hello@"
								/>
								
							</div>
							<p className="help is-danger">This Password is invalid</p>
						</div>

						<div className="field">
							<div className="control">
								<button className="button is-link">Submit</button>
							</div>
							
						</div>
                    </div>
                    <div className="column is-4"></div>
				</div>
			</div>
		</>
	);
};

export default FormValidation;
