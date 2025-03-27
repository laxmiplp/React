import Button from "../Button/Button"
import Table from "../Table/Table"
import { staffData } from "../../../Data/staffData"
const Staff = () => {
    const columns = Object.keys(staffData[0])
    console.log(columns)
    const staffStyles = {
        color: 'white',
        backgroundColor: 'red'
    }
    return (
        <>
            <h1 style={staffStyles}>STAFF TABLE</h1>
            <Button type="button" value="Add Staff" style={staffStyles} />
            <Table columns={columns} dataSource={staffData} />

        </>
    )
}
export default Staff