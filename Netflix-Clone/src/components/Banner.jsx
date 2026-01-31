import { useEffect, useState } from "react";
import { api, requests } from "../api/tmdb";

function Banner() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    api.get(requests.originals).then(res => {
      setMovie(res.data.results[0]);
    });
  }, []);

  return (
    <div
      className="h-[60vh] bg-cover bg-center flex items-end p-10"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`
      }}
    >
      <h1 className="text-4xl font-bold">{movie?.name}</h1>
    </div>
  );
}

export default Banner;
