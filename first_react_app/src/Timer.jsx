import { Component } from "react";
//Example 1
class Timer extends Component {
    constructor() {
        super()
        this.state = {
            timer: 0
        }
        console.log('Consturctor:', this.state.timer)

    }
    componentDidMount() {
        setInterval(() => {
            console.log('Mounting:', this.state.timer)

            this.intervalId = this.setState({ timer: this.state.timer + 1 })
        }, 1000)
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.state.timer === 20) {
            clearInterval(intervalId)
        }
    }
    render() {
        console.log('Render:', this.state.timer)

        return (
            <>
                <h1>Timer Application</h1>
                <h2>Timer: {this.state.timer}</h2>
            </>
        )
    }
}

//Example 2

// class Timer extends Component {
//     constructor() {
//         super()
//         this.state = {
//             timer: 0
//         }
//     }
//     handleStart = () => {
//         this.setState({ timer: 0 })
//     }
//     componentDidMount() {
//         setInterval(() => {
//             this.setState({ timer: this.state.timer + 1 })
//         }, 1000)
//     }
//     render() {
//         return (
//             <>
//                 <h1>Timer Application</h1>
//                 <h2>Timer: {this.state.timer}</h2>
//                 <button onClick={handleStart}>Timer</button>
//             </>
//         )
//     }
// }
export default Timer