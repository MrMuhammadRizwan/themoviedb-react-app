import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="top-nav">
                    <h1>Movies App</h1>
                    <div className="menu">
                        <Link to="/" className="menu-item">Home</Link>
                        <Link to="/stats" className="menu-item">Stats</Link>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;