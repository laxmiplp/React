import React, { useState } from 'react'
import ThemeContext from './ThemeContext'
import ThemedContext from './ThemedContext'
const ThemedApp = () => {
    const [theme, setTheme] = useState('light')
    return (
        <div>
            <h1>Themed Application</h1>

            <ThemeContext.Provider value={{ theme, setTheme }}>
                <ThemedContext />
            </ThemeContext.Provider>
        </div>
    )
}

export default ThemedApp