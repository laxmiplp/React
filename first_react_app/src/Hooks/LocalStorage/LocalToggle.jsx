import { useContext } from "react";
import localStorageContext from './LocalContext'

import React from 'react'

const LocalToggle = () => {
    const { theme, toggleTheme } = useContext(localStorageContext)

    return (
        <div>
            <button onClick={toggleTheme} style={{ color: theme === 'dark' ? '#000' : '#fff', background: theme === 'dark' ? '#fff' : '#000' }}>
                click to change {theme === 'dark' ? 'light' : 'dark'} mode
            </button>

        </div>
    )
}

export default LocalToggle