import { useEffect, useState } from "react";
import ReveiwRating from "../Layout/ReviewRating/ReviewRating";
const fullDev = [
	{
		name: "FrontEnd",
		value: "FE",
		framework: ["Angular", "React", "Vue"],
	},
	{
		name: "BackEnd",
		value: "BE",
		framework: ["Java", "Node", "Php", "Python"],
	},
	{
		name: "DataBase",
		value: "DB",
		framework: ["Mysql", "MS Sql", "Oracle", "MongoDB"],
	},
];
const Select = () => {
	const [language, setLanguage] = useState([]);
	useEffect(() => {
	}, [language]);

	return (
		<>
			<div className="container p-5">
			<h2 className="content has-text-centered is-size-3">Select Option | Review Rating</h2>
			</div>
			<div className="container p-5">
				<h3 className="content has-text-centered is-size-3 "> Select Option </h3>
				<div className="columns is-desktop  is-centered">
					<div className="column is-8 is-half">
						<div className="field is-horizontal">
							<div className="field-body">
								<div className="field">
									<p className="control">
										<div className="select">
											<select
												value={language}
												onChange={(e) => {
													setLanguage([e.target.value]);
												}}
											>
												{fullDev.map((item, index) => {
													return (
														<>
															<option key={index} value={index}>
																{item.name}
															</option>
														</>
														
													);
												})}
											</select>
										</div>
									</p>
								</div>

								<div className="field">
									<p className="control">
										<div className="select">
											<select>
												{fullDev[language] &&
													fullDev[language].framework.map((item, index) => {
														return <option value={index}>{item}</option>;
													})}
											</select>
										</div>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<br />
			<hr />
			<br />
			<ReveiwRating />
			<br />
			<hr />
			<br />
		
			
		</>
	);
};

export default Select;
