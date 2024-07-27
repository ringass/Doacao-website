import styled from "styled-components";

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
  width: 959px;
  height: 1000px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 32px;
  border-radius: 30px;
  margin-top: 30px;
`;

export const TitleminiWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 30px;
`;

export const Titlemini = styled.span`
  font-family: ${props => props.theme.fontOp};
  font-size: 26px;
  color: ${props => props.theme.primColor};
  font-weight: bold;
`

