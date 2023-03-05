import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchByQuery } from '../../api';
import { SearchBox } from "../../components/SearchBox/SearchBox";
import { MovieList} from '../../components/MovieList/MovieList';

import {
  FormDiv,
} from './Movies.styled';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams('');
  

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
    <>
      <FormDiv>
      <SearchBox value={query} onChange={onChange} onSubmit={handleSubmit}/>
      </FormDiv>
      <MovieList movies={movies} />
     
    </>
  );
};

export default Movies;
