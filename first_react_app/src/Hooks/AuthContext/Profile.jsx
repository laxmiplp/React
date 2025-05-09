import React, { useContext } from 'react'
import authContext from './AuthContext'
const Profile = () => {
    const { isLoggedIn } = useContext(authContext)
    return (
        <div>Profile

            <h2>{
                isLoggedIn ? 'User Profile Info' : 'Please Login'
            }</h2>

        </div>
    )
}

export default Profile