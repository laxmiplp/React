import Second from "./Second"

const First = (props) => {
    return (
        <>
            {/* <h1>{props.greet}First Component, {props.studentName}</h1> */}
            <h1>This is First Component</h1>

            <Second props={props} />
        </>
    )
}
export default First