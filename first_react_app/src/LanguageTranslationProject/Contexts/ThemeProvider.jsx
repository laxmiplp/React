import React, { useContext, createContext, useState } from "react";
const themeContext = createContext();
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("dark");
    const toggleTheme = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    };

    return (
        <>
            <themeContext.Provider value={{ theme, toggleTheme }}>
                {children}
            </themeContext.Provider>
        </>
    );
};
export const useTheme = () => useContext(themeContext);
