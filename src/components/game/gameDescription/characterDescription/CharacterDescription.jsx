import React from "react";
import { StyledCharacterDescription } from "./CharacterDescription.styles";

export function CharacterDescription({ portrait, name }) {
  return (
    <StyledCharacterDescription>
      <img src={portrait} />
      <div>{name}</div>
    </StyledCharacterDescription>
  )
}