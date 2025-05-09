import React, { useState } from 'react'
import themeContext from '../ThemeContext'
import ThemeDashboard from './ThemeDashboard'
const ThemeApp = () => {
    const [theme, setTheme] = useState('light')
    const toggleTheme = () => {
        setTheme((prev) => prev === 'light' ? 'dark' : 'light')
    }

    return (
        <div>ThemeApp

            <themeContext.Provider value={{ theme, toggleTheme }}>
                <ThemeDashboard />
            </themeContext.Provider>
        </div>
    )
}

export default ThemeApp