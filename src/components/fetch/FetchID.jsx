// axios statt fetch
import axios from "axios";
import { apiKeyForIDs } from "./apiKey";

const options = {
  method: "GET",
  url: "https://imdb8.p.rapidapi.com/title/v2/get-coming-soon",
  params: {
    comingSoonType: "MOVIE",
    first: "1",
  },
  headers: {
    "X-RapidAPI-Key": apiKeyForIDs,
    "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
  },
};

const fetchMovieIDs = async () => {
  try {
    const response = await axios.request(options);
    //  array contains IDs packed in nested objects
    const array = response.data.data.comingSoon.edges;
    // extract IDs with map()
    return array.map((object) => object.node.id);
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default fetchMovieIDs;
