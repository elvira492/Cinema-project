// axios statt fetch für eine breite Browserunterstützung
import axios from "axios";

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

// Funktion die gefetchte Daten (IDs) wiedergibt, (braucht keine Hooks -> keine Komponente)

const fetchMovieIDs = async () => {
  try {
    const response = await axios.request(options);
    //  array contains ID packed in nested objects
    const array = response.data.data.comingSoon.edges;
    // extract IDs with map()
    return array.map((object) => object.node.id);
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default fetchMovieIDs;
