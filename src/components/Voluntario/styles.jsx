import styled from "styled-components";
import CustomButton from "../Button";

export const Bloco = styled.div`
  width: 100%;
  height: 700px; 
  margin-bottom: 100px;
  background-color: #8B4A4A; 
  border-bottom-left-radius: 50% 40%;
  border-bottom-right-radius: 50% 40%;
  overflow: hidden;
  display: flex;
  gap: 150px
`;

export const All = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const ContainerEsquerda = styled.div`
  width: 700px;
  margin-left: 160px;
  height: 450px;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: center;

  a{
    width: 100%;
    height: 100%;
    margin-left: 100px;
  }

  ${CustomButton}{
    color: #ffff;
    margin-top: 19px;
    margin-left: auto;
    margin-right: 50%;
    border-radius: 10%;
    background-color: black;
    border-color: black;

    
    &:hover {
    background-color: #414040;  
  }
  }

`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center; 
  margin-top: 20px; 
  width: 105%;
`;

export const ContainerDireita = styled.div`
  width: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 600px;
    margin-bottom: 140px;
    border-radius: 100%;
    border: 5px solid white;
  }
`;

export const Titulo = styled.span`
  margin-top: 20px;
  font-size: 46px;
  color: white;
  font-family: "Plus Jakarta Sans";
  text-align: left;
  font-weight: bolder;
  align-self: flex-start;
  margin-left: 9px;
  margin-right: 120px;
`;

export const Texto = styled.span`
  text-align: left;
  align-self: flex-start;
  margin-top: 25px;
  color: ${props => props.theme.terColor};
  width: 85%;
  font-size: 20px;
  margin-left: 9px;
  font-family: "Plus Jakarta Sans";
`;

export const EmailInput = styled.input`
  width: 50%;
  padding: 12px;
  margin-top: 20px;
  margin-left: 9px;
  align-self: flex-start;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 16px;
  font-family: "Plus Jakarta Sans";
  text-align: center;
  color: #000000;

  ::placeholder {
    color: #000000; 
  }

  &:focus {
    outline: none;
    border-color: #8B4A4A;
  }
`;

