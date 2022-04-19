import React, {useState, useEffect} from 'react'

import {key} from '../../../../config/key'

import MovieRow from '../../../movierow'

import axios from 'axios';

export default function PopularMovies() {

  const [list, setList] = useState([])
  
  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=pt-BR&page=1`);
        console.log(response.data.results);
      } catch (error) {
        console.error(error);
      }
    }
    getData()
  }, [])

  return (
    <>       
      <MovieRow 
        title={"Filmes populares"} 
        items={list}
      />
    </>
  );
}
