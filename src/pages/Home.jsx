import { useEffect, useState } from "react";
import { fetchMovieTrending } from "../services/api.js";
import { Link, useLocation } from "react-router-dom";

const Home = () => {
  const [topMovies, setTopMovies] = useState([]); 
  const location = useLocation();
  useEffect(() => {
    
    // fetchMovieTrending().then(console.log) 
    fetchMovieTrending().then(({data}) => {
      setTopMovies(data.results);
    }) 
      
    
  }, []);
  return (
    <main>
      <h1>Trending today movies</h1>
      <ul>
         {topMovies.map(topMovie => (<li key={topMovie.id}>
         <Link to={`/movies/${topMovie.id}`} state={{from: location }}>{topMovie.title ?? topMovie.name }
         {/* <img src={topMovie.poster} alt={topMovie.title}/> */}
         </Link>
         </li>
         ))}

        
      </ul>
      
      
    </main>
  );
};

export default Home;