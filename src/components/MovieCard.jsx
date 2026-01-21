import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ movie,onClick }) => {
  return (
    <>
      <div
      onClick={() => onClick(movie)}
        className="w-48 px-2 
                transition-all duration-300 ease-in-out 
                hover:-translate-y-4 cursor-pointer "
      >
        <img alt={movie.title} src={IMG_CDN_URL + movie.poster_path} />
      </div>
    </>
  );
};

export default MovieCard;
