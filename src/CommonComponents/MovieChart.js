// BarChart.js
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

const apiKey = 'e299332b0d1ce5605118e60381788f5b'
const baseURL = `https://api.themoviedb.org/3/movie/`;

function MovieChart(){
    const [results, setResults] = useState(null);

    useEffect(() => {
      axios.get(`${baseURL}top_rated/?api_key=${apiKey}`).then((response) => {
        setResults(response.data.results)
      });
    }, []);

    return (
        <BarChart
          width={1000}
          height={500}
          data={results}
          margin={{
            top: 5,
            right: 30,
            left: 0,
            bottom: 5,
          }}
        >
          <XAxis dataKey="title" />
          <YAxis/>
          <Tooltip/>
          {/* <Legend /> */}
          <Bar dataKey="popularity" fill="#8884d8" />
          <Bar dataKey="vote_average" fill="#82ca9d" />
        </BarChart>
    )

}

export default MovieChart;