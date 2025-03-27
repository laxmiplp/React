import Button from "../Button/Button"
import Table from "../Table/Table"
import { studentData } from "../../../Data/studentData"
const Students = () => {
    const columns = Object.keys(studentData[0])
    console.log(columns)
    const studentStyles = {
        color: 'black',
        backgroundColor: 'yellow'
    }
    return (
        <>
            <h1 style={studentStyles}>STUDENTS TABLE</h1>
            <Button type="button" value="Add Student" style={studentStyles} />
            <Table columns={columns} dataSource={studentData} />
        </>
    )
}
export default Students