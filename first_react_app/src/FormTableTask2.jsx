import { Component } from "react";
import { formData } from "./Data/formData";

class FormTableTask2 extends Component {
    constructor() {
        super()
        this.state = {
            taskName: '',
            taskDescription: '',
            taskEndDate: '',
            taskFormSubmitted: null
        }
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const { taskName, taskDescription, taskEndDate } = this.state
        this.setState({ taskFormSubmitted: { taskName, taskDescription, taskEndDate } })
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    render() {
        console.log(this.state.taskFormSubmitted)

        return (
            <>
                <h1>Displaying Form2 Data in Table</h1>
                <form className="row g-3" method="post" onSubmit={this.handleSubmit}>
                    <div className="col-md-6">
                        <label htmlFor="taskName" className="form-label">Task Name</label>
                        <input type="text" className="form-control" id="taskName" name="taskName" onChange={this.handleChange} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="taskDescription" className="form-label">Task Description</label>
                        <input type="text" className="form-control" id="taskDescription" name="taskDescription" onChange={this.handleChange} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="taskEndDate" className="form-label">Task End Date</label>
                        <input type="number" className="form-control" id="taskEndDate" name="taskEndDate" onChange={this.handleChange} />
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Submit Form Data</button>
                    </div>
                </form>
                <table className="table">
                    <thead>

                        {
                            formData.map((heading, index) => {
                                return (
                                    <tr key={heading.id || index}>
                                        <th scope="col">
                                            {heading.taskName}
                                        </th>
                                        <th scope="col">
                                            {heading.taskdec}
                                        </th>
                                        <th scope="col">
                                            {heading.taskdate}
                                        </th>
                                    </tr>
                                )
                            })
                        }
                    </thead>

                    <tbody>
                        {/* <tr>
                            <td>{this.state.taskFormSubmitted && this.state.taskFormSubmitted.taskName}</td>
                            <td>{this.state.taskFormSubmitted && this.state.taskFormSubmitted.taskDescription}</td>
                            <td>{this.state.taskFormSubmitted && this.state.taskFormSubmitted.taskEndDate}</td>
                        </tr> */}

                        {this.state.taskFormSubmitted && (
                            <tr>
                                <td>{this.state.taskFormSubmitted.taskName}</td>
                                <td>{this.state.taskFormSubmitted.taskDescription}</td>
                                <td>{this.state.taskFormSubmitted.taskEndDate}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </>
        )
    }
}
export default FormTableTask2