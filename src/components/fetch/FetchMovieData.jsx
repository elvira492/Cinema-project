const fetchMovieData = async (movieID) => {
  try {
    const response = await fetch(
      `https://cinema-project-server.onrender.com/api/movie/${movieID}`
    );
    const movie = await response.json();
    return movie;
  } catch (error) {
    console.error(error);
    return;
  }
};

export default fetchMovieData;
