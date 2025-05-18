import React from "react";
// import { useLanguage } from "../contexts/useLanguage";
// import { useTheme } from "../contexts/useTheme";
import { useLanguage } from "../Contexts/LanguageProvider";
import { useTheme } from "../Contexts/ThemeProvider";
const Home = () => {
    const { lang, setLang, t } = useLanguage();
    const { theme, toggleTheme } = useTheme();
    const toggleLang = () => {
        setLang((prev) => (prev === "en" ? "fre" : prev === "fre" ? "es" : "en"));
    };

    const styles = {
        height: "100vh",
        padding: "20px",
        width: "100%",
        background: theme === "dark" ? "#000" : "#fff",
        color: theme === "dark" ? "#fff" : "#000",
    };
    return (
        <>
            <div style={styles}>
                <h1>{t("greeting")}</h1>
                <div style={{ display: 'flex', gap: '20px' }}>
                    <div>
                        <button
                            onClick={toggleTheme}
                            style={{
                                background: theme === "light" ? "#fff" : "#000",
                                color: theme === "light" ? "#000" : "#fff",
                                border: theme === "light" ? "#000" : "#fff",
                                borderWidth: "2px",
                                borderStyle: "solid",
                            }}
                        >
                            {t("switchTheme")} ({theme})
                        </button>
                    </div>
                    <div>
                        <button
                            onClick={toggleLang}
                            style={{
                                background: theme === "light" ? "#fff" : "#000",
                                color: theme === "light" ? "#000" : "#fff",
                                border: theme === "light" ? "#000" : "#fff",
                                borderWidth: "2px",
                                borderStyle: "solid",
                                marginLeft: "20px",
                            }}
                        >
                            {t("switchLanguage")} ({lang})
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
