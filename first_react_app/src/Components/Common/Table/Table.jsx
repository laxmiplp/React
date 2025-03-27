const Table = (props) => {
    console.log('th', props?.columns)
    console.log('td', props?.dataSource)
    return (
        <>
            <table border={1} cellSpacing={0}>
                <thead>
                    <tr>
                        {
                            props?.columns?.map((heading, index) => {
                                return (
                                    <>
                                        <th key={heading.id || index}>{heading}</th>
                                    </>
                                )
                            }

                            )
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        props?.dataSource?.map((tableData, index) => {
                            return (
                                <tr key={tableData.id || index}>{
                                    props?.columns?.map((column, index) => {
                                        return (
                                            <td key={column.id || index}>{tableData[column]}</td>
                                        )
                                    })

                                }
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        </>
    )
}
export default Table