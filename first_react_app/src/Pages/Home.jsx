import React, { useEffect } from "react";
import Banner from "../Components/Banner";
const Home = () => {
    const [foodItems, setFoodItems] = React.useState([]);
    const getFoodItems = async () => {
        const response = await fetch("http://localhost:5000/");
        const data = await response.json();
        setFoodItems(data);
    };
    console.log(getFoodItems());

    console.log(foodItems);
    useEffect(() => {
        getFoodItems();
    }, []);
    return (
        <>
            <h1>Welcome to Home Page</h1>
            <Banner />

            <div>
                {foodItems.length > 0 &&
                    foodItems.map((item, index) => {
                        return (
                            <div key={item.id || index}>
                                <div>
                                    <img src={item.image} />
                                </div>
                                <div>
                                    <p>{item.id}</p>
                                    <h1>{item.name}</h1>
                                    <p>{item.description}</p>
                                    <p>{item.price}</p>
                                    <p>{item.category}</p>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </>
    );
};

export default Home;
