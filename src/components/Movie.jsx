import { useEffect, useState } from "react";
import fetchMovieData from "../components/fetch/FetchMovieData";

const Movie = ({ movieID }) => {
  const [movieData, setMovieData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movieData = await fetchMovieData(movieID);
        console.log("DATA:", movieData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  // MovieDATA rendern:

  return <div>Movie</div>;
};

export default Movie;
