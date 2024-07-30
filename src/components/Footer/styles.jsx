import styled from "styled-components";

export const Container = styled.div`
  background-color: #693438;
  bottom: 0;
  width: 100vw;
  height: 160px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

export const CenterLogo = styled.div`
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const Texto = styled.span`
  color: white;
  font-family: ${props => props.theme.fontJak};
  top: 5px;
  position: absolute;
  font-weight: bold;
  font-size: 17px;
`

export const Socials = styled.div`
  background-color: green;
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const Etec = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const Icons = styled.div`
  background-color: tomato;
  height: 40%;
  width: 50px;
`
