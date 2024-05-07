import React, { createContext, useContext, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const LanguageContext = createContext();

export function useLanguage() {
	return useContext(LanguageContext);
}

export function LanguageProvider({ children }) {
	const { i18n, lng } = useTranslation();

	// Conditionally access localStorage based on window object
	const lang = localStorage.getItem("language") ?? "en";
	
	const [currentLanguage, setCurrentLanguage] = useState(lang);

	const toggleLanguage = () => {
		const newLanguage = currentLanguage === "en" ? "fa" : "en";
		setCurrentLanguage(newLanguage);
		i18n.changeLanguage(newLanguage);
		localStorage.setItem("language", newLanguage);
	};

	// useEffect(() => {
	// 	// Check if window object and localStorage are available before using
	// 	if (typeof window !== "undefined" && localStorage.getItem("language")) {
	// 		const storedLanguage = localStorage.getItem("language");
	// 		setCurrentLanguage(storedLanguage);
	// 		i18n.changeLanguage(storedLanguage);
	// 	}
	// }, [i18n]);

	return (
		<LanguageContext.Provider value={{ currentLanguage, toggleLanguage }}>
			{children}
		</LanguageContext.Provider>
	);
}
