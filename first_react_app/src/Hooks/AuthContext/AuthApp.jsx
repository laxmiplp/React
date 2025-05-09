import React, { useState } from 'react'
import NavBar from './NavBar'
import authContext from './AuthContext'
import Profile from './Profile'
const AuthApp = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const login = () => {
        setIsLoggedIn(true)
    }
    const logout = () => {
        setIsLoggedIn(false)
    }
    return (
        <div>AuthApp

            <authContext.Provider value={{ isLoggedIn, login, logout }}>
                <NavBar />
                <Profile />
            </authContext.Provider>
        </div>
    )
}

export default AuthApp