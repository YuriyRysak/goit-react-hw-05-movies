import { useLocation } from "react-router-dom";
import {MovieListItem, MovieItem, MovieLink, Img, MovieTitle } from './MovieList.styled.js'


export const MovieList = ({ movies }) => {
    const location = useLocation();
    // console.log(movies);
    return (
        <MovieListItem>
        {movies.map(({ id, title, poster, name }) => (
            <MovieItem key={id}>
              <MovieLink to={`/movies/${id}`} state={{ from: location }}>
                <Img src={poster} alt={title} />
                <MovieTitle>
                  <h3>{title??name}</h3>
                </MovieTitle>
              </MovieLink>
            </MovieItem>
          ))}
          </MovieListItem>  

    )
}

export default MovieList;