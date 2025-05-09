import React, { useEffect, useState } from "react";
import axios from "axios";
const UseEffectAxios = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                setUsers(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log("Error Fetching Data:", error);
                setLoading(false);
            });
    }, []);
    console.log(users);
    if (loading) {
        return <p>Loading.............</p>;
    }
    return (
        <>
            <h1>UseEffect Hook using Axios</h1>
            <ul>
                {users.map((item) => (
                    <li key={item.id}>
                        {item.name}-{item.email}
                    </li>
                ))}
            </ul>
        </>
    );
};

export default UseEffectAxios;
