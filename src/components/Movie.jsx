import { useEffect, useRef, useState } from "react";
import fetchMovieData from "../components/fetch/FetchMovieData";
import { SquareLoader } from "react-spinners";
import { NavLink } from "react-router-dom";

// Id is for fetching the movie data, but index is for the self-defined order of the movies (added to the movieData)
// eslint-disable-next-line react/prop-types
const Movie = ({ movieID, movieIndex }) => {
  const [movieData, setMovieData] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [detailsVisible, setDetailsVisible] = useState(false);
  const refToScroll = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchMovieData(movieID);
        // the MovieData-Object should contain an index for further processing (calendar:Date assignment)
        const newData = {
          ...data,
          index: movieIndex,
        };
        // update movieData-state
        setMovieData(newData);
        // AND save movie data in localStorage
        localStorage.setItem(`movie${movieIndex}`, JSON.stringify(newData));

        // + Data has been loaded: update loaded-state
        setLoaded(true);
      } catch (error) {
        console.error(error);
      }
    };
    const movie = localStorage.getItem(`movie${movieIndex}`);
    setTimeout(() => {
      if (movie) {
        // if data already exists in localStorage update movieData-state:
        setMovieData(JSON.parse(movie));
        setLoaded(true);
      } else {
        fetchData();
      }
    }, 500);
  }, [movieID, movieIndex]);

  // Clickhandler: show details
  const showDetails = () => {
    setDetailsVisible(!detailsVisible);
  };

  // Second useEffect for scrolling to the details of the movieComponent after rendering by clicking the image
  // ref assigned to this element AFTER rendering the element by click (detailsVisible updated)
  useEffect(() => {
    if (refToScroll.current) {
      refToScroll.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [detailsVisible]);

  // render MovieDATA---------------------------

  return (
    <div
      //position relative for the spinner-position
      className={`flex justify-center items-center text-black bg-white rounded-sm border-4 border-gray-300 relative ${
        detailsVisible ? "w-full" : " w-[300px] h-[400px]  m-5"
      }  `}
    >
      {" "}
      {/* If data is fetched/loaded, it is rendered otherwise the spinner is displayed */}
      {loaded ? (
        <div
          className={` flex flex-wrap justify-center items-center bg-red-950 p-3   ${
            detailsVisible ? "" : "flex-col"
          }`}
        >
          <img
            src={movieData.poster}
            alt="movie-poster"
            // img width and height adjusted
            style={{ width: "200px", height: "300px" }}
            onClick={() => showDetails()}
            className={`object-fill ${
              !detailsVisible ? "hover:scale-110 	 transition-all" : "mt-4"
            }`}
          />
          <div
            ref={refToScroll}
            className={!detailsVisible ? "hidden" : "relative w-96 p-5"}
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

            <NavLink to="/cart">
              <button className="text-white background  opacity-80  absolute bottom-5 right-5 border-2 px-2 hover:bg-red-700 active:text-white hover:scale-110 transition-all ">
                Buy Tickets
              </button>
            </NavLink>
            {/* text-white background opacity-80 border-2 px-6 hover:bg-red-700 active:text-white hover:scale-110 transition-all mt-4 */}
            <button
              onClick={showDetails}
              className="absolute top-5 right-5 w-5 h-5 pb-1 rounded-full opacity-80  border-2 text-xs text-white  hover:bg-red-700 
            background
             hover:scale-110 transition-all"
            >
              x
            </button>
          </div>
          <NavLink to="/cart">
            <button
              className={
                detailsVisible
                  ? "hidden"
                  : "text-white background opacity-80 border-2 px-6 hover:bg-red-700 active:text-white hover:scale-110 transition-all mt-4"
              }
            >
              Buy Tickets
            </button>
          </NavLink>
        </div>
      ) : (
        <SquareLoader
          color="#584b7e"
          size={100}
          className="absolute top-[120px] left-[50px]"
        />
      )}
    </div>
  );
};

export default Movie;
