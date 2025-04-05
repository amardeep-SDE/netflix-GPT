import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayyingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import { useSelector } from 'react-redux';
import GptSearch from './GptSearch';


const Browse = () => {

  const gptSearch = useSelector((store) => store.movies?.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
 
  return (
    <div>
      <Header/>
      <GptSearch/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse