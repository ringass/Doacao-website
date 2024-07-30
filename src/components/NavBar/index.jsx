import { LinkItems, Nav, NavLink, LogoImage } from './styles.jsx';
import Logo from '../../assets/images/NAVLOGO.svg';

function Navbar() {
  return (
    <Nav>
      <LogoImage>
        <img src={Logo} alt="logorio" />
      </LogoImage>
      <LinkItems>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/about">
          About
        </NavLink>
        <NavLink to="/donation">
          Donation
        </NavLink>
      </LinkItems>
    </Nav>
  );
}

export default Navbar;
