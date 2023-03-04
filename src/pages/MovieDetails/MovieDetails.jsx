import { useState, useEffect } from 'react';

import { useParams, Outlet, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from '../../api';
import { BackLink } from "../../components/BackLink";
import {
  MovieContainer,
  Img,
  MovieInfo,
  MovieTitle,
  AddInfo,
  InfoList,
  InfoLink,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  const { poster, title, releaseYear, userScore, overview, genres } =
    movie ?? {};

  useEffect(() => {
    fetchMovieDetails(movieId).then(setMovie);
  }, [movieId]);


  return (
    <div>
      <BackLink to={backLinkHref}>Back to movies</BackLink>     
      {movie && (
        <div>
          <MovieContainer>
            <Img src={poster} alt={title} />
            <MovieInfo>
              <MovieTitle>
                {title} ({releaseYear})
              </MovieTitle>
              <p>User Score: {userScore}%</p>
              <h3>Overview</h3>
              <p>{overview}</p>
              <h3>Genres</h3>
              <p>{genres.map(({ name }) => name).join(' ')}</p>
            </MovieInfo>
          </MovieContainer>

          <AddInfo>Additional information</AddInfo>

          <InfoList>
            <li>
              <InfoLink to={'cast'} state={{ from: location?.state?.from }}>
                Cast
              </InfoLink>
            </li>
            <li>
              <InfoLink to={'reviews'} state={{ from: location?.state?.from }}>
                Reviews
              </InfoLink>
            </li>
          </InfoList>
          <Outlet />
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
