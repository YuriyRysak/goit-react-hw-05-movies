import { MovieList} from '../../components/MovieList/MovieList';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchByQuery } from '../../api';
import { SearchBox } from "../../components/SearchBox/SearchBox";

import { FormDiv } from './Movies.styled';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams('');

  

  useEffect(() => {
    const query = searchParams.get('query');

    query && fetchByQuery(query).then(setMovies);
  }, [searchParams]);

  const onHandleSubmit = query => {
   
    setSearchParams( {query} );
    // console.log(query);
    
    
  };

  return (
    <>
      <FormDiv>
      <SearchBox onSubmit={onHandleSubmit}/>
      </FormDiv>
      <MovieList movies={movies} />
      
    </>
  );
};

export default Movies;
