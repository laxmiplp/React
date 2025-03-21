import Staff from "./Staff"
export function Greet() {
    return (
        <>
            <table border={2}>
                <thead>
                    <tr><th >S.No</th>

                        <th >Name</th>
                        <th >Exp</th>
                    </tr>

                </thead>
                <Staff />
            </table>
        </>
    )
}
export default Greet