import React, { useState } from "react";
import YearsCalculator from "../Layout/YearCalculator/YearCalculator";
const DatePicker = () => {
	const [disable, setDisable] = useState(true);
	const [todate, setTodate] = useState([]);
	const [fromdate, setFromdate] = useState([]);

	const [todateformat, setTodateformat] = useState("");
	const [fromdateformat, setFromdateformat] = useState("");

	const handletodate = (e) => {
		const gettodatevalue = e.target.value;
		const setdateformat = gettodatevalue.split("/");
		const settoyear = setdateformat[0];
		const settomonth = setdateformat[1];
		const settodate = setdateformat[2];
		const settodateformat = settoyear + "" + settomonth + "" + settodate;
		setTodate(gettodatevalue);
		setTodateformat(settodateformat);
		setDisable(false);
	};

	const handlefromdate = (e) => {
		const getfromdatevalue = e.target.value;
		const setfromformat = getfromdatevalue.split("/");
		const setfromyear = setfromformat[0];
		const setfrommonth = setfromformat[1];
		const setfromdate = setfromformat[2];
		const setfromformatdate =
			setfromyear + "" + setfrommonth + "" + setfromdate;
		setFromdate(getfromdatevalue);
		setFromdateformat(setfromformatdate);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (todateformat > fromdateformat) {
			alert("Please select valid date");
		} else {
			alert("Successfull...!");
		}
	};
	return (
		<>
			<section className="py-6 section">
				<div className="container pb-5 has-text-centered">
					<h1 className="title">Date Picker</h1>
				</div>
				<div className="container pt-5 is-horizontal">
					<div className="columns is-multiline is-centered">
						<div className="column is-5 is-8-desktop">
							<form className="box " onSubmit={handleSubmit}>
								<div className="columns ">
								
									<div className="column">
										<div className="field">
											<label for="weight" className="label">
												From Date
											</label>
											<div className="control">
												<input type="date"
													className="input is-medium"
													name="fromdate"
													placeholder="dd-mm-yyyy"
													onChange={(e) => handlefromdate(e)}
												/>
											</div>
										</div>
									</div>
									<div className="column">
										<div className="field">
											<label for="height" className="label">
											To Date
											</label>
											<div className="control">
												<input type="date"
													className="input is-medium "
													
											name="todate"
											placeholder="dd-mm-yyyy"
											disabled={disable}
											onChange={(e) => handletodate(e)}
												/>
											</div>
										</div>
									</div>

				
								</div>
								<div className="column">
									<div className="field">
										<div className="control has-text-centered">
											<button
												className="button is-link calculate"
												type="button"
												name="submit"
												value="Submit"
												onclick="age()"
											>
												Calculate
											</button>
										</div>
									</div>
								</div>
								<div id="age" className="text-center"></div>
							</form>
						</div>
					</div>
				</div>
			</section>

			<hr />
			<section>
				<YearsCalculator />
			</section>
		</>
	);
};
export default DatePicker;
