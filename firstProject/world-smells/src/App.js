import React from "react";
import Header from "./components/common/header/Header";
import Footer from "./components/common/footer/Footer";
import Main from "./components/common/main/Main";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export default App;
