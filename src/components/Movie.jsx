import { useEffect, useState } from "react";
import fetchMovieData from "../components/fetch/FetchMovieData";
import { SquareLoader } from "react-spinners";

// Id is for fetching the movie data, but index is for the own order of the movies (added to the movieData)
const Movie = ({ movieID, movieIndex }) => {
  const [movieData, setMovieData] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchMovieData(movieID);
        // the MovieData-Object should contain an index for further processing (calendar:Date assignment)
        setMovieData((prevData) => ({
          ...prevData,
          ...data,
          index: movieIndex,
        }));
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [movieID]);

  // MovieDATA rendern:

  return (
    <div>
      {/* If data is fetched/loaded, it is rendered otherwise the spinner is displayed */}
      {loaded ? (
        <div>
          {" "}
          <h2>{movieData.title}</h2>
          <img
            src={movieData.poster}
            onLoad={setLoaded(() => true)}
            alt="movie-poster"
          />
          <div>
            <p>
              <span>Director:</span>
              {movieData.director}, <span>Writer:</span>
              {movieData.writer}
            </p>
            <p>
              <span>Main Actors:</span>
              {movieData.Actors}
            </p>
            <p>{movieData.plot}</p>
            <p>
              <span>Genre:</span> {movieData.genre}
            </p>
            <p>
              <span>Runtime</span>
              {movieData.runtime}
            </p>
            <p>little calender-table</p>
          </div>
          <button>Buy Tickets</button>{" "}
        </div>
      ) : (
        <SquareLoader color="#584b7e" />
      )}
    </div>
  );
};

export default Movie;
