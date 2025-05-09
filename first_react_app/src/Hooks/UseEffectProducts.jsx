import axios from 'axios'
import React, { useEffect, useState } from 'react'
const UseEffectProducts = () => {
    const [data, setData] = useState([])
    const [count, setCount] = useState(1)
    function fetchProducts() {
        return fetch('https://fakestoreapi.com/products/')
            .then(res => res.json())
            .then(data => setData(data))
    }
    useEffect(() => {
        fetchProducts()
    }, [])
    return (
        <>
            <h1>UseEffect Products</h1>
            { }

        </>
    )
}

export default UseEffectProducts