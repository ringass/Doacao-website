import styled from "styled-components";

export const All = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const Container = styled.div`
  width: 100%;
  height: 700px; 
  margin-bottom: 100px;
  display: flex;
  gap: 150px
`;

export const ConteudoEsquerda = styled.div`
  width: 50vw;
  
  img {
    max-width: 100%;
  }
`;

export const CounteudoDireita = styled.div`
  width: 60vw;
  height: 100%;
  flex-direction: column;
  align-items: flex-start;
  display: flex;
  text-align: center;
  padding-top: 90px;
  text-align: center;
`;

export const Titulo = styled.span`
  font-size: 49px;
  color: ${props => props.theme.primColor};
  font-family: "Plus Jakarta Sans";
  font-weight: bolder;
  align-self: flex-start;
  margin-right: 120px;
`;

export const Texto = styled.span`
  align-self: flex-start;
  text-align: left;
  margin-top: 25px;
  color: ${props => props.theme.terColor};
  width: 85%;
  font-size: 20px;
  margin-left: 9px;
  font-family: "Plus Jakarta Sans";
`;

export const Sant = styled.div`
  width: 200px;
  margin-top: 25px;
  
  img{
    border-radius: 10%;
    border: 1px solid ${props => props.theme.primColor};
    margin-left: 50px;
  }

`;