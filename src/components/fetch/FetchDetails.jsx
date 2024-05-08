import axios from "axios";

const options = {
  method: "GET",
  url: "https://imdb8.p.rapidapi.com/title/v2/get-extend-details",
  params: {
    tconst: "tt0120338",
  },
  headers: {
    "X-RapidAPI-Key": "6be6113f76msh1a5b13e08899c01p183a59jsnb88b9195d249",
    "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
  },
};

const fetchMovieDetails = async () => {
  try {
    const response = await axios.request(options);
    // movie is a big nested object with the required data
    const movie = response.data.data.title;

    // Title of the movie:
    const movieTitle = movie.originalTitleText.text;

    // Credits-array: director, writer
    const creditsData = movie.credits.edges;
    // Array with objects {category : name}
    const movieCredits = creditsData.map((item) => {
      // return an object
      return { [item.node.category.text]: item.node.name.nameText.text };
    });

    // Image-URL
    const moviePosterURL = movie.primaryImage.url;

    // runtime in seconds
    const runtimeSec = movie.runtime.seconds;
    // runtime seconds -> minutes:
    const movieRuntimeMinutes = parseInt(runtimeSec) / 60;

    // releaseYear
    const movieReleaseYear = movie.releaseYear.year;

    // return an object with the required data of the movie:
    return {
      title: movieTitle,
      credits: movieCredits,
      img: moviePosterURL,
      runtimeMinutes: movieRuntimeMinutes,
      releaseYear: movieReleaseYear,
    };
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default fetchMovieDetails;
