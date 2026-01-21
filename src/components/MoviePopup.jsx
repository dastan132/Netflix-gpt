import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MoviePopup = ({ movie, onClose }) => {
  if (!movie) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/80 z-50
                 flex items-center justify-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-black text-white rounded-xl
                   p-8 w-[95%] max-w-4xl
                   animate-scaleIn"
      >
        <div className="flex gap-6">
      
          <img
            className="w-56 rounded-lg"
            alt={movie.title}
            src={IMG_CDN_URL + movie.poster_path}
          />

          
          <div>
            <h2 className="text-3xl font-bold">{movie.title}</h2>

            <p className="mt-3 text-gray-300 text-base">
              {movie.overview}
            </p>

            <p className="mt-2 text-sm text-yellow-400 font-semibold">
              ⭐ {movie.vote_average?.toFixed(1)}
            </p>

            <button
              onClick={onClose}
              className="mt-4 bg-red-600 px-4 py-2 rounded
                         hover:bg-red-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviePopup;
