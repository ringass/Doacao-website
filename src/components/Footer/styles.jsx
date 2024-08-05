import styled from "styled-components";

export const Container = styled.div`
  background-color: #693438;
 
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 32px;
  bottom: 0 !important;
  width: 100vw;
  height: 160px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 80px;
`;

export const CenterLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 140px;


  img{
    width: 140px;
  }
`;

export const Socials = styled.div`
  flex: 0.8;
  display: flex;
  height:60%;
  gap: 1rem;
  flex-direction: column;
  color: white;
  text-align: flex-start;
  font-family: ${props => props.theme.fontJak};

  h3{
  font-size: 1.3rem;
  font-weight: 800;
  }
`;

export const Etec = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 0.8;
  height: 140px;

  img{
    width: 150px;
  }
`;

export const Icons = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
`;
