import React, { useContext } from 'react'
import myContext from './UserContext'

const Dashboard = () => {
    const dashboardContext = useContext(myContext)
    return (
        <div>Dashboard

            <p>Profile:{dashboardContext.Name},{dashboardContext.Email}</p>
        </div>
    )
}

export default Dashboard