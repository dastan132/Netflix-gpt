import React, { useState } from "react";
import MovieCard from "./MovieCard";
import MoviePopup from "./MoviePopup";

const MovieList = ({ title, movies }) => {
  const [selectedMovie, setSelectedMovie] =  useState(null)
  if (!movies || movies.length === 0) return null;
  //console.log("hello", movies);

  return (
    <div className="px-6  ">
      <h1 className="text-3xl py-4 text-white">{title}</h1>
      <div className="  flex  overflow-x-scroll [&::-webkit-scrollbar]:hidden ">
        <div className="flex ">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} onClick={setSelectedMovie} />
          ))}
        </div>
      </div>
      {setSelectedMovie && (
        <MoviePopup
        movie={selectedMovie}
        onClose = {() => setSelectedMovie(null)}
         />
      )}
    </div>
  );
};

export default MovieList;
