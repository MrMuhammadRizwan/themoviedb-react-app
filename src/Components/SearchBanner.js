import React from "react";
import Search from "../CommonComponents/Search";

function SearchBanner(props) {
    return (
        <div className="search-banner">
            <div className="container">
                <div className="search-wrap">
                    <h1>Welcome!</h1>
                    <h2>Millions of movies, TV shows and people to discover. Explore now.</h2>
                    <Search searchFunc={props}/>
                </div>
            </div>
        </div>
    );
}

export default SearchBanner;