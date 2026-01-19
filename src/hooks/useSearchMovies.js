import { useEffect } from "react";
import { API_OPTION, SEARCH_MOVIE_ID } from "../utils/constants";

const useSearchMovies = () => {
  useEffect(() => {
    const SearchMovies = async () => {
      try {
        const responce = await fetch(SEARCH_MOVIE_ID + API_OPTION);
        const json = await responce.json();
        console.log("Movie Search", json);
      } catch (error) {
        console.error("Error searching movies:", error);
      }
    };
    SearchMovies();
  }, []);
};

export default useSearchMovies;
