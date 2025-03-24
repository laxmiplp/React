import { inputData } from "./Data/inputData"

const FormData = () => {
    return (
        <>
            <form>
                <div className="row row-cols-1 row-cols-md-2 g-5">
                    <div className="card">
                        <h1>Login Form</h1>
                        {inputData.LoginForm.fields.map((data, index) => {
                            return (

                                <div className="mb-3" key={data.id || index}>
                                    <label htmlFor={data.id} className="form-label">{inputData.LoginForm.labels[index]}</label>
                                    <input type={data.type} className="form-control" id={data.id} name={data.name} placeholder={data.placeholder} />
                                </div>
                            )
                        })}
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                    <div className="card">
                        <h1>Signup Form</h1>
                        {inputData.SignupForm.fields.map((data1, i) => {
                            return (
                                <div className="mb-3" key={data1.id || i}>
                                    <label htmlFor={data1.id} className="form-label">{inputData.SignupForm.labels[i]}</label>
                                    <input type={data1.type} className="form-control" id={data1.id} name={data1.name} placeholder={data1.placeholder} />
                                </div>

                            )
                        })}
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </form>
        </>
    )
}
export default FormData