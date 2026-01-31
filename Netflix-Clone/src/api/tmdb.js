import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export const API_KEY = "YOUR_TMDB_KEY";

export const requests = {
  trending: `/trending/all/week?api_key=${API_KEY}`,
  originals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  topRated: `/movie/top_rated?api_key=${API_KEY}`,
  action: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
};
