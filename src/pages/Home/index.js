import React, {useState, useEffect} from 'react';
import PopularMovies from '../../components/categories/movies/Popular/Popular.js';
import TopRated from '../../components/categories/movies/TopRated/index.js';

export default function Home() {

  return (
    <>
      <PopularMovies />
      <TopRated />
    </>
  )
}
