import { useEffect } from "react";
import { API_OPTION, SEARCH_MOVIE_API } from "../utils/constants";
import { useDispatch } from "react-redux";
import { setSearchResults } from "../utils/searchSlice";

const useSearchMovies = (query) => {
  const dispatch = useDispatch()
  useEffect(() => {
    if (!query) return;

    console.log("Searching for:", query);

    const controller = new AbortController();

    const searchMovies = async () => {
      try {
        const response = await fetch(
          `${SEARCH_MOVIE_API}?query=${encodeURIComponent(query)}`,
          { ...API_OPTION, signal: controller.signal }
        );

        const json = await response.json();
        dispatch(setSearchResults(json.results))
        console.log("Movie Search:", json.results);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Error searching movies:", error);
        }
      }
    };

    searchMovies();

    //  cleanup on query change/unmount
    return () => controller.abort();
  }, [dispatch,query]);
};

export default useSearchMovies;
