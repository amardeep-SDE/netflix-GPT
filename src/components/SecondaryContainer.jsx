import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  // if (!movies) return;
  console.log("movies list", movies);

  if (!movies.nowPlayingMovies && !movies.popularMovies && !movies.topRatedMovies) return;

  return (
    movies.nowPlayingMovies && (
      <div className=" bg-black text-white">
      <div className="-mt-52 relative z-20 pl-12">
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Trending"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies} />
        <MovieList title={"Horror"} movies={movies.nowPlayingMovies} />
      </div>
      
      </div>
    )
  );
};

export default SecondaryContainer;
