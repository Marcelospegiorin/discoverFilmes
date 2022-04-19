import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: #fff;
  height: 50px;
  display: flex;
`;

export const NavLink = styled(Link)`
  color: #000;
  font-size: 1.3rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
  cursor: pointer;
  padding: 0px 2rem 0px 2rem;
  :hover{
    color: #808080;;
  }
  &.active {
    color: #9219d4;
  }
  @media screen and (max-width: 800px) {
    margin-left: 10px;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #000;
  @media screen and (max-width: 800px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 24px;
  width: 200vw;
  justify-content: space-evenly;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

