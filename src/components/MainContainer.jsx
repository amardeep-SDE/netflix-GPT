import React from "react";
import { useSelector } from "react-redux";
import videoBackground from "./VideoTitle";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return;

  const mainMovie = movies[1];

  const { original_title, overview , id} = mainMovie;
  return (
    <>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground  movieId={id}/>
    </>
  );
};

export default MainContainer;
