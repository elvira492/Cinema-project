import { apiKeyForData } from "./apiKey";

const fetchMovieData = async (movieID) => {
  try {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${apiKeyForData}&i=${movieID}`
    );
    const movie = await response.json();
    // Title
    const movieTitle = movie.Title;
    // runtime
    const movieRuntime = movie.Runtime;
    // Genre
    const movieGenre = movie.Genre;
    // Director
    const movieDirector = movie.Director;
    //Writer
    const movieWriter = movie.Writer;
    // Actors
    const movieActors = movie.Actors;
    // Plot
    const moviePlot = movie.Plot;
    // Poster
    const moviePoster = movie.Poster;

    return {
      title: movieTitle,
      runtime: movieRuntime,
      genre: movieGenre,
      Director: movieDirector,
      writer: movieWriter,
      actors: movieActors,
      plot: moviePlot,
      poster: moviePoster,
    };
  } catch (error) {
    console.error(error);
    return;
  }
};

export default fetchMovieData;
