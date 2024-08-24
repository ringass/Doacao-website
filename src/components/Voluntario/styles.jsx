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

  ${CustomButton}{
    color: #ffff;
    margin-top: 19px;
    margin-left: 10px;
    border-radius: 10%;
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
  img {
    width: 400px;
    height: auto;
    margin-left: 220px;
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
  color: white;
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

