import React, { useState, useEffect } from "react";
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
import { TagRectangle } from "./components/game/gameImage/tagRectangle/TagRectangle";
import { checkUserTry } from "./components/game/checkUserTry";

const firebaseApp = initializeApp(getFirebaseConfig());
const db = getFirestore(firebaseApp);

export function App() {
  const [charactersLeft, setCharactersLeft] = useState(["waldo", "wenda"]);
  const [startTime, setStartTime] = useState(Date.now());
  const [resultTime, setResultTime] = useState(undefined);
  const [tagRectangles, setTagRectangles] = useState([]);
  const [currentTryPosition, setCurretTryPosition] = useState({x: 0, y: 0});
  const [currentImageHeight, setCurrentImageHeight] = useState(0);
  const [currentImageWidth, setCurrentImageWidth] = useState(0);

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
        setCharactersLeft(charactersLeft.filter(elem => elem !== character));
        console.log(currentImageHeight);
        console.log(currentImageWidth);
        const newTagRectangle = {
          position: characterPosition,
          characterName: character,
        }
        setTagRectangles(tagRectangles.concat(newTagRectangle));
      }
    }
  }

  useEffect(() => {
    if (charactersLeft.length === 0) setResultTime((Date.now() - startTime) / 1000);
  }, [charactersLeft])

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
      />
      {charactersLeft.length === 0 ? <ScoreBoard db={db} resultTime={resultTime} /> : null}
    </>
  )
}