import { useSelector } from "react-redux";

function MyList() {
  const movies = useSelector(state => state.mylist);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-5">My List</h1>
      <div className="grid grid-cols-4 gap-4">
        {movies.map(movie => (
          <img
            key={movie.id}
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          />
        ))}
      </div>
    </div>
  );
}

export default MyList;
