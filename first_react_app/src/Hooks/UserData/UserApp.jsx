import React, { useState } from 'react'
import UserProfile from './UserProfile'
import userContextApp from './UserDataContext'
const UserApp = () => {
    const [user] = useState({ name: 'Prasanna', role: 'Frontend Engineer', location: 'Hyderabad' })
    return (
        <div>UserApp

            <userContextApp.Provider value={{ user }}>
                <UserProfile />
            </userContextApp.Provider>
        </div>
    )
}

export default UserApp