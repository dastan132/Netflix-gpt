import React from "react";
import { NETFLIX_BG } from "../utils/constants";
import MovieSearchBar from "./MovieSearchBar";
import MovieSuggestion from "./MovieSuggestion";

function MovieSearch() {
  return (
    <div>
      <img
        className=" absolute -z-10"
        src={NETFLIX_BG}
        alt="Netflix background"
      />

      <MovieSearchBar />
      <MovieSuggestion />
    </div>
  );
}

export default MovieSearch;
