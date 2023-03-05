import { useState, useEffect } from 'react';
import { fetchTrending } from '../../api';
import { MovieList} from '../../components/MovieList/MovieList';
import {
  HomeContainer,
  HomeTitle,
} from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);
    useEffect(() => {
    fetchTrending().then(setMovies);
  }, []);
  // console.log(movies);
  return (
    <HomeContainer>
      <HomeTitle>Tranding today movies </HomeTitle>
      <MovieList movies={movies} />
    
      
    </HomeContainer>
  );
};

export default Home;
