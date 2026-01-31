export default function MovieCard({ movie, onClick }) {
  return (
    <div style={{width:"180px", cursor:"pointer"}} onClick={() => onClick(movie)}>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        width="100%"
      />
      <p>{movie.title}</p>
    </div>
  );
}

