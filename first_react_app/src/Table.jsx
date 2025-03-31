import { Component } from "react";
import { studentData } from "./Data/studentData";

class Table extends Component {
    render() {
        console.log(studentData)
        return (

            <>
                <h1>{this.props.heading}</h1>
                <table cellPadding={2} border={2} cellSpacing={0}>
                    <thead>
                        <tr>
                            {
                                Object.keys(studentData[0]).map((heading, index) => {
                                    return (
                                        <th key={studentData.id || index}>
                                            {heading}
                                        </th>
                                    )
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            studentData.map((row, index) => {
                                return (
                                    <tr key={row.id || index}>
                                        {
                                            Object.keys(studentData[0]).map((cell, i) => {
                                                return (
                                                    <td key={cell.id || i}>
                                                        {row[cell] ? row[cell] : "NA"}
                                                    </td>
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
}
export default Table