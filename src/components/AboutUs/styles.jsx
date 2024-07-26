import styled from "styled-components";
import CustomButton from '../Button/'
export const All = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Textos = styled.div`

  width: 700px;
  display: flex;
  height: 130px;
  margin-top: 70px;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;


export const Titulo = styled.h1`
  font-size: 36px;
  margin-top: 0px;
  color: black;
  font-family: "Plus Jakarta Sans";

  span{
    color: ${props => props.theme.primColor};
  }
`;


export const Inform = styled.span`
  margin-top: 25px;
  font-family: ${props => props.theme.fontJak};
  color: ${props => props.theme.terColor};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 75px;
  width: 100%;
  height: 350px;
  margin-top: 60px;
`;

export const Card = styled.div`
  width: 330px;
  height: 320px;
  background-color: ${props => props.color || props.theme.primColor};
  border-radius: 15%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 32px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
  position: relative;

  ${CustomButton} {
    background-color: transparent;
    border-color: ${props => props.theme.primColor};
    color: ${props => props.theme.primColor};
    position: absolute;
    bottom: 40px;
  }
  .botaocentral {
    border-color: white;
    color: white;
  }
`

export const Icon = styled.img`
  position: absolute;
  top:40px;
`
