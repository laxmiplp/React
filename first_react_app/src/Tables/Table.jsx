import React from "react";
import products from "../Data/Products";
import { Link } from "react-router-dom";
const Table = () => {
    return (
        <div>
            <h1>Table</h1>
            <table cellSpacing={0} border={2} cellPadding={5}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.length > 0 &&
                        products.map((product, index) => (
                            <tr key={product.id || index}>
                                <td>{product.id}</td>
                                <td><img src={product.image} /></td>
                                <td>{product.name}</td>
                                <td>{product.description}</td>
                                <td>{product.category}</td>
                                <td>{product.price}</td>
                                <td>
                                    <Link to={`/table/${product.id}`}>
                                        <button style={{ backgroundColor: "blue", color: "white" }}>
                                            View
                                        </button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
