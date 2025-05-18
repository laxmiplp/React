import React from 'react'
import { useRef, useState } from 'react';
const StopWatch = () => {
    const [timer, setTimer] = useState(0);
    const intervalRef = useRef(null);
    const startTimer = () => {
        if (intervalRef.current === null) {
            intervalRef.current = setInterval(() => {
                setTimer((prevTime) => prevTime + 1)
            }, 1000)
        }
    }
    const stopTimer = () => {
        if (intervalRef.current !== null) {
            clearInterval(intervalRef.current)
            intervalRef.current = null
        }
    }
    const resetTimer = () => {
        stopTimer()
        setTimer(0)
    }

    return (
        <>
            <div className='flex flex-col items-center gap-4 text-xl mt-10'>
                <div className='text-white-500 text-xl rounded-circle p-5 border border-white bg-blue-500'>{timer} s</div>
                <div className='flex gap-4'>
                    <button onClick={startTimer} className='px-4 py-5 bg-green-500 text-white rounded'>Start</button>
                    <button onClick={resetTimer} className='px-4 py-5 bg-red-500 text-white rounded'>Reset</button>
                    <button onClick={stopTimer} className='px-4 py-5 bg-yellow-500 text-white rounded'>Stop</button>
                </div>
            </div>
        </>
    )
}

export default StopWatch