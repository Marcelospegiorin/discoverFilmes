import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu
} from './style';

import Logo from '../../assets/Capturar.PNG'

export default function Navbar() {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={Logo} alt='Início'/>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/'>
            Início
          </NavLink>
          <NavLink to='/filmes'>
            Filmes
          </NavLink>
          <NavLink to='/series'>
            Séries
          </NavLink>
          <NavLink to='/animes'>
            Animes
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};