import React, { useContext } from 'react'
import authContext from './AuthContext'

const NavBar = () => {

    const { isLoggedIn, login, logout } = useContext(authContext)
    console.log(isLoggedIn)
    return (
        <nav>NavBar

            {
                isLoggedIn ? (<button onClick={logout}>Logout</button>) : (<button onClick={login}>Login</button>)
            }

        </nav>


    )
}

export default NavBar