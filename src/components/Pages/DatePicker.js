import React, { useState } from "react";

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
		const setfromformatdate = setfromyear + "" + setfrommonth + "" + setfromdate;
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
			<div className="container">
				<h3 className="content has-text-centered is-size-3 is-underlined">
					Date Picker
				</h3>

				<div className="columns is-desktop  is-centered">
					<div className="column is-8 is-half">
							<div className="field is-horizontal" onSubmit={handleSubmit}>
								<div className="field-body">
									<div class="field-label is-normal">
										<label class="label">From Date</label>
									</div>
									<div className="field">
										<p className="control">
										<input className="input" type="date" name="fromdate" placeholder="dd-mm-yyyy"  onChange={ (e) => handlefromdate(e) } />
										</p>
									</div>
									<div class="field-label is-normal">
										<label class="label">To Date</label>
									</div>
									<div className="field">
										<p className="control">
										<input className="input" type="date" name="todate" placeholder="dd-mm-yyyy"	disabled={disable} onChange={(e) => handletodate(e)}/>
										</p>
									</div>
								</div>
							</div>
						
					</div>
					
				</div>
			</div>
		</>
	);
};
export default DatePicker;
