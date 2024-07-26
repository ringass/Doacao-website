import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: ${props => props.theme.primColor};
  border: 2px solid ${props => props.theme.primColor};
  color: ${props => props.theme.primColor};
  border-radius: 50px;  
  padding: 12px 24px;  
  font-size: 16px; 
  cursor: pointer;  
  outline: none; 
  font-family: "Plus Jakarta Sans";

  &:hover {
    background-color: #944949;  
  }

  &:active {
    background-color: #7A3C3C; 
  }
`;
