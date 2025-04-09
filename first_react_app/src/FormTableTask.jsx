import { Component } from "react";

class FormTableTask extends Component {
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
        console.log(this.state.taskFormSubmitted)
    }
    render() {
        return (
            <>
                <h1>Displaying Form Data in Table</h1>
                <form className="row g-3" method="post" onSubmit={this.handleSubmit}>
                    <div className="col-md-6">
                        <label htmlFor="taskName" className="form-label">Task Name</label>
                        <input type="text" className="form-control" id="taskName" name="taskName" onChange={(e) => this.setState({ taskName: e.target.value })} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="taskDescription" className="form-label">Task Description</label>
                        <input type="text" className="form-control" id="taskDescription" name="taskDescription" onChange={(e) => this.setState({ taskDescription: e.target.value })} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="taskEndDate" className="form-label">Task End Date</label>
                        <input type="number" className="form-control" id="taskEndDate" name="taskEndDate" onChange={(e) => this.setState({ taskEndDate: e.target.value })} />
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Submit Form Data</button>
                    </div>
                </form>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Task Name</th>
                            <th scope="col">Task Description</th>
                            <th scope="col">Task End Date</th></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{this.state.taskFormSubmitted && this.state.taskFormSubmitted.taskName}</td>
                            <td>{this.state.taskFormSubmitted && this.state.taskFormSubmitted.taskDescription}</td>
                            <td>{this.state.taskFormSubmitted && this.state.taskFormSubmitted.taskEndDate}</td>
                        </tr>
                    </tbody>
                </table>
            </>
        )
    }
}
export default FormTableTask