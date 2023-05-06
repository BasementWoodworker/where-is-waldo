import React, { useState } from "react";
import { StyledGameImage } from "./GameImage.styles";
import gameImage from "../../../assets/game-image.jpg";
import { DropdownSelection } from "./DropdownSelection/DropdownSelection";

const waldoPosition = {
  leftBorder: 0.490,
  rightBorder: 0.505,
  upperBorder: 0.047,
  lowerBorder: 0.114
}

const wendaPosition = {
  leftBorder: 0.490,
  rightBorder: 0.516,
  upperBorder: 0.905,
  lowerBorder: 0.975
}

export function GameImage({ db }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({top: 0, left: 0});
  const [currentTryPosition, setCurretTryPosition] = useState({x: 0, y: 0});

  function clickHandler(e) {
    const image = e.target;
    const offsetLeft = e.nativeEvent.offsetX;
    const offsetTop = e.nativeEvent.offsetY
    const clickX = offsetLeft / image.width;
    const clickY = offsetTop / image.height;
    setCurretTryPosition({x: clickX, y: clickY});

    setShowDropdown(true);
    setDropdownPosition({
      top: offsetTop + "px",
      left: offsetLeft + "px"
    })
  }

  return(
    <StyledGameImage>
      <img src={gameImage} onClick={clickHandler} />
      {showDropdown && <DropdownSelection 
        dropdownPosition={dropdownPosition}
        setShowDropdown={setShowDropdown}
        currentTryPosition={currentTryPosition}
        db={db} />
      }
    </StyledGameImage>
  )
}