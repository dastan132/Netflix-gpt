import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-full aspect-video pt-[20%] px-28 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-bold text-6xl ">{title}</h1>
      <p className=" py-8 text-lg w-2/4  font-">{overview}</p>
      <div className="">
        <button className=" p-4 px-12 text-xl  rounded-lg  bg-gray-700 text-white hover:bg-slate-500 bg-opacity-50">
          {" "}
          ▶️ Play
        </button>
        <button className=" mx-2 p-4 px-12 text-xl  rounded-lg  bg-gray-700 text-white hover:bg-slate-500 bg-opacity-50">
          ⚠️More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
