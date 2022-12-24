import "../main/Main.css";
import React, { Component } from "react";
import Spinner from "../spinner/Spinner";

class RightSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
        };
    }

    componentDidMount() {
        fetch("https://fakestoreapi.com/products/")
            .then((response) => response.json())
            .then(
                (data) => {
                    this.setState({
                        isLoaded: true,
                        items: data,
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error,
                    });
                }
            );
    }

    // handleClick = (item) => {

    //     chosen.push(item);
    //     console.log(chosen);
    //     return chosen;
    // };

    render() {
        const chosen = [];
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <p> Error {error.message} </p>;
        } else if (!isLoaded) {
            return <Spinner />;
        } else {
            return (
                <div className="right-section">
                    <h3>Some items costs (from fakestoreapi.com)</h3>
                    <div className="selectedList">
                        {chosen.map((item) => (
                            <div className="itemWrapper" key={item.id}>
                                <img src={item.image} alt="" />
                                <p className="itemName" title="name">
                                    {item.title}
                                </p>
                                <p className="itemPrice" title="price">
                                    {item.price}
                                </p>
                            </div>
                        ))}
                    </div>
                    {items.map((item) => (
                        <div
                            className="itemWrapper"
                            key={item.id}
                            onClick={(item) => {
                                chosen.push(item);
                                console.log(chosen);
                            }}
                        >
                            <img src={item.image} alt="" />
                            <p className="itemName" title="name">
                                {item.title}
                            </p>
                            <p className="itemPrice" title="price">
                                {item.price}
                            </p>
                        </div>
                    ))}
                </div>
            );
        }
    }
}

export default RightSection;
