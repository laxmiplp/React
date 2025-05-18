import React from "react";
import { ThemeContextProvider } from "./Contexts/ThemeContextProvider";
import { LangaugeContextProvider } from "./Contexts/LangaugeContextProvider";
import Header from "./Components/Header";
import { MainContent } from "./Components/MainContent";

const ProjectApp = () => {
    return (
        <div className="main text-center">
            <ThemeContextProvider>
                <LangaugeContextProvider>
                    <div className="min-h-screen flex flex-col">
                        <Header />
                        <MainContent />
                    </div>
                </LangaugeContextProvider>
            </ThemeContextProvider>
        </div>
    );
};

export default ProjectApp;
