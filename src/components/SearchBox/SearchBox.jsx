import { MovieList} from '../../components/MovieList/MovieList';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchByQuery } from '../../api';
import { Wrapper, Input, Button, SearchForm, Icon } from "./SearchBox.styled";

export const SearchBox = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams('');
  

  const searchQuery = searchParams.get('query');

  useEffect(() => {
    searchQuery && fetchByQuery(searchQuery).then(setMovies);
  }, [searchQuery]);

  const handleSubmit = async e => {
    e.preventDefault();
    setSearchParams({ query });
    setQuery('');
  };
  const onChange = e => {
    setQuery(e.target.value);
  };

  return (
    <>
    <Wrapper>
      <SearchForm onSubmit={handleSubmit}>
      <Input
        type="text"
        autocomplete="off"
        autofocus="off"
        placeholder="Search movies..."
        value={query}
        onChange={onChange}
       />
       
      <Button type="submit"><Icon/></Button>
      </SearchForm>
    </Wrapper>
    <MovieList movies={movies} />

   </>
  );
};