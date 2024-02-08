import { useEffect, useState } from "react";
const fullDev = [
	{ name: "FrontEnd", value: "FE", framework: ["Angular", "React", "Vue"] },
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
		console.log(language[0]);
		console.log(language[1]);
	}, [language]);

	return (
		<>
			<div className="container">
				<h3 className="content has-text-centered is-size-3 ">
					select
				</h3>

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
													console.log(e.target.value);
													setLanguage([e.target.value]);
												}}
											>
												{fullDev.map((item, index) => {
													return (
														<option key={index} value={index}>
															{item.name}
														</option>
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
			
		</>
	);
};

export default Select;
