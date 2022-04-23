import React from 'react';
import MovieChart from '../CommonComponents/MovieChart';

function Stats() {
    return (
        <div className="container">
            <h2>Top Rated Movies</h2>
            <MovieChart/>
        </div>
    );
}

export default Stats;