import { Component } from "react"
class Toggle extends Component {
    constructor() {
        super()
        this.state = {
            isToggle: true
        }
    }
    handleToggle = () => {
        this.setState({ isToggle: !this.state.isToggle })
    }
    render() {
        return (
            <>
                <h1>{this.props.heading}</h1>
                <button onClick={this.handleToggle}>{this.state.isToggle ? 'Login' : 'Logout'}
                </button>
            </>
        )
    }
}
export default Toggle