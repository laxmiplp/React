import Button from "../Button/Button"
import Table from "../Table/Table"
import { libraryData } from "../../../Data/libraryData"
const Library = () => {
    const columns = Object.keys(libraryData[0])
    console.log(columns)
    const libraryStyles = {
        color: 'white',
        backgroundColor: 'blue'
    }
    return (
        <>
            <h1 style={libraryStyles}>LIBRARY TABLE</h1>
            <Button type="button" value="Add Library" style={libraryStyles} />

            <Table columns={columns} dataSource={libraryData} />

        </>
    )
}
export default Library