import React from 'react'
import myContext from './UserContext'
import Dashboard from './Dashboard'
const App = () => {
    const user = { Name: 'Laxmi', Email: 'laxmi@gmail.com' }
    return (
        <div>App
            <myContext.Provider value={user}>
                <Dashboard />
            </myContext.Provider>
        </div>
    )
}

export default App