import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <>
      <div className=" py-2  text-white">
        <h2 className="text-xl font-bold py-4">{title}</h2>

        <div className="flex overflow-x-scroll">
          <div className="flex ">
            {movies?.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieList;
