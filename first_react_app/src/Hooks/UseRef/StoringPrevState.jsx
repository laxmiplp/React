import React, { useEffect, useRef, useState } from 'react'

const StoringPrevState = () => {
    const [count, setCount] = useState(0)
    const prevRef = useRef()
    useEffect(() => {
        prevRef.current = count
    }, [count])
    return (
        <div>StoringPrevState
            <p>Previous Value:{prevRef.current}</p>
            <p> Count Value:{count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}

export default StoringPrevState