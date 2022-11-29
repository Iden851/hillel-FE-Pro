import "../main/Main.css";
import StarShips from "../data/StarShips.json";

function LeftSection() {
    return (
        <div className="left-section">
            <h3>Starships costs (from node js)</h3>

            {StarShips.results.map((item) => (
                <div>
                    <p title="name">{item.name}</p>
                    <p title="cost in credits">{item.cost_in_credits}</p>
                </div>
            ))}
        </div>
    );
}

export default LeftSection;
