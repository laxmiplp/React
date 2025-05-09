import React, { useCallback, useState } from 'react'
const arr = []

const UseCallBack = () => {
    const items = Array.from({ length: 1000 }, (_, index) => {
        return (<>
            <button>Click me</button>
        </>)
    })
    const [count, setCount] = useState(0)
    const handleClick = useCallback(() => {
        console.log('calling.....!!!!!!!!')
        setCount(count + 1)
    }, [])
    // useCallback()
    arr.push(handleClick)
    console.log(arr)
    console.log(arr[0] == arr[1])
    return (
        <div>UseCallBack

            <h1>Count: {count}</h1>
            <button onClick={handleClick}>Click</button>
        </div>
    )
}

export default UseCallBack