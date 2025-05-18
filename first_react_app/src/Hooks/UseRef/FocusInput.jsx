import React, { useEffect, useRef } from 'react'

const FocusInput = () => {
    const inputFocus = useRef(null)
    useEffect(() => {
        inputFocus.current.style.border = '2px solid red'
        inputFocus.current.focus()

        // e.preventDefault()
    }, [])
    return (
        <div>FocusInput

            <input ref={inputFocus} type='text' />
        </div>
    )
}

export default FocusInput