import React from "react";
import { StyledTagRectangle } from "./TagRectangle.styles";

export function TagRectangle({ position, characterName, currentImageHeight, currentImageWidth }) {
  const left = position.leftBorder * currentImageWidth + "px";
  const top = position.upperBorder * currentImageHeight + "px";
  const height = (position.lowerBorder - position.upperBorder) * currentImageHeight + "px";
  const width = (position.rightBorder - position.leftBorder) * currentImageWidth + "px";
  return(
    <StyledTagRectangle className="tag-rectangle" left={left} top={top} height={height} width={width} characterName={characterName} />
  )
}