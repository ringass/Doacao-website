import { Link } from 'react-router-dom';
import { LinkItems, Nav, NavLink, LogoImage } from './styles.jsx';
import Logo from '../../assets/images/NAVLOGO.svg';

function Navbar() {
  return (
    <Nav>
      <LogoImage>
        <img src={Logo} alt="logorio" />
      </LogoImage>
      <LinkItems>
        <NavLink as={Link} to="/">
          Início
        </NavLink>
        <NavLink as={Link} to="/about">
          Sobre nós
        </NavLink>
        <NavLink as={Link} to="/donation">
          Doações
        </NavLink>
      </LinkItems>
    </Nav>
  );
}

export default Navbar;
