import { SearchBox } from "../components/SearchBox/SearchBox";
// import { fetchMovieDetails } from "../services/api.js";

// import { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
import {
 
  MovieList,
  MovieItem,
  MovieLink,
  Img,
  MovieTitle,
} from '../pages/Movies.styled.js';


// const Movies = () => {
//   const { movieId } = useParams();
//   const [topMovies, setTopMovies] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [status, setStatus] = useState('idle');
//   const [query, setQuery] = useState('');
//   // console.log(movieId);
 
//   const handleQueryChange = (event) => {
//     const { value } = event.target;
    
//    setQuery(value);
    
//   }

//   useEffect(() => {
//     setIsLoading(true);
//     setStatus('loading');

//     fetchMovieDetails(movieId).then((res) => {
//       console.log(res);
//       setTopMovies(res);
//       setStatus('fulfilled');
//     })
//     .catch((error) => {
//       setStatus('error');
//     })
//     .finally(() => {
//       setIsLoading(false);
//     });
//   }, [movieId]);
  
//   if (status === 'idle' || isLoading) {
//     return <>Loading...</>;
//   }

import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { fetchByQuery } from '../services/api.js';


const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams('');
  const location = useLocation();

  const searchQuery = searchParams.get('query');

  useEffect(() => {
    searchQuery && fetchByQuery(searchQuery).then(setMovies);
  }, [searchQuery]);

  const handleSubmit = async e => {
    e.preventDefault();

    const response = await fetchByQuery(query);
    setMovies(response);
    setSearchParams({ query });
    setQuery('');
  };
  const onChange = e => {
    setQuery(e.target.value);
  };
  
  
  

  return (
    <main>
      {/* <SearchBox value={query} onChange={onChange} onSubmit={handleSubmit}/> */}
      <div> 
      {movies.length > 0 && (
        <MovieList>
          {movies.map(({ id, title, poster }) => (
            <MovieItem key={id}>
              <MovieLink to={`/movies/${id}`} state={{ from: location }}>
                <Img src={poster} alt={title} />
                <MovieTitle>
                  <h3>{title}</h3>
                </MovieTitle>
              </MovieLink>
            </MovieItem>
          ))}
        </MovieList>
      )}
        </div>      

    </main>
  );
};

export default Movies;