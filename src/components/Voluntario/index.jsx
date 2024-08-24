import { Bloco, All, ContainerEsquerda, ContainerDireita, EmailInput, Titulo, Texto, InputContainer} from "./styles";
import ret from "../../assets/images/retangulo.svg"
import Homem from "../../assets/images/entrega.svg"
import StyledButton from '../Button';
function Voluntario(){

    return(
      <>
      <All>
      <Bloco>
        <ContainerEsquerda>
          <Titulo>SEJA UM VOLUNTÁRIO</Titulo> 
          <Texto>Para ser um voluntário do projeto Corações Solidários é necessario que voce nos envie um email para que possamos entrar em contato com voce. No email deve conter CPF, NOME COMPLETO e cidade onde reside.</Texto>
          <InputContainer>
          <EmailInput placeholder="Escreva seu email" />
          <StyledButton>
            ENVIAR
          </StyledButton>
          </InputContainer>
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