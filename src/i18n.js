import i18n from 'i18next';
import {initReactI18next} from "react-i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import I18NextHttpBackend from "i18next-http-backend";

import translationEN from "/public/locales/en-EN/translationEN.json";
import translationRU from "/public/locales/ru-RU/translationRU.json";

const resources ={
    en:{
        translation:translationEN
    },
    ru:{
        translation: translationRU
    }
};

i18n
    .use(I18NextHttpBackend).use(I18nextBrowserLanguageDetector).use(initReactI18next).

    init({
    resources,
    debug:true,
    fallbackLng:'en'
});

export default i18n;