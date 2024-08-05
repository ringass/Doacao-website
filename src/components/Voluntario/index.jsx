import { Bloco, All, ContainerEsquerda, ContainerDireita, Titulo, Texto} from "./styles";
import ret from "../../assets/images/retangulo.svg"
import Homem from "../../assets/images/entrega.svg"
function Voluntario(){

    return(
      <>
      <All>
      <Bloco>
        <ContainerEsquerda>
          <Titulo>SEJA UM VOLUNTÁRIO</Titulo> 
          <Texto>BLABLABLABALBAL</Texto>
        </ContainerEsquerda>
        <ContainerDireita>
        <img src={Homem}></img>
        </ContainerDireita>
      </Bloco>
      </All>
      </>
    )
}

export default Voluntario;