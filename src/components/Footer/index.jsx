import { Container, CenterLogo, Etec, Socials, Texto, Icons } from "./styles";
import Logo from '../../assets/images/NAVLOGO.svg';
import etecLogo from '../../assets/images/eteclogo.png';
function Footer(){

  return(
    <>
    <Container>
    <Socials>
      <Texto>Entre em contato conosco</Texto>
      <Icons></Icons>
    </Socials>
    <CenterLogo><img src={Logo} alt="aaaa" /></CenterLogo>
    <Etec><img src={Logo} alt="Logo da Etec" /></Etec>
    </Container>
    </>
  )
}

export default Footer;