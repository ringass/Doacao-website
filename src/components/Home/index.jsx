import {Container, All, Titulo, Texto, SubTitulo, ConteudoEsquerda, ImagemDireita} from './styles'
import Elefante from '../../assets/images/logo-elefante.svg';
import StyledButton from '../Button';
import { useNavigate } from 'react-router-dom';

function HomePage() {

  const navigate = useNavigate();

  const handleDonateClick = () => {
    navigate('/donation');
  };

  return (
    <All>
      <Container>
        <ConteudoEsquerda>
          <Titulo>Corações Solidários</Titulo>
          <br></br>
          <SubTitulo>O Futuro da Doação</SubTitulo>
          <Texto>Eu viverra erat fusce tortor cum libero, pharetra. Nunc cursus cursus odio convallis aliquam in nunc. Commodo ultrices massa urna gravida interdum fringilla massa cum.</Texto>
          <StyledButton onClick={handleDonateClick}>Doe Agora</StyledButton>
        </ConteudoEsquerda>
        <ImagemDireita>
          <img src={Elefante} alt="logo-elefante"/>
        </ImagemDireita>
      </Container>
    </All>
  )
}

export default HomePage;
