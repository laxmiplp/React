import { empData } from "./Data/empData"
const Cards = () => {
    return (
        <>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {empData.map((e, i) => {
                    return (
                        <div className="col" key={e.id || i}>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Employee Data</h5>
                                    <p className="card-text"><b>ID:</b>{e.id}</p>
                                    <p className="card-text"><b>Employee Name:</b>{e.empName}</p>
                                    <p className="card-text"><b>Employee Age:</b>{e.empAge}</p>
                                    <p className="card-text"><b>Department:</b> {e.dep}</p>
                                    <p className="card-text"><b>Experience:</b> {e.exp}</p>
                                    <p className="card-text"><b>Salary:</b> {e.sal}</p>
                                    <p className="card-text"><b>Attendance:</b> {e.isPresent ? 'Present' : 'Absent'}</p>
                                </div>
                                <div className="card-footer border-top-0 bg-transparent">
                                    <button className='btn btn-primary me-4'>Edit</button>
                                    <button className='btn btn-danger'>Delete</button>
                                </div>
                            </div>
                        </div>
                    )
                })}


            </div>
        </>
    )
}
export default Cards