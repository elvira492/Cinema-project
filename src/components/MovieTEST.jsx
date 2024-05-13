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
    <div
      // position relative for the spinner-position
      className={` border-2 relative ${
        detailsVisible ? "w-full" : " w-[240px] h-[430px]  m-5"
      }  `}
    >
      {/* If data is fetched/loaded, it is rendered otherwise the spinner is displayed */}
      {!loading ? (
        <div
          className={`flex flex-wrap justify-center p-5 ${
            detailsVisible ? "" : "flex-col"
          }`}
        >
          <h1>{movieIndex}</h1>
          <img
            src={movieData.poster}
            alt="movie-poster"
            // img width and height -100px
            style={{ width: "200px", height: "324px" }}
            onClick={() => showDetails()}
            className={`${
              !detailsVisible ? "hover:scale-110 transition-all" : ""
            }`}
          />
          <div
            ref={refToScroll}
            className={!detailsVisible ? "hidden" : "relative w-96 m-5"}
          >
            <h2 className="font-extrabold">{movieData.title}</h2>

            <p className="text-sm border-2 mt-1">
              <span>Director: </span>
              {movieData.director},<br /> <span>Writer: </span>
              {movieData.writer}
              <br />
              <span>Main Actors: </span>
              {movieData.actors}
            </p>
            <p className="text-semibold m-2">{movieData.plot}</p>
            <p className="text-sm">
              <span>Genre: </span>
              {movieData.genre}
              <br />
              <span>Runtime: </span>
              {movieData.runtime}
            </p>
            <p>little calender-table</p>
            {/* to do:Button-css-class */}
            <button className="border-2 px-2 hover:bg-slate-300 active:text-white hover:scale-110 transition-all">
              Buy Tickets
            </button>
            <button
              onClick={showDetails}
              className="absolute top-0 right-0 border-2 px-2 hover:bg-slate-300 active:text-white hover:scale-110 transition-all"
            >
              x
            </button>
          </div>
          <button
            className={
              detailsVisible
                ? "hidden"
                : "border-2 px-2 hover:bg-slate-300 active:text-white hover:scale-110 transition-all mt-4"
            }
          >
            Buy Tickets
          </button>
        </div>
      ) : (
        <SquareLoader
          color="#584b7e"
          size={100}
          className="absolute top-[165px] left-[70px]"
        />
      )}
    </div>
  );
};

export default MovieT;
