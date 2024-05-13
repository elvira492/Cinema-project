import { useEffect, useRef, useState } from "react";
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
  const [detailsVisible, setDetailsVisible] = useState(false);
  const refToScroll = useRef(null);

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

  // click: showDetails
  const showDetails = () => {
    setDetailsVisible(!detailsVisible);
    // SCROLL: element will be in the visible area
    // scrolling only takes place after the 2nd click, which is probably because the DOM-element(movie details) is not yet ready
    // if (refToScroll.current) {
    //   refToScroll.current.scrollIntoView({
    //     behavior: "smooth",
    //     block: "end",
    //   });
    // }
  };

  // 1. Component will be rendered
  // 2. CLICK on the Element( rendering movie details): Ref assigned to this element
  // 3. After rendering, the useEffect() hook is triggered because state: detailsVisible has been updated
  // while the ref has been updated too! And scrolling works with the first click
  // (but only if the movie details have been rendered -> ref assigned):
  useEffect(() => {
    if (refToScroll.current) {
      refToScroll.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, [detailsVisible]);

  // render MovieDATA:
  return (
    <div className={` bg-blue-500 ${detailsVisible ? "w-full" : "w-50 m-5"}  `}>
      {/* If data is fetched/loaded, it is rendered otherwise the spinner is displayed */}
      {!loading ? (
        <div
          className={`flex flex-wrap p-5 ${detailsVisible ? "" : " flex-col"}`}
        >
          <h1>{movieIndex}</h1>
          <img
            src={movieData.poster}
            alt="movie-poster"
            style={{ width: "160px", height: "200px" }}
            onClick={() => showDetails()}
          />
          <div
            ref={refToScroll}
            className={!detailsVisible ? "hidden" : "relative w-60"}
          >
            <h2>{movieData.title}</h2>

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
            <button>Buy Tickets</button>
            <button onClick={showDetails} className="absolute top-0 right-0">
              X
            </button>
          </div>
          <button className={detailsVisible ? "hidden" : ""}>
            Buy Tickets
          </button>
        </div>
      ) : (
        <SquareLoader color="#584b7e" size={100} />
      )}
    </div>
  );
};

export default MovieT;
