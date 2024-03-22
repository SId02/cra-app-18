import React, { useState } from "react";

const OTPChecker = () => {
    const [otp, setOTP] = useState("");
	const [otpError, setOTPError] = useState(false);

	const handleOTPChecker = (e) => {
		const inputOTP = e.target.value;
		setOTP(inputOTP);
		if (inputOTP.length !== 4) {
			setOTPError(true);
		} else {
			setOTPError(false);
		}
	};
	return (
		<>
            <section className="p-5">
				<div className="container p-5 has-text-centered">
					<h1 className="title ">OTP Checker</h1>
				</div>

				<div className="container p-6 is-centered">
					<div className="columns is-desktop  has-text-centered">
						<div className="column is-5 is-offset-one-quarter box ">
							<form>
								<div className="field">
									<p className="control has-icons-left has-icons-right">
										<input
											className={`input ${otpError ? "is-danger" : ""}`}
											type="text"
											maxLength="4"
											placeholder="Enter OTP"
											value={otp}
											onChange={handleOTPChecker}
										/>
										<span className="icon is-small is-left">
											<i className="fas fa-key"></i>
										</span>
										{otpError && (
											<span className="icon is-small is-right">
												<i className="fas fa-exclamation-triangle"></i>
											</span>
										)}
									</p>
									{otpError && (
										<p className="help is-danger">OTP must be 4 digits long</p>
									)}
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default OTPChecker;
