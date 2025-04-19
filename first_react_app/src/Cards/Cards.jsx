import React from "react";
import products from "../Data/Products";
import { Link } from "react-router-dom";
import "./cards.css";
const Cards = () => {
    return (
        <>
            <h1> Cards</h1>
            <div className="card-container">
                {products.length > 0 &&
                    products.map((item, index) => {
                        return (
                            <div className="card" key={item.id || index}>
                                <div>
                                    <img src={item.image} />
                                </div>
                                <div>
                                    <p>{item.id}</p>
                                    <p>{item.name}</p>
                                    <p>{item.description}</p>
                                    <p>{item.category}</p>
                                    <em>{item.price}</em>
                                </div>
                                <div className="card-footer">
                                    <Link to={`/cards/${item.id}`}>
                                        <button>View</button>
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </>
    );
};

export default Cards;
