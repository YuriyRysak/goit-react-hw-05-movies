import { useParams, useLocation, Outlet,  Link } from "react-router-dom";
import { BackLink } from "../components/BackLink";
import { fetchMovieDetails } from "../services/api.js";
import { useState, useEffect } from "react";

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  // const navigate = useNavigate();
  const backLinkHref = location.state?.from ?? '/movies';

  const { poster, title, releaseYear, userScore, overview, genres } =
    movie ?? {};

  useEffect(() => {
    fetchMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  // const backToMovies = () => {
  //   navigate(backLinkHref);
  // };

  return (
    <main>
      <BackLink to={backLinkHref}>Back to movies</BackLink>
    
      
      <div>
      {/* <Btn type="button" onClick={backToMovies}>
        Back to movies
      </Btn> */}
      {movie && (
        <div>
         
            <img src={poster} alt={title} />
            <div>
              <div>
                {title} ({releaseYear})
              </div>
              <p>User Score: {userScore}%</p>
              <h3>Overview</h3>
              <p>{overview}</p>
              <h3>Genres</h3>
              <p>{genres.map(({ name }) => name).join(' ')}</p>
            </div>
         

          <p>Additional information</p>

          
            <li>
              <Link to={'cast'} state={{ from: location?.state?.from }}>
                Cast
              </Link>
            </li>
            <li>
              <Link to={'reviews'} state={{ from: location?.state?.from }}>
                Reviews
              </Link>
            </li>
          
          <Outlet />
        </div>
      )}
    </div>
      
    </main>
  );
};

export default MovieDetails;