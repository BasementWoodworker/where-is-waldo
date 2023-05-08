import React, { useState } from "react";
import { StyledGameDescription } from "./GameDescription.styles";
import { CharacterDescription } from "./characterDescription/CharacterDescription";

import waldoImg from "../../../assets/waldo.png";
import wendaImg from "../../../assets/wenda.png";

export function GameDescription() {
  const [hidden, setHidden] = useState(true); 

  return(
    <StyledGameDescription>
      {
        !hidden ? 
          <h1>Find them on the picture</h1> :
          null
      }
      {
        !hidden ? 
          <div className="characters">
          <CharacterDescription portrait={waldoImg} name="Waldo" />
          <CharacterDescription portrait={wendaImg} name="Wenda" />
          </div> : 
          null
      }
      <div className="hide-button" onClick={() => setHidden(!hidden)}>{hidden ? "▽" : "△" }</div>
    </StyledGameDescription>
  )
}