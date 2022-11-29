import "../main/Main.css";
import { Component } from "react";
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
        fetch("https://swapi.dev/api/starships/")
            .then((response) => response.json())
            .then(
                (data) => {
                    this.setState({
                        isLoaded: true,
                        items: data.results,
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

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <p> Error {error.message} </p>;
        } else if (!isLoaded) {
            return <Spinner />;
        } else {
            return (
                <div className="right-section">
                    <h3>Starships costs (from swapi.dev)</h3>

                    {items.map((item) => (
                        <div key={item.name}>
                            <p title="name">{item.name}</p>
                            <p title="cost in credits">{item.cost_in_credits}</p>
                        </div>
                    ))}
                </div>
            );
        }
    }
}

export default RightSection;
