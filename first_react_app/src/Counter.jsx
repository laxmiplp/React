import { Component } from "react"
class Counter extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }

    }
    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 })
    }
    handleDecrement = () => {
        this.setState({ count: this.state.count - 1 })
    }
    handleReset = () => {
        this.setState({ count: 0 })
    }
    render() {
        return (
            <>
                <h1>{this.props.heading}</h1>
                <h3>{this.state.count}</h3>
                <div className="d-flex justify-content-between">
                    <button onClick={this.handleIncrement} disabled={this.state.count >= 10}>+</button>
                    <button onClick={this.handleReset} disabled={this.state.count == 0}>Reset</button>
                    <button onClick={this.handleDecrement} disabled={this.state.count <= 0}>-</button>
                </div>
            </>
        )
    }
}
export default Counter
