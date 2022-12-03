import styled from "styled-components";
import { colors, fontSize, borderRadius } from "../../Variables.Styled";

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Button = styled.button`
  width: 42px;
  height: 42px;
  border-radius: ${borderRadius.circle};
  border: none;
  
  background-color: ${colors.darkBlue};
  color: ${colors.mediumGrey};
  font-size: ${fontSize.small};
  cursor: pointer;
  
  &:hover {
    transition: 0.5s ease;
    background-color: ${colors.orange};
    color: ${colors.white};
  }

  &:focus {
    background-color: ${colors.mediumGrey};
    color: ${colors.white};
  }
`;