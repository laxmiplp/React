import React from "react";
import { LanguageProvider } from "./Contexts/LanguageProvider";
import { ThemeProvider } from "./Contexts/ThemeProvider";
import Home from "../LanguageTranslationProject/Components/Home";
const MainApp = () => {
    return (
        <>
            <LanguageProvider>
                <ThemeProvider>
                    <Home />
                </ThemeProvider>
            </LanguageProvider>
        </>
    );
};

export default MainApp;
