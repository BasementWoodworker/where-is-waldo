import React from "react";
import { StyledDropdownSelection } from "./DropdownSelection.styles";
import { doc, getDoc } from "firebase/firestore";

import waldoImg from "../../../../assets/waldo.png";
import wendaImg from "../../../../assets/wenda.png";
import { checkUserTry } from "../../checkUserTry";

export function DropdownSelection({ dropdownPosition, setShowDropdown, currentTryPosition, db }) {
  async function getCharacterPosition(character) {
    const docRef = doc(db, "character_positions", character);
    const docSnap = await getDoc(docRef);
    if (docSnap) return docSnap.data();
  }

  async function clickHandler(e) {
    const character = e.target.classList[0];
    if (character === "waldo" || character === "wenda") {
      const characterPosition = await getCharacterPosition(character);
      console.log(checkUserTry(currentTryPosition, characterPosition)) 
    }
    setShowDropdown(false);
  }

  return(
    <StyledDropdownSelection dropdownPosition={dropdownPosition} onClick={clickHandler}>
      <div className="waldo choice-container">
        <img src={waldoImg} />
        <span>Waldo</span>
      </div>
      <div className="wenda choice-container">
        <img src={wendaImg} />
        <span>Wenda</span>
      </div>
    </StyledDropdownSelection>
  )
}