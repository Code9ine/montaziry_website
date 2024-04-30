"use client"
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./en.json";
import faTranslation from "./fa.json";

i18n
	.use(initReactI18next) // Bind react-i18next to the instance of i18next
	.init({
		resources: {
			en: {
				translation: enTranslation, // English translation file
			},
			fa: {
				translation: faTranslation, // Farsi translation file
			},
		},
		lng: "en", // Set English as the default language
		fallbackLng: "en", // Fallback to English if translation for the current language is missing
		debug: false, // Enable debug mode
		interpolation: {
			escapeValue: false, // React components should be treated as raw HTML, not escaped text
		},
	});

export default i18n;
