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
            chosen: [],
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

    handleDeleteElem = (id) => {
        this.setState((prevState) => ({ chosen: prevState.chosen.filter((elem) => elem.id !== id) }));
    };

    render() {
        const { error, isLoaded, items, chosen } = this.state;
        if (error) {
            return <p> Error {error.message} </p>;
        } else if (!isLoaded) {
            return <Spinner />;
        } else {
            return (
                <div className="right-section">
                    {console.log(items)}
                    {console.log(chosen)}
                    <h3>Some items costs (from fakestoreapi.com)</h3>
                    <div className="selectedList">
                        {chosen.map((elem) => (
                            <div
                                className="itemWrapper"
                                key={elem.id}
                                onClick={() => {
                                    this.handleDeleteElem(elem.id);
                                }}
                            >
                                <img src={elem.image} alt="" />
                                <p className="itemName" title="name">
                                    {elem.title}
                                </p>
                                <p className="itemPrice" title="price">
                                    {elem.price}
                                </p>
                            </div>
                        ))}
                    </div>
                    {items.map((item) => (
                        <div
                            className="itemWrapper"
                            key={item.id}
                            onClick={(item) => {
                                this.setState({ chosen: chosen.concat(item) });
                                // console.log(item);
                                // console.log(chosen);
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
