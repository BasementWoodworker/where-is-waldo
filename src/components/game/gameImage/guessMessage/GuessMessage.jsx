import React from "react";
import { StyledGuessMessage } from "./GuessMessage.styles";

export function GuessMessage({ correct, position, currentImageHeight, currentImageWidth }) {
  const top = currentImageHeight * position.y + 10;
  const left = currentImageWidth * position.x + 20;
  return(
    <StyledGuessMessage correct={correct} top={top} left={left}>
      {correct ? "Correct" : "Wrong"}
    </StyledGuessMessage>
  )
}