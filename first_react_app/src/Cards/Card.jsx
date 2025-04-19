import React from 'react'
import { useParams } from 'react-router-dom'
import products from '../Data/Products'
const Card = () => {
    const id = useParams().id
    const foundData = products.find((singlecard) => singlecard.id == id)
    return (
        <>
            <div>
                <h1>Single Card</h1>

                <div className="card-container">
                    <div className="card">
                        <div>
                            <img src={foundData.image} />
                        </div>
                        <div>
                            <p>{foundData.id}</p>
                            <p>{foundData.name}</p>
                            <p>{foundData.description}</p>
                            <p>{foundData.category}</p>
                            <em>{foundData.price}</em>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Card