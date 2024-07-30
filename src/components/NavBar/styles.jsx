import styled from "styled-components";
import { NavLink as RouterNavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 85px;
  top: 0;
  padding: 20px 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const LogoImage = styled.div`
  display: flex;
  margin-left: 60px;
`;

export const LinkItems = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  margin-right: 90px;
  gap: 60px;
`;

export const NavLink = styled(RouterNavLink)`
  cursor: pointer;
  font-family: 'Plus Jakarta Sans';
  text-decoration: none;
  color: black;
  position: relative;

  &.active {
    color: #D4A373; 
    font-weight: bold;
  }

  &.active::after {
    content: '•';
    color: #D4A373; 
    position: absolute;
    bottom: -15px; 
    left: 50%;
    transform: translateX(-50%);
    font-size: 18px; 
    
  }

  &:hover {
    color: #b8b6b6;
  }
`;
