import { All, Container, ConteudoEsquerda, Texto, CounteudoDireita, Titulo, Sant } from "./styles";
import crias from "../../assets/images/crianca.svg";
import ImgSant from "../../assets/images/santana.png";
function Indique(){

  return(
    <All>
      <Container>
      <ConteudoEsquerda>
        <img src={crias} alt="crianças"/>
      </ConteudoEsquerda>
      <CounteudoDireita>
        <Titulo>Vamos fazer a diferença juntos</Titulo>
        <Texto>Contamos com sua ajuda e apoio para a divulgação do projeto nos ambientes culturais/sociais e acolhedores em Santana de Parnaiba</Texto>
        <Sant>
          <img src={ImgSant} alt="Santana de Parnaiba"/>
        </Sant>
      </CounteudoDireita>
      </Container>
    </All>
  )
}

export default Indique;