import React from "react";
import { useSelector } from "react-redux";
import lang from "../utils/langConstant";

function GptSearchBar() {
  const handleGptSearch = () =>{
    console.log("Chat Gpt Is Expancive")
  }
  const langKey = useSelector((store) => store.ui.langChange);
  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black bg-opacity-70   grid grid-cols-12 rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          className="m-4 p-4 col-span-9 rounded-lg "
          placeholder={lang[langKey]?.gptSearchPlaceholder}
        />
        <button
          onClick={handleGptSearch}
          className=" col-span-3 py-2 px-4 m-4 bg-red-700 text-white font-bold hover:bg-red-900 rounded-lg"
        >
          {lang[langKey]?.search}
        </button>
      </form>
    </div>
  );
}

export default GptSearchBar;
