// const Third = (props) => {
//     return (
//         <>
//             <h1>{props.greet}Third Component, {props.studentName}</h1>
//         </>
//     )
// }
// export default Third
const Third = (props) => {
    // console.log(props.props.props.greet)
    // console.log(props.props.props.studentName)
    const { props: { props: { greet, studentName } } } = props
    console.log("Line 13:", greet, studentName)
    return (
        <>
            {/* <h1>{props.props.props.greet}Third Component, {props.props.props.studentName}</h1> */}
            <h1>{greet}Third Component, {studentName}</h1>

        </>
    )
}
export default Third