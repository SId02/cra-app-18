import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          message: 'This project is built using React JS version 18, along with React Router DOM, Axios, Bulma CSS version 0.9.4, i18next, and react-i18next for localization.',
        },
      },
      hi: {
        translation: {
          message: 'यह प्रोजेक्ट React JS संस्करण 18 का उपयोग करके बनाया गया है, साथ ही React Router DOM, Axios, Bulma CSS संस्करण 0.9.4, i18next और react-i18next स्थानीयकरण के लिए शामिल हैं।',
        },
      },
      mr: {
        translation: {
          message: 'हा प्रकल्प React JS आवृत्ती १८ वापरून तयार केला आहे, ज्यामध्ये React Router DOM, Axios, Bulma CSS आवृत्ती ०.९.४, i18next आणि react-i18next स्थानिकीकरणासाठी समाविष्ट आहेत.',
        },
      },
      kn: {
        translation: {
          message: 'ಈ ಯೋಜನೆ React JS ಆವೃತ್ತಿ 18 ಅನ್ನು ಬಳಸಿಕೊಂಡು ನಿರ್ಮಿಸಲಾಗಿದೆ, ಜೊತೆಗೆ React Router DOM, Axios, Bulma CSS ಆವೃತ್ತಿ 0.9.4, i18next ಮತ್ತು react-i18next ಸ್ಥಳೀಯೀಕರಣಕ್ಕಾಗಿ ಸೇರಿಸಲಾಗಿದೆ.',
        },
      },
      gu: {
        translation: {
          message: 'આ પ્રોજેક્ટ React JS આવૃત્તિ 18 નો ઉપયોગ કરીને બનાવવામાં આવ્યો છે, સાથે React Router DOM, Axios, Bulma CSS આવૃત્તિ 0.9.4, i18next અને react-i18next સ્થાનિકીકરણ માટે સમાવિષ્ટ છે.',
        },
      },
      gom: {
        translation: {
          message: 'हा प्रोजेक्ट React JS आवृत्ती १८ वापरून तयार केला आहे, ज्यात React Router DOM, Axios, Bulma CSS आवृत्ती ०.९.४, i18next आणि react-i18next स्थानिकीकरणासाठी समाविष्ट आहेत.',
        },
      },
    },
  });

export default i18n;




/*
English:
This project is built using React JS version 18, along with React Router DOM, Axios, Bulma CSS version 0.9.4, i18next, and react-i18next for localization.

Marathi:
हा प्रकल्प React JS आवृत्ती १८ वापरून तयार केला आहे, ज्यामध्ये React Router DOM, Axios, Bulma CSS आवृत्ती ०.९.४, i18next आणि react-i18next स्थानिकीकरणासाठी समाविष्ट आहेत.
 Hindi:
यह प्रोजेक्ट React JS संस्करण 18 का उपयोग करके बनाया गया है, साथ ही React Router DOM, Axios, Bulma CSS संस्करण 0.9.4, i18next और react-i18next स्थानीयकरण के लिए शामिल हैं।
 Gujarati:
આ પ્રોજેક્ટ React JS આવૃત્તિ 18 નો ઉપયોગ કરીને બનાવવામાં આવ્યો છે, સાથે React Router DOM, Axios, Bulma CSS આવૃત્તિ 0.9.4, i18next અને react-i18next સ્થાનિકીકરણ માટે સમાવિષ્ટ છે.

Konkani:
हा प्रोजेक्ट React JS आवृत्ती १८ वापरून तयार केला आहे, ज्यात React Router DOM, Axios, Bulma CSS आवृत्ती ०.९.४, i18next आणि react-i18next स्थानिकीकरणासाठी समाविष्ट आहेत. 

Kannada:
ಈ ಯೋಜನೆ React JS ಆವೃತ್ತಿ 18 ಅನ್ನು ಬಳಸಿಕೊಂಡು ನಿರ್ಮಿಸಲಾಗಿದೆ, ಜೊತೆಗೆ React Router DOM, Axios, Bulma CSS ಆವೃತ್ತಿ 0.9.4, i18next ಮತ್ತು react-i18next ಸ್ಥಳೀಯೀಕರಣಕ್ಕಾಗಿ ಸೇರಿಸಲಾಗಿದೆ.

Telugu:
ఈ ప్రాజెక్ట్ React JS సంచిక 18 ఉపయోగించి నిర్మించబడింది, అలాగే React Router DOM, Axios, Bulma CSS సంచిక 0.9.4, i18next మరియు react-i18next స్థానికీకరణ కోసం చేర్చబడ్డాయి.
 
 */