import "./Header.css";

import React from "react";

const Header = () => {
    return (
        <div className="Header-site">
            <div className="logo-text">
                <a href="#">FakeStore</a>
            </div>
            <nav>
                <ul className="Header-nav">
                    <li>
                        <a href="#">Man</a>
                    </li>
                    <li>
                        <a href="#">Woman</a>
                    </li>
                    <li>
                        <a href="#">Kids</a>
                    </li>
                    <li>
                        <a href="#">SALE</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;
