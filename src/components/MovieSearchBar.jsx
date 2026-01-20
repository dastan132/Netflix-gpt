import React from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/langConstant";
import useSearchMovies from "../hooks/useSearchMovies";
import { setTypingInput, submitSearch } from "../utils/searchSlice";

function MovieSearchBar() {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.ui.langChange);

  const typingInput = useSelector((store) => store.search.typingInput);

  const searchQuery = useSelector((store) => store.search.inputMovieSearch);

  useSearchMovies(searchQuery);

  const handleSearchBtn = (e) => {
    e.preventDefault();
    dispatch(submitSearch(typingInput));
    console.log(searchQuery);
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        onSubmit={handleSearchBtn}
        className="w-1/2 bg-black bg-opacity-70 grid grid-cols-12 rounded-lg"
      >
        <input
          type="text"
          value={typingInput}
          onChange={(e) => dispatch(setTypingInput(e.target.value))}
          className="m-4 p-4 col-span-9 rounded-lg"
          placeholder={lang[langKey]?.searchPlaceholder}
        />

        <button
          type="submit"
          className="col-span-3 py-2 px-4 m-4 bg-red-700 text-white font-bold hover:bg-red-900 rounded-lg"
        >
          {lang[langKey]?.search}
        </button>
      </form>
    </div>
  );
}

export default MovieSearchBar;
