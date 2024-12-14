import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
	const { t, i18n } = useTranslation();

	const handleLanguageChange = (language) => {
		i18n.changeLanguage(language);
	};

	return (
		<>
			<section className="section">
				<div className="container has-text-centered">
					<h1 className="title p-5">Language Selector </h1>
				</div>
				<div className="container">
					<div className="columns is-centered">
						<div className="column is-half">
							<div className="box">
								<div className="field select is-link">
									<select
										onChange={(e) => handleLanguageChange(e.target.value)}
									>
										<option value="en">English</option>
										<option value="mr">Marathi</option>
										<option value="gom">Konkani</option>
										<option value="hi">Hindi</option>
										<option value="kn">Kannada</option>
										<option value="gu">Gujarati</option>
									</select>
								</div>

								<p className="notification  has-text-centered">
									{t("message")}
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default LanguageSelector;
