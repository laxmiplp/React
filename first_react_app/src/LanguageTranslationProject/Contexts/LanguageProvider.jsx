import React, { useContext, createContext, useState } from "react";
import { Translations } from '../Translations/Translations'
const languageContext = createContext();
export const LanguageProvider = ({ children }) => {
    const [lang, setLang] = useState("en");
    const t = (key) => Translations[lang][key] || key;
    return (
        <>
            <h1>{t("greeting")}</h1>
            <languageContext.Provider value={{ lang, setLang, t }}>
                {children}
            </languageContext.Provider>
        </>
    );
};
export const useLanguage = () => useContext(languageContext);
