import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/navbar'

export default function Rotas() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route>
          <Route path="/" element={<Home/>}/>
        </Route>
      </Routes>
    </BrowserRouter>    
  )
}

