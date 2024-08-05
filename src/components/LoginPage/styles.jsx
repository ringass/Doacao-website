import styled, { Styled } from "styled-components";


export const All = styled.div`
    width: 100%;
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

`;

export const ConfirmButton = styled.div`

`;
