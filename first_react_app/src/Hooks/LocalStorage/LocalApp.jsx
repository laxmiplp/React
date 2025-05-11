import React, { useEffect, useState } from 'react'
import localStorageContext from './LocalContext'
import LocalToggle from './LocalToggle'
const LocalApp = () => {
    const [theme, setTheme] = useState('dark')
    useEffect(() => {
        const stored = localStorage.getItem(theme)
        if (stored) {
            setTheme(stored)

        }
    }, [])
    useEffect(() => {
        localStorage.setItem('theme', theme)
    }, [theme])

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
    }
    return (
        <div style={{ background: theme === 'dark' ? '#000' : '#fff', color: theme === 'dark' ? '#fff' : '#000', width: '100%', height: '100vh' }}>
            <h1>Local Storage Autentication</h1>
            <localStorageContext.Provider value={{ theme, toggleTheme }}>
                <LocalToggle />
            </localStorageContext.Provider>
        </div>
    )
}

export default LocalApp