import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import RateMovie from "../Components/RateMovie";
import axios from "axios";
import { Row, Col, Rate } from 'antd';
import MovieBox from '../CommonComponents/MovieBox';
import { apiKey, baseURL, imageURL} from '../Constants/Constants';

function MoviesDetails() {
  let params = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [similarMovies, setSimilarMovies] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // this service will move to services folder
    axios.get(`${baseURL}movie/${params.movieid}?api_key=${apiKey}`).then((response) => {
        if(response.status==200){
          setMovieDetails(response.data);
          setLoading(false)
        }
    });
    // this service will move to services folder
    axios.get(`${baseURL}movie/${params.movieid}/similar?api_key=${apiKey}`).then((response) => {
      if(response.status==200){
        setSimilarMovies(response.data);
      }
  });
  }, [params]);

  if (!movieDetails) return ('');

    return (
      <div className='container'>
        <main>
          {loading?
            <div className='loading'>LOADING...</div>
            :
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} >
              <Col className="gutter-row" span={16}>
                <div className='content-left'>
                  <h2>{movieDetails.title?movieDetails.title:null}</h2>
                  <div className='details-poster-image'>
                    <img src={`${imageURL}${movieDetails.poster_path ? movieDetails.poster_path : movieDetails.profile_path}`} alt="Movie Image" />
                  </div>
                  <p><strong>Summery: </strong>{movieDetails.overview}</p> 
                  <p><strong>Release: </strong>{movieDetails.release_date}</p>
                  <p><strong>Budget: </strong>${movieDetails.budget/1000000} Million</p>
                </div>
              </Col>
              <Col className="gutter-row" span={8}>
                <div className='content-right'>
                  <p><strong>Cast: </strong>Data not available</p>
                  <hr/>
                  <p><strong>Genres: </strong>{movieDetails.genres.map((gen,i)=>(<span>{gen.name}</span>))}</p>
                  <hr/>
                  <p><strong>Director: </strong>Data not available</p> 
                  <hr/>
                  <p><strong>Languages: </strong>{movieDetails.spoken_languages.map((lan,i)=>(<span>{lan.name}</span>))}</p>
                  <hr/>
                  <p><strong>Run Time: </strong>{movieDetails.runtime} Minutes</p>
                  <hr/>
                  <p><strong>Votes: </strong>({movieDetails.vote_count}) <Rate disabled defaultValue={movieDetails.vote_average} /></p>
                  <RateMovie/>
                </div>
              </Col>
            </Row>
          }
          {similarMovies && (
              <div className='similar-movies'>
                <h2>Similar Movies:</h2>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className="movies-wrap">
                  {Object.keys(similarMovies.results).map((item, i) => (
                      <MovieBox value={item} key={i} movies={similarMovies.results}/>
                  ))}
                </Row>
              </div>
            )}
        </main>
      </div>
    );
  }

  export default MoviesDetails;