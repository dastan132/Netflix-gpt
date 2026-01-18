import React from "react";
import GptSearchBar from './GptSearchBar'
import { NETFLIX_BG } from "../utils/constants";
import GptMovieSuggestion from "./GptMovieSuggestion";

function GptSearch() {
  return (
    <div>
      <img className=" absolute -z-10" src={NETFLIX_BG} alt="Netflix background" />
      
      <GptSearchBar />
      <GptMovieSuggestion />

    </div>
  );
}

export default GptSearch;
