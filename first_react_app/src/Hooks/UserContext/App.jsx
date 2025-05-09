import React from 'react'
import UserContext from './UserContext'
import Profile from './Profile'
const App = () => {
    const user = { name: 'Laxmi', role: 'Admin' }
    return (
        <UserContext.Provider value={user}>
            <h1>Welcome to the Application</h1>
            <Profile />
        </UserContext.Provider >
    )
}

export default App