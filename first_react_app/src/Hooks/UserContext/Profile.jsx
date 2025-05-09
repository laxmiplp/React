import React, { useContext } from 'react'
import userContext from './UserContext'

const Profile = () => {
    const user = useContext(userContext)
    return (
        <div>Profile

            <div>
                <p>Name:{user.name}</p>
                <p>Role:{user.role}</p>
            </div>
        </div>
    )
}

export default Profile