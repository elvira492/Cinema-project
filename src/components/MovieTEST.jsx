import { useEffect, useState } from "react";
import { SquareLoader } from "react-spinners";

// FOR TESTING:
const movieObject = {
  title: "Robot Dreams",
  runtime: "102 min",
  genre: "Animation, Drama, Music",
  director: "Pablo Berger",
  writer: "Pablo Berger, Sara Varon",
  actors: "Ivan Labanda, Albert Trifol Segarra, Rafa Calvo",
  plot: "The adventures and misfortunes of Dog and Robot in New York City during the 1980s.",
  poster:
    "https://m.media-amazon.com/images/M/MV5BMzE4ZDlmNzUtY2QyZS00MmZiLWE1ZTgtOTcyNTEzNmNkODEzXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_SX300.jpg",
};
// ______________________

// Id is for fetching the movie data, but index is for the own order of the movies (added to the movieData)
const MovieT = ({ movieIndex }) => {
  const [movieData, setMovieData] = useState(movieObject);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setMovieData((prevData) => ({
        ...prevData,
        index: movieIndex,
      }));
    }, 2000);
  }, []);

  // MovieDATA rendern:

  return (
    <div
      className={` m-5 bg-blue-500 ${movieIndex === 4 ? "w-full" : "w-40"}  `}
    >
      {/* If data is fetched/loaded, it is rendered otherwise the spinner is displayed */}
      {!loading ? (
        <div className="">
          {" "}
          <h1>{movieIndex}</h1>
          <h2>{movieData.title}</h2>
          <img
            src={movieData.poster}
            alt="movie-poster"
            style={{ width: "160px", height: "200px" }}
          />
          <div className="hidden">
            <p>
              <span>Director: </span>
              {movieData.director},<br /> <span>Writer: </span>
              {movieData.writer}
            </p>
            <p>
              <span>Main Actors: </span>
              {movieData.actors}
            </p>
            <p>{movieData.plot}</p>
            <p>
              <span>Genre: </span>
              {movieData.genre}
            </p>
            <p>
              <span>Runtime: </span>
              {movieData.runtime}
            </p>
            <p>little calender-table</p>
          </div>
          <button>Buy Tickets</button>
        </div>
      ) : (
        <SquareLoader color="#584b7e" size={100} />
      )}
    </div>
  );
};

export default MovieT;
