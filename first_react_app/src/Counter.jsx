import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState(['Jhon', 'Ricky', 'Rosy', 'sharku', 'Ram'])
    const [colors, setColors] = useState(['red', 'blue', 'green', 'yellow', 'orange'])
    const [forms, setForms] = useState({ name: '', email: '', password: '' })

    const handleIncrement = () => {
        setCount(count + 1)
    }
    const handleReset = () => {
        setCount(0)
        setName(0)

    }
    const handleDecrement = () => {
        setCount(count - 1)

    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(forms)

    }
    const handleOnChange = () => {
        setForms({ ...forms, [e.target.name]: e.target.value })
        forms.push(gender)

    }
    return (
        <>

            <h1>Counter App</h1>
            <h2 style={{ color: colors[count] }} >Count:{count} , Name:{name[count]}

            </h2>

            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleDecrement}>Decrement</button>
            <form onSubmit={handleSubmit}>
                <input type="text" id='name' onChange={handleOnChange} />
                <input type="email" id='email' onChange={handleOnChange} />
                <input type="password" id='password' onChange={handleOnChange} />
                <button type="submit" >Submit</button>

            </form>

        </>
    )
}
export default Counter