import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchTrending } from '../../api';
import {
  HomeContainer,
  HomeTitle,
  MovieList,
  MovieItem,
  MovieLink,
  Img,
  MovieTitle,
} from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  useEffect(() => {
    fetchTrending().then(setMovies);
  }, []);
  // console.log(movies);
  return (
    <HomeContainer>
      <HomeTitle>Tranding today movies </HomeTitle>
      {movies.length > 0 && (
        <MovieList>
          {movies.map(({ id, title, name, poster }) => (
            <MovieItem key={id}>
              <MovieLink to={`/movies/${id}`} state={{ from: location }}>
                <Img src={poster} alt={title ?? name} />
                <MovieTitle>
                  <h3>{title ?? name}</h3>
                </MovieTitle>
              </MovieLink>
            </MovieItem>
          ))}
        </MovieList>
      )}
    </HomeContainer>
  );
};

export default Home;
