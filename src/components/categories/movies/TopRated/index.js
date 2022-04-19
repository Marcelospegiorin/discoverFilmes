import React, {useState, useEffect} from 'react'

import axios from 'axios';

import { key } from '../../../../config/key';

import MovieRow from '../../../movierow';

export default function TopRated() {

  const [list, setList] = useState([])
  
  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=pt-BR&page=1`);
        setList(response.data.results);
      } catch (error) {
        console.error(error);
      }
    }
    getData()
  }, [])

  return (
    <>
      <MovieRow 
        title={"Filmes mais Votados"} 
        items={list}
      />
    </>
  )
}
