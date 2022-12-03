import styled from "styled-components";
import { colors, fontSize, borderRadius } from "../../Variables.Styled";
export const Submit = styled.button`
    width: 100%;
    padding: 12px 0;
    background-color: ${colors.orange};
    color: ${colors.white};
    font-size: ${fontSize.small};
    letter-spacing: 1.86667px;
    border-radius: ${borderRadius.medium};
    border: none;
    cursor: pointer;
  
  &:hover {
    transition: 0.5s ease;
    background-color: ${colors.white};
    color: ${colors.orange};
  }

`