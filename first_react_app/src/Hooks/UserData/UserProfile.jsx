import { useContext } from "react";
import userContextApp from "./UserDataContext";
import React from 'react'
const UserProfile = () => {
    const { user } = useContext(userContextApp)

    return (
        <div>User Profile
            <p>Welcome {user.name}</p>
            <p>{user.role}</p>
            <p>{user.location}</p>

        </div>
    )
}

export default UserProfile