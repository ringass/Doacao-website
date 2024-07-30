import { Container, CenterLogo, Etec, Socials, Icons } from "./styles";
import Logo from '../../assets/images/NAVLOGO.svg';
import Ig from '../../assets/images/logo_ig.svg';
import Fb from '../../assets/images/fb_logo.svg';
import Yt from '../../assets/images/yt_logo.svg';
import etecLogo from '../../assets/images/eteclogo.png';
function Footer(){

  return(
    <>
    <Container>
    <Socials>
      <h3>NOSSO CONTATO</h3>
      <p>coracoesvalentes@gmail.com</p>
      <Icons>
        <a href="">
          <img src={Ig} alt="" />
        </a>
        <a href="">
          <img src={Fb} alt="" />
        </a>
        <a href="">
          <img className="penis" src={Yt} alt="" />
        </a>
      </Icons>
    </Socials>
    <CenterLogo><img src={Logo} alt="aaaa" /></CenterLogo>
    <Etec><img src={etecLogo} alt="Logo da Etec" /></Etec>
    </Container>
    </>
  )
}

export default Footer;