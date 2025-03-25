// const Second = ({ greet, studentName }) => {
//     return (
//         <>
//             <h1>{greet} Second Component,{studentName}</h1>
//         </>
//     )
// }
// export default Second
import Third from "./Third"
const Second = (props) => {
    return (
        <>
            <h1>This is Second Component</h1>

            <Third props={props} />
        </>
    )
}
export default Second