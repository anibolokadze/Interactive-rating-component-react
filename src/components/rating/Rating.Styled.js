import styled from "styled-components";
import { colors, fontSize, borderRadius } from "../../Variables.Styled";

export const Review = styled.div`
    max-width: 327px;
    width: 100%;
    height: 360px;
    background: radial-gradient(98.96% 98.96% at 50% 0%, #232A34 0%, #181E27 100%);
    border-radius: ${borderRadius.small};
    padding: 32px 24px;
    display: grid;
    text-align: center;
    margin: 0 auto;
    color: ${colors.white};
    
    span{
        color: ${colors.orange} !important;
        background-color: ${colors.darkBlue};
        border-radius: ${borderRadius.medium};
        padding: 5px 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 70%;
        margin: 0 auto;
        margin-top: 24px;
        margin-bottom: 24px;
    }
    img{
        margin: 0 auto;
    }
    h1{
        margin-bottom: 10px;
        font-size: ${fontSize.medium};
    }
    p{
        color: ${colors.lightGrey};
        font-size: ${fontSize.small};
    }
`