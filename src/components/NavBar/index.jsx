import { LinkItems, Nav, NavLink, LogoImage } from './styles.jsx';
import Logo from '../../assets/images/NAVLOGO.svg';
function Navbar() {
  return (
    <Nav>
      <LogoImage>
        <img src={Logo} alt="logorio" />
      </LogoImage>
      <LinkItems>
        <NavLink to="group" smooth={true} spy={true} offset={-70} duration={500}>
          Início
        </NavLink>
        <NavLink to="group" smooth={true} spy={true} offset={-70} duration={500}>
          Sobre nós
        </NavLink>
        <NavLink to="group" smooth={true} spy={true} offset={-70} duration={500}>
          Doações
        </NavLink>
      </LinkItems>
    </Nav>
  );
}

export default Navbar;
