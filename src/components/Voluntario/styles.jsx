import styled from "styled-components";

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
  align-items: center;
  text-align: center;
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
`;

export const Texto = styled.span`
  text-align: left;
  align-self: flex-start;
  margin-top: 25px;
  color: white;
  width: 85%;
  font-size: 20px;
  margin-left: 18px;
  font-family: "Plus Jakarta Sans";
`;

