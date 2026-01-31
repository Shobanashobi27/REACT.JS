import { useEffect, useState } from "react";
import { api } from "../api/tmdb";
import { useDispatch } from "react-redux";
import { addMovie } from "../redux/store";
import { useNavigate } from "react-router-dom";

function MovieRow({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    api.get(fetchUrl).then(res => setMovies(res.data.results));
  }, []);

  return (
    <div className="p-5">
      <h2 className="text-xl mb-3">{title}</h2>
      <div className="flex space-x-4 overflow-x-scroll">
        {movies.map(movie => (
          <img
            key={movie.id}
            onClick={() => navigate(`/watch/${movie.id}`)}
            onDoubleClick={() => dispatch(addMovie(movie))}
            className="w-40 cursor-pointer hover:scale-110 transition"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          />
        ))}
      </div>
    </div>
  );
}

export default MovieRow;
