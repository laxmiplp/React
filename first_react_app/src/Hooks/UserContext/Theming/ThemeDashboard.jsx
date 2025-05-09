import React, { useContext } from 'react'
import themeContext from '../ThemeContext'

const ThemeDashboard = () => {

    const { theme, toggleTheme } = useContext(themeContext)
    return (
        <div style={{ background: theme === 'light' ? '#fff' : '#000', color: theme === 'light' ? '#000' : '#fff', height: '100vh' }}>ThemeDashboard

            <button onClick={toggleTheme}>Click here for Theme Change</button>
        </div>
    )
}

export default ThemeDashboard