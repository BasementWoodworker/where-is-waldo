import React from "react";
import { StyledDropdownSelection } from "./DropdownSelection.styles";
import { doc, getDoc } from "firebase/firestore";

import { Option } from "./Option";
import waldoImg from "../../../../assets/waldo.png";
import wendaImg from "../../../../assets/wenda.png";
import { checkUserTry } from "../../checkUserTry";

export function DropdownSelection({ dropdownPosition, setShowDropdown, currentTryPosition, db, charactersLeft, setCharactersLeft }) {
  async function getCharacterPosition(character) {
    const docRef = doc(db, "character_positions", character);
    const docSnap = await getDoc(docRef);
    if (docSnap) return docSnap.data();
  }

  async function clickHandler(e) {
    const character = e.target.classList[0];
    if (character === "waldo" || character === "wenda") {
      const characterPosition = await getCharacterPosition(character);
      const result = checkUserTry(currentTryPosition, characterPosition);
      if (result) {
        setCharactersLeft(charactersLeft.filter(elem => elem !== character));
      }
    }
    setShowDropdown(false);
  }

  return(
    <StyledDropdownSelection dropdownPosition={dropdownPosition} onClick={clickHandler}>
      {charactersLeft.includes("waldo") ? <Option name={"waldo"} image={waldoImg} /> : null}
      {charactersLeft.includes("wenda") ? <Option name={"wenda"} image={wendaImg} /> : null}
    </StyledDropdownSelection>
  )
}