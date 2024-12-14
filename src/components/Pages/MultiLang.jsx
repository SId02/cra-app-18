import LanguageSelect from "./LanguageSelect";
import { I18nextProvider } from "react-i18next";
// import i18n from "./i18n";
import i18n from "../Data/i18n";
const MultiLang = () => {
	return (
		<>
			<I18nextProvider i18n={i18n}>
				<LanguageSelect />
			</I18nextProvider>
		</>
	);
};

export default MultiLang;
