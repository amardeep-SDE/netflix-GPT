import React, { useEffect } from "react";
import { addTrailerVideo } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";

const useMovieTrailer = () => {
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/1229730/videos?language=en-US",
      API_OPTIONS
    );
    const movies = await data.json();
    console.log(movies.results);

    const filterData = movies.results.find((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : movies.results[0];
    console.log(trailer);
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;
