import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <>
      <div className="py-24 px-10">
        <div>
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="w-2/4">{overview}</p>
        </div>
        <div className="">
          <button className="bg-gray-400 text-white px-12 p-4 mt-4 rounded-lg ">
            Play
          </button>
          <button className="mx-4 bg-gray-400 text-white px-12 p-4 mt-4 rounded-lg">
          More Info
          </button>
        </div>
      </div>
    </>
  );
};

export default VideoTitle;
