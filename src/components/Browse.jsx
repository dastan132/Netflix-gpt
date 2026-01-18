import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies.js";
import MainContainer from "./MainContainer.jsx";
import SecondaryContainer from "./SecondaryContainer.jsx";
import usePopularMovies from "../hooks/usePopularMovies .js";
import useTopRatedMovies from "../hooks/useTopRatedMovies.js";
import useUpcomingMovies from "../hooks/useUpcomingMovies.js";
import GptSearch from "./GptSearch.jsx"
import { useSelector } from "react-redux";

function Browse() {
  const gptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <>
      <div>
        <Header />
        {gptSearch ? (
          <GptSearch />
        ) : (
          <>
            <MainContainer /> <SecondaryContainer />{" "}
          </>
        )}
      </div>
    </>
  );
}

export default Browse;
