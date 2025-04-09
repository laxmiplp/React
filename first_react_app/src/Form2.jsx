import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
class Form2 extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            email: '',
            password: '',
            inputState: '',
            age: 0,
            submittedFormData: null
        }
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const { username, email, password, inputState, age } = this.state
        this.setState({ submittedFormData: { username, email, password, inputState, age } })

    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })

    }
    render() {
        console.log(this.state.submittedFormData)

        return (
            <>
                <h1>Form2</h1>
                <form className="row g-3" method="post" onSubmit={this.handleSubmit}>
                    <div className="col-md-6">
                        <label htmlFor="username" className="form-label">Name</label>
                        <input type="text" className="form-control" id="username" name="username" onChange={this.handleChange} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" name="email" onChange={this.handleChange} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" name="password" onChange={this.handleChange} />
                    </div>

                    <div className="col-md-4">
                        <label htmlFor="inputState" className="form-label" >State</label>
                        <select id="inputState" className="form-select" name="inputState" onChange={this.handleChange}>
                            <option defaultValue={''} >Choose...</option>
                            <option defaultValue={'Telangana'}>Telangana</option>
                            <option defaultValue={'Karnataka'}>Karnataka</option>
                            <option defaultValue={'Tamilnadu'}>Tamilnadu</option>

                        </select>
                    </div>
                    <div className="col-md-2">
                        <label htmlFor="age" className="form-label">Age</label>
                        <input type="text" className="form-control" id="age" name="age" onChange={this.handleChange} />
                    </div>

                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Sign in</button>
                    </div>
                </form>
                <h1>{this.state.submittedFormData && this.state.submittedFormData.username}</h1>
                <h1>{this.state.submittedFormData && this.state.submittedFormData.email}</h1>
                <h1>{this.state.submittedFormData && this.state.submittedFormData.password}</h1>
                <h1>{this.state.submittedFormData && this.state.submittedFormData.inputState}</h1>
                <h1>{this.state.submittedFormData && this.state.submittedFormData.age}</h1>


            </>
        )
    }
}
export default Form2

