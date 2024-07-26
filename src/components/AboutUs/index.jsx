import { All, Container, Inform, Textos, Titulo, Card, Icon, CardTtitle, InformCard,} from "./styles";
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
    <CardTtitle>Nos indique</CardTtitle>
    <Icon src={coracao} alt=""/>
    <InformCard>Mattis et aliquam fermentum sed sagittis eu elit mauris. Nisl eros vel neque vitae lorem molestie.</InformCard>
    <StyledButton>Doe Agora</StyledButton>
    </Card>
    <Card>
    <CardTtitle meiorio>Faça sua Doação</CardTtitle>
    <Icon src={icon2} alt=""/>
    <InformCard>Mattis et aliquam fermentum sed sagittis eu elit mauris. Nisl eros vel neque vitae lorem molestie.</InformCard>
    <StyledButton className="botaocentral">Doe Agora</StyledButton>
    </Card>
    <Card color="#ffffff">
    <CardTtitle>Seja um Voluntário</CardTtitle>
    <Icon src={icon3} alt=""/>
    <InformCard>Mattis et aliquam fermentum sed sagittis eu elit mauris. Nisl eros vel neque vitae lorem molestie.</InformCard>
    <StyledButton>Doe Agora</StyledButton>
    </Card>
      </Container>
    </All>
  )

}

export default SobreNos;