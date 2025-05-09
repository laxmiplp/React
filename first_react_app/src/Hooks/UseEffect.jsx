import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => {
                setUsers(data)
                setLoading(false)
            })
            .catch((error) => {
                console.log("Error Fetching Data:", error)
                setLoading(false)
            })
    }, [])
    console.log(users)
    if (loading) {
        return <p>Loading.............</p>
    }

    return (
        <>
            <h1>UseEffect HOOK</h1>

            <ul>
                {users.map((item) => <li key={item.id}>{item.name}-{item.email}</li>)}

            </ul>


        </>
    )
}

export default UseEffect