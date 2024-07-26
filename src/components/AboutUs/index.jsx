import { All, Container, Inform, Textos, Titulo, Card, Icon} from "./styles";
import StyledButton from '../Button';
import coracao from '../../assets/images/coracao.svg'
import icon2 from '../../assets/images/mao.svg'
import icon3 from '../../assets/images/pessoa.svg'

function SobreNos(){

  return(
    <All>
      <Textos>
      <Titulo>FAÇA A <span>DIFERENÇA</span></Titulo>
      <Inform>Mattis et aliquam fermentum sed sagittis eu elit mauris. Nisl eros vel neque vitae lorem molestie.</Inform>
      </Textos>
      <Container>
    <Card color="#ffffff">
    <Icon src={coracao} alt=""/>
    <StyledButton>Doe Agora</StyledButton>
    </Card>
    <Card>
    <Icon src={icon2} alt=""/>
    <StyledButton className="botaocentral">Doe Agora</StyledButton>
    </Card>
    <Card color="#ffffff">
    <Icon src={icon3} alt=""/>
    <StyledButton>Doe Agora</StyledButton>
    </Card>
      </Container>
    </All>
  )

}

export default SobreNos;