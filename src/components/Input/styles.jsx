import styled from "styled-components";

export const StyledInput = styled.input`
  width: 280px;
  padding: 15px;
  margin-top: 20px;
  border-radius: 8px;
  border: 1px solid white;
  font-size: 16px;
  font-family: 'Plus Jakarta Sans';
  text-align: center;
  color: white;
  background-color: #8B4A4A;

  ::placeholder {
    color: white;
  }

  &:focus {
    outline: none;
    border-color: #8B4A4A;
  }
`;
