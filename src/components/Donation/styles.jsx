import styled from "styled-components";
import CustomButton from "../Button";

export const All = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
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

  span {
    color: ${(props) => props.theme.primColor};
  }
`;

export const Inform = styled.span`
  margin-top: 25px;
  font-family: ${(props) => props.theme.fontJak};
  color: ${(props) => props.theme.terColor};
`;

export const Container = styled.div`
  width: 959px;
  padding: 30px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 32px;
  border-radius: 30px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${CustomButton} {
    color: #ffff;
    border-radius: 10px;
    margin-top: 20px;
  }
`;

export const TitleminiWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 20px;
`;

export const Titlemini = styled.span`
  font-family: ${(props) => props.theme.fontOp};
  font-size: 26px;
  color: ${(props) => props.theme.primColor};
  font-weight: bold;
`;

export const SectionWrapper = styled.div`
  width: 100%;
  margin-bottom: 15px; 
  margin-left: 20%;
`;

export const SectionTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 20px;
  color: black;
  font-family: ${(props) => props.theme.fontJak};
  font-weight: bold;
  text-align: left;
`;

export const FormRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px; 
`;

export const FormColumn = styled.div`
  flex: 1; 
  display: flex;
  flex-direction: column;
  margin-right: 10px;

  &:last-child {
    margin-right: 0; 
  }
`;

export const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

export const FieldLabel = styled.label`
  font-size: 15px;
  margin-bottom: 5px;
  font-family: ${(props) => props.theme.fontJak};
  color: black;
`;

export const ConsentGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
  margin-bottom: 10px;

  label {
    font-size: 20px;
    font-family: ${(props) => props.theme.fontJak};
    color: black;
    display: flex;
    align-items: center;

    input {
      margin-right: 10px;
    }
  }

`;
