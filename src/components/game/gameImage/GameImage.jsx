import React, { useState, useEffect, createRef, useRef } from "react";
import { StyledGameImage } from "./GameImage.styles";
import gameImage from "../../../assets/game-image.jpg";
import { DropdownSelection } from "./DropdownSelection/DropdownSelection";
import { TagRectangle } from "./tagRectangle/TagRectangle";
import { GuessMessage } from "./guessMessage/GuessMessage";

export function GameImage({ 
  charactersLeft, 
  submitGuess, 
  tagRectangles, 
  guessMessage,
  setCurretTryPosition, 
  currentImageHeight, 
  currentImageWidth, 
  setCurrentImageHeight, 
  setCurrentImageWidth 
  }) {
    const [showDropdown, setShowDropdown] = useState(false);
    const [dropdownPosition, setDropdownPosition] = useState({top: 0, left: 0});
    const gameImageRef = createRef();
    let dropdownTimeoutId = useRef(null);

    function clickHandler(e) {
      const image = e.target;
      const offsetLeft = e.nativeEvent.offsetX;
      const offsetTop = e.nativeEvent.offsetY
      const clickX = offsetLeft / image.width;
      const clickY = offsetTop / image.height;
      setCurretTryPosition({x: clickX, y: clickY});
      setShowDropdown(true);
      setDropdownPosition({
        top: offsetTop,
        left: offsetLeft
      })
      clearTimeout(dropdownTimeoutId.current);
      dropdownTimeoutId.current = setTimeout(() => {
        setShowDropdown(false);
      }, 7000);
    }

    useEffect(() => {
      gameImageRef.current.onload = function(e) {
        // Wait for the image to load so height is not set to 0;
        setCurrentImageHeight(e.target.height);
        setCurrentImageWidth(e.target.width);
      }

      let timeoutId = null;
      function resizeListener() {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(function() {
          const gameImage = document.querySelector(".game-image");
          setCurrentImageHeight(gameImage.height);
          setCurrentImageWidth(gameImage.width);
        }, 100)
      }
      window.addEventListener("resize", resizeListener);

      return function cleanup() {
        window.removeEventListener("resize", resizeListener);
      }
    }, [])

    return(
      <StyledGameImage>
        <img className="game-image" src={gameImage} alt="game image" onClick={clickHandler} ref={gameImageRef} />
        {showDropdown && <DropdownSelection 
          dropdownPosition={dropdownPosition}
          setShowDropdown={setShowDropdown}
          charactersLeft={charactersLeft}
          submitGuess={submitGuess}
          />}
        {tagRectangles.map(rect => {
          return <TagRectangle 
            position={rect.position}
            characterName={rect.characterName}
            currentImageHeight={currentImageHeight}
            currentImageWidth={currentImageWidth}
            key={rect.character}
          />
          })}
        {guessMessage ? <GuessMessage 
          position={guessMessage.position} 
          correct={guessMessage.correct} 
          currentImageHeight={currentImageHeight} 
          currentImageWidth={currentImageWidth} 
          /> :
          null}
      </StyledGameImage>
    )
  }