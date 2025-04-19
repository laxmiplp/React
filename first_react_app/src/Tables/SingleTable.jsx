import React from "react";
import { useParams } from "react-router-dom";
import products from "../Data/Products";
import { useNavigate } from "react-router-dom";
import "../Cards/cards.css"

const SingleTable = () => {
    const id = useParams().id;
    const foundTableData = products.find(
        (productSingleItem) => productSingleItem.tableId == id
    );
    const navigation = useNavigate();
    const handleBackNavigation = () => {
        // navigation("/table");
        // navigation(`/cards/${id}`);
        navigation(-1);


    };
    return (
        <div>
            <h1>Single Card && Single Table</h1>
            <button
                style={{ backgroundColor: "red", color: "white" }}
                onClick={handleBackNavigation}
            >
                Back
            </button>
            <div className="card-container">
                <div className="card">
                    <div>
                        <img src={foundTableData.image} />
                    </div>
                    <div>
                        <p>{foundTableData.id}</p>
                        <p>{foundTableData.name}</p>
                        <p>{foundTableData.description}</p>
                        <p>{foundTableData.category}</p>
                        <em>{foundTableData.price}</em>
                    </div>
                </div>
            </div>{" "}
            <table cellSpacing={0} border={2} cellPadding={5}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Price</th>
                        {/* <th>Actions</th> */}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{foundTableData.id}</td>
                        <td>
                            <img src={foundTableData.image} />
                        </td>
                        <td>{foundTableData.name}</td>
                        <td>{foundTableData.description}</td>
                        <td>{foundTableData.category}</td>
                        <td>{foundTableData.price}</td>
                        {/* <td>
                            <button style={{ backgroundColor: "red", color: "white" }} onClick={handleBackNavigation}>
                                Back
                            </button>
                        </td> */}
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default SingleTable;
