import { Component } from "react"
class Toggle extends Component {
    constructor() {
        super()
        // First Method

        // this.state = {
        //     isToggle: true
        // }
        //Second Method
        this.state = {
            isToggle: 'Login'
        }

    }
    // First Method
    // handleToggle = () => {
    //     this.setState({ isToggle: !this.state.isToggle })
    // }
    //Second Method
    handleToggle = () => {
        this.setState({ isToggle: this.state.isToggle === 'Logout' ? 'Login' : 'Logout' })
    }
    render() {
        return (
            <>
                <h1>{this.props.heading}</h1>
                {/* First Method*/}
                {/* <button onClick={this.handleToggle}>{this.state.isToggle ? 'Login' : 'Logout'}
                </button> */}
                {/* Second Method*/}

                <button onClick={this.handleToggle}>{this.state.isToggle}
                </button>
            </>
        )
    }
}
export default Toggle