import styled from "styled-components";
import CustomButton from '../Button/'

export const All = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 10px;
`;

export const Container = styled.div`
  width: 100%;
  margin-top: 70px;
  margin-bottom: 80px;
  height: 550px;
  display: flex;
  justify-content: space-between;
  gap: 90px;
  align-items: center; 
`;

export const ImagemDireita = styled.div`
  img {
    width: 522px;
    max-width: 100%;
    height: auto;
    margin-right: 40px;
  }
`;

export const ConteudoEsquerda = styled.div`
  width: 800px;
  margin-left: 40px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  ${CustomButton} {
    margin-top: 83px;
    align-self: flex-start;
    margin-left: 21px;
    color: white;
  }
`;

export const Titulo = styled.span`
  font-size: 80px;
  color: #AD5E5E;
  font-family: "Plus Jakarta Sans";
  text-align: center;
  font-weight: bolder;
`;

export const SubTitulo = styled.span`
  color: black;
  font-weight: bold;
  font-size: 25px;
  font-family: "Plus Jakarta Sans";
  text-align: center;
`;

export const Texto = styled.span`
  text-align: left;
  align-self: flex-start;
  margin-top: 45px;
  color: #353535;
  width: 85%;
  font-size: 20px;
  margin-left: 18px;
  font-family: "Plus Jakarta Sans";
`;