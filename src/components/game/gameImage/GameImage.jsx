import React from "react";
import { StyledGameImage } from "./GameImage.styles";
import gameImage from "../../../assets/game-image.jpg";

export function GameImage() {
  function clickHandler(e) {
    console.log(e);
  }

  return(
    <StyledGameImage src={gameImage} onClick={clickHandler} />
  )
}