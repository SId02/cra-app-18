import React, { useState } from "react";

function TogglePasswordVisibility() {
	const [passwordVisible, setPasswordVisible] = useState(false);

	const togglePasswordVisibility = () => {
		setPasswordVisible(!passwordVisible);
	};

	return (
		<>
			<section>
				<div className="container p-5 has-text-centered">
					<h1 className="title ">Toggle Password Visibility </h1>
				</div>
				<div className="container p-6 ">
					<div className="columns is-desktop">
						<div className="column is-4 is-offset-one-quarter box">
							<div className="field">
								<div className="control">
									<input
										type={passwordVisible ? "text" : "password"}
										value="P@ssword@123"
										className="input"
									/>
									<label className="checkbox pt-5">
										<input
											className="m-2"
											type="checkbox"
											checked={passwordVisible}
											onChange={togglePasswordVisibility}
										/>
										Show Password
									</label>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default TogglePasswordVisibility;
