import React, { useState, useRef } from "react";
import { initializeApp } from "firebase/app";
import { 
  getFirestore,
  doc,
  getDoc
} from "firebase/firestore";
import { getFirebaseConfig } from "../firebase.config";

import { GlobalStyles } from "./GlobalStyles";
import { GameDescription } from "./components/game/gameDescription/GameDescription";
import { GameImage } from "./components/game/gameImage/GameImage";
import { ScoreBoard } from "./components/scoreBoard/ScoreBoard";
import { checkUserTry } from "./components/game/checkUserTry";

const firebaseApp = initializeApp(getFirebaseConfig());
const db = getFirestore(firebaseApp);

export function App() {
  const [charactersLeft, setCharactersLeft] = useState(["waldo", "wenda"]);
  const startTime = useRef(Date.now());
  const [resultTime, setResultTime] = useState(undefined);
  const [tagRectangles, setTagRectangles] = useState([]);
  const [currentTryPosition, setCurretTryPosition] = useState({x: 0, y: 0});
  const [currentImageHeight, setCurrentImageHeight] = useState(0);
  const [currentImageWidth, setCurrentImageWidth] = useState(0);
  const [guessMessage, setGuessMessage] = useState(null);
  let guessMessageTimeoutId = useRef();

  async function getCharacterPosition(character) {
    const docRef = doc(db, "character_positions", character);
    const docSnap = await getDoc(docRef);
    if (docSnap) return docSnap.data();
  }

  async function submitGuess(event) {
    const character = event.target.classList[0];
    if (character === "waldo" || character === "wenda") {
      const characterPosition = await getCharacterPosition(character);
      const result = checkUserTry(currentTryPosition, characterPosition);
      if (result) {
        if (charactersLeft.length !== 1) {
          setCharactersLeft(charactersLeft.filter(elem => elem !== character));
        } else {
          setResultTime((Date.now() - startTime.current) / 1000);
          setTimeout(() => setCharactersLeft([]), 700);
        }
        const newTagRectangle = {
          position: characterPosition,
          characterName: character,
        }
        setTagRectangles(tagRectangles.concat(newTagRectangle));
      }
      const newGuessMessage = {
        position: currentTryPosition,
        correct: result
      }
      setGuessMessage(newGuessMessage);
      clearTimeout(guessMessageTimeoutId.current);
      guessMessageTimeoutId.current = setTimeout(() => {
        setGuessMessage(null);
      }, 1500)
    }
  }

  return(
    <>
      <GlobalStyles />
      <GameDescription />
      <GameImage 
        db={db} 
        charactersLeft={charactersLeft} 
        setCharactersLeft={setCharactersLeft} 
        submitGuess={submitGuess} 
        setCurretTryPosition={setCurretTryPosition}
        currentImageHeight={currentImageHeight}
        currentImageWidth={currentImageWidth}
        setCurrentImageHeight={setCurrentImageHeight}
        setCurrentImageWidth={setCurrentImageWidth}
        tagRectangles={tagRectangles}
        guessMessage={guessMessage}
      />
      {charactersLeft.length === 0 ? <ScoreBoard db={db} resultTime={resultTime} /> : null}
    </>
  )
}