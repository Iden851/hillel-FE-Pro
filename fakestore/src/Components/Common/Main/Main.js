import React, { useState, useEffect } from "react";
import Spinner from "../Spinner/Spinner";
import "./Main.css";

const Main = () => {
    const initialCard = {
        error: null,
        isLoaded: false,
        items: [],
    };
    const [card, setCard] = useState(initialCard);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/")
            .then((response) => response.json())
            .then(
                (data) => {
                    setCard({ ...card, isLoaded: true, items: data });
                },
                (error) => {
                    setCard({ ...card, isLoaded: true, error });
                }
            );
        return () => {
            console.log("This will be logged on unmount");
        };
    }, [card]);
    const { error, isLoaded, items } = card;
    if (error) {
        return <p> Error {error.message} </p>;
    } else if (!isLoaded) {
        return (
            <div className="Main-site spinner">
                <Spinner />
            </div>
        );
    } else {
        return (
            <div className="Main-site">
                <div className="section">
                    {items.map((item) => (
                        <div className="itemWrapper" key={item.id}>
                            <img src={item.image} alt="" />
                            <p className="itemName" title="name">
                                {item.title}
                            </p>
                            <p className="itemPrice" title="price">
                                {`€ ${item.price}`}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
};

export default Main;
