import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import MovieCard from "../components/MovieCard";

export default function Search() {
  const [movies, setMovies] = useState([]);
  const query = new URLSearchParams(useLocation().search).get("query");

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=YOUR_API_KEY&query=${query}`)
      .then(res => setMovies(res.data.results));
  }, [query]);

  return (
    <div style={{display:"flex", flexWrap:"wrap", gap:"20px", padding:"20px"}}>
      {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
    </div>
  );
}
