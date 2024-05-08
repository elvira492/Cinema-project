import { useEffect } from "react";
import fetchMovieDetails from "../components/fetch/FetchDetails";

const Homepage = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const movieDetails = await fetchMovieDetails();
        console.log("Movie Details:", movieDetails);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return <div>Homepage</div>;
};

export default Homepage;
