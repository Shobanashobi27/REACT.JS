import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import MovieRow from "../components/MovieRow";
import { requests } from "../api/tmdb";

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <MovieRow title="Netflix Originals" fetchUrl={requests.originals} />
      <MovieRow title="Trending" fetchUrl={requests.trending} />
      <MovieRow title="Top Rated" fetchUrl={requests.topRated} />
      <MovieRow title="Action" fetchUrl={requests.action} />
    </>
  );
}

export default Home;

