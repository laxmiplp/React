import React, { useEffect, useState } from 'react'
import AuthUseContext from './AuthUseContext'
import AuthContext from './AuthContext'
const AuthProvider = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    useEffect(() => {
        const saved = localStorage.getItem('loggedIn') === 'true'
        setIsLoggedIn(saved)
    }, [])
    const login = () => {
        setIsLoggedIn(true)
        localStorage.setItem('loggedIn', 'true')
    }
    const logout = () => {
        setIsLoggedIn(false)
        localStorage.setItem('loggedIn', 'false')

    }
    return (
        <div>
            <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
                <AuthUseContext />
            </AuthContext.Provider>
        </div>
    )
}

export default AuthProvider