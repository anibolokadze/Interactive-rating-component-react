import styled from "styled-components";
import { colors, fontSize, fontWeight, borderRadius } from "../../Variables.Styled";

export const Container = styled.div`
    max-width: 327px;
    width: 100%;
    height: 360px;
    background: radial-gradient(98.96% 98.96% at 50% 0%, #232A34 0%, #181E27 100%);
    border-radius: ${borderRadius.small};
    padding: 32px 24px;
    row-gap: 24px;
    display: grid;

    img{
    background-color: ${colors.darkBlue};
    border-radius: ${borderRadius.circle};
    padding: 10px;
    }
    h1{
        color: ${colors.white};
        font-size: ${fontSize.medium};
    }
    p{
        color:${colors.lightGrey};
        font-size: ${fontSize.small};
    }
    
`