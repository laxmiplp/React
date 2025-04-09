import { Component } from "react";

class TrackTextInInput extends Component {
    constructor() {
        super()
        this.state = {
            text: ''
        }

    }

    handleOnChange = (e) => {
        this.setState({ text: e.target.value })

    }
    render() {
        return (
            <>
                <h1>Track Text In Input</h1>
                <div style={{ width: '100px', height: '100px', backgroundColor: `${this.state.text === 'male' ? 'yellow' : this.state.text === 'female' ? 'green' : 'red'}` }}></div>
                <input type="text" value={this.state.value} placeholder="text" onChange={this.handleOnChange} />
                <select onChange={this.handleOnChange}>
                    <option value={'Select'}>select</option>

                    <option value={'male'}>male</option>
                    <option value={'female'}>female</option>

                </select>
                <h2>{this.state.text}</h2>
            </>
        )
    }
}
export default TrackTextInInput