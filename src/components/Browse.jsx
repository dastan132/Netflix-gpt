import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies.js";
import MainContainer from "./MainContainer.jsx";
import SecondaryContainer from "./SecondaryContainer.jsx";
import usePopularMovies from "../hooks/usePopularMovies .js";
import useTopRatedMovies from "../hooks/useTopRatedMovies.js";
import useUpcomingMovies from "../hooks/useUpcomingMovies.js";
import { useSelector } from "react-redux";
import MovieSearch from "./MovieSearch.jsx";

function Browse() {
  const Movie = useSelector((store) => store.search.showSearchBtn);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <>
      <div>
        <Header />
        {Movie ? (
          <MovieSearch />
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
