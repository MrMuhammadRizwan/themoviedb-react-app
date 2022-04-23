import React, { useState, useEffect } from 'react';
import { Row } from 'antd';
import { Link } from "react-router-dom";
import axios from "axios";
import MovieBox from '../CommonComponents/MovieBox';
import Footer from './footer';
import SearchBanner from './SearchBanner';
import FilterMovies from '../CommonComponents/FilterMovies';
import { apiKey, baseURL } from '../Constants/Constants';

function Home() {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filterMoviesValue, setFilterMoviesValue] = useState('movies');
  const [searchValue, setSearchValue] = useState(null);

  useEffect(() => {
    // this service will move to services folder
    axios.get(`${baseURL}trending/${filterMoviesValue}/week?api_key=${apiKey}`).then((response) => {
        setMovies(response.data);
        setLoading(false)
    });
  }, [filterMoviesValue]);

  function filterMoviesClick(value) {
        setLoading(true)
        setFilterMoviesValue(value)
        setLoading(false)
 }

 function searchMoviesClick(value) {
        setSearchValue(value)
        setLoading(true)
        setMovies(null)

        // this service will move to services folder
        axios.get(`${baseURL}search/multi?api_key=${apiKey}&query=${value}`).then((response) => {
            console.log('searchMoviesClick', response.data)
            setMovies(response.data);
            setLoading(false)
        });
}


  if (!movies) return null;

    return (
      <>
        <SearchBanner searchMoviesClick={searchMoviesClick} />
        {loading? 
            <div className='loading'>LOADING...</div>
            : 
            <div className="container">
                <FilterMovies filterMoviesClick={filterMoviesClick} />
                {/* {console.log('movies', Object.keys(movies.results).map((item, i) => (movies.results[item])))} */}
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className="movies-wrap">
                    {Object.keys(movies.results).map((item, i) => (
                        <MovieBox value={item} movies={movies.results}/>
                    ))}
                </Row>
            </div>
        }
      </>
    );
}

export default Home;