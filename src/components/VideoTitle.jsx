import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <>
      <div className="py-[15%] px-10 absolute w-screen aspect-video bg-gradient-to-r from-black to-transparent text-white">
        <div>
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="w-2/6">{overview}</p>
        </div>
        <div className="">
          <button className="bg-white text-black px-12 p-3 mt-4 rounded-lg ">
            Play
          </button>
          <button className="mx-4 bg-gray-500 text-white px-12 p-3 mt-4 rounded-lg">
          More Info
          </button>
        </div>
      </div>
    </>
  );
};

export default VideoTitle;
