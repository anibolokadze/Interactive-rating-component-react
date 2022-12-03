import React from "react";
import { Button } from "./Button.Styled";
import { ButtonWrapper } from "./Button.Styled";

export default function Buttons({buttonArray, getRating}){
    return(
        <ButtonWrapper>
            {buttonArray.map((item) => {
                return (
                    <Button onClick={() => getRating(item)} key={item}>{item}</Button>
                )
            })}
        </ButtonWrapper>
    )
}