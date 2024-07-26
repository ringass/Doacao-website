import styled from "styled-components"
import { Link } from 'react-scroll';

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

export const NavLink = styled(Link)`
  cursor: pointer;
  font-family: 'Plus Jakarta Sans';


  
`;

