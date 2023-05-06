import React from "react";
import { StyledScoreBoard } from "./ScoreBoard.styles";

export function ScoreBoard() {
  return(
    <StyledScoreBoard>
      <div>YOU WIN</div>
      <a href="/">RESTART?</a>
    </StyledScoreBoard>
  )
}