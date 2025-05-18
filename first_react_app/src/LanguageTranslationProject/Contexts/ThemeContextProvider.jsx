import React, { useContext, createContext, useEffect, useState } from 'react'

const themingContext = createContext()
export const ThemeContextProvider = ({ children }) => {
    const [theming, setTheming] = useState('light')
    useEffect(() => {
        document.documentElement.classList.toggle('dark', theming === 'dark');
    }, [theming])
    const toggleTheming = () => {
        setTheming((prev) => (prev === 'light' ? 'dark' : 'light'))

    }
    const styles = {
        height: '100vh',
        padding: '20px',
        background: theming === 'dark' ? '#000000' : '#ffffff',
        color: theming === 'dark' ? '#ffffff' : '#000000',
    };
    return (
        <div style={styles}>
            <themingContext.Provider value={{ theming, toggleTheming }}>
                {children}
            </themingContext.Provider>

        </div>
    )
}
export const useThemingContext = () => useContext(themingContext)
