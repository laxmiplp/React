import { createContext, useContext, useState } from "react"
import { Translations } from "../Translations/Translations"
const dictonaryContext = createContext()
export const LangaugeContextProvider = ({ children }) => {
    const [dict, setDict] = useState('en')
    const translate = (key) => Translations[dict][key] || key
    return (
        <>
            <dictonaryContext.Provider value={{ dict, setDict, translate }}>
                {children}
            </dictonaryContext.Provider>
        </>
    )
}
export const useDictonary = () => useContext(dictonaryContext)