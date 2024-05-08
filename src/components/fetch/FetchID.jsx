// axios statt fetch für eine breite Browserunterstützung
import axios from "axios";

import { useEffect, useState } from "react";

// with fetch:
// const url =
//   "https://imdb8.p.rapidapi.com/title/v2/get-coming-soon?comingSoonType=MOVIE&first=10";

const options = {
  method: "GET",
  url: "https://imdb8.p.rapidapi.com/title/v2/get-coming-soon",
  params: {
    comingSoonType: "MOVIE",
    first: "10",
  },
  headers: {
    "X-RapidAPI-Key": "6be6113f76msh1a5b13e08899c01p183a59jsnb88b9195d249",
    "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
  },
};

const FetchID = () => {
  //   const [movieID, setMovieID] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.request(options);
        // data
        console.log(response.data.data.comingSoon.edges);
      } catch (error) {
        console.error(error);
      }

      // with fetch:
      // try {
      //   const response = await fetch(url, options);
      //   const result = await response.json();
      //   console.log(result.data.comingSoon.edges);
      // } catch (error) {
      //   console.error(error);
      // }
    };
    fetchData();
  }, []);

  return <div></div>;
};

export default FetchID;

// TEST
