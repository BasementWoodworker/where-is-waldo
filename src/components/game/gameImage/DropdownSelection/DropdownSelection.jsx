import React from "react";
import { StyledDropdownSelection } from "./DropdownSelection.styles";
import { Option } from "./Option";
import waldoImg from "../../../../assets/waldo.png";
import wendaImg from "../../../../assets/wenda.png";

export function DropdownSelection({ dropdownPosition, setShowDropdown, charactersLeft, submitGuess }) {
  async function clickHandler(e) {
    document.body.style.cursor = "wait";
    await submitGuess(e);
    document.body.style.cursor = "default";
    setShowDropdown(false);
  }

  return(
    <StyledDropdownSelection dropdownPosition={dropdownPosition} onClick={clickHandler}>
      {charactersLeft.includes("waldo") ? <Option name={"waldo"} image={waldoImg} /> : null}
      {charactersLeft.includes("wenda") ? <Option name={"wenda"} image={wendaImg} /> : null}
    </StyledDropdownSelection>
  )
}