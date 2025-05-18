import React from "react";
import { useDictonary } from "../Contexts/LangaugeContextProvider";
import { useThemingContext } from "../Contexts/ThemeContextProvider";

const Header = () => {
    const { dict, setDict, translate } = useDictonary();
    const { theming, toggleTheming } = useThemingContext();
    const styles = {

        color: theming === 'light' ? '#ffffff' : '#000000',

        background: theming === 'light' ? '#000000' : '#ffffff',

    };
    return (
        <header className="w-full py-4 px-6 flex justify-between items-center bg-gray-100 dark:bg-gray-800 shadow-md" style={styles}>
            <h1 className="text-xl font-semibold  dark:text-white">{translate("greeting")}</h1>
            <div className="flex items-center space-x-4">
                <div>
                    <select value={dict} onChange={(e) => setDict(e.target.value)} style={{
                        background: theming === "light" ? "#fff" : "#000",
                        color: theming === "light" ? "#000" : "#fff",
                        border: theming === "light" ? "#000" : "#fff",
                        borderWidth: "2px",
                        borderStyle: "solid",
                        borderRadius: '5px',
                        padding: '10px 5px'
                    }}>
                        <option value={"en"}>English</option>
                        <option value={"fre"}>French</option>
                        <option value={"es"}>Spanish</option>
                    </select>
                </div>
                <div>
                    <button onClick={toggleTheming} style={{
                        background: theming === "light" ? "#fff" : "#000",
                        color: theming === "light" ? "#000" : "#fff",
                        border: theming === "light" ? "#000" : "#fff",
                        borderWidth: "2px",
                        borderStyle: "solid",
                    }}>
                        {translate("switchTheme")} ({theming})
                    </button>
                </div>
            </div>

        </header>
    );
};

export default Header;
