import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { 
  getFirestore
} from "firebase/firestore";
import { getFirebaseConfig } from "../firebase.config";

import { GlobalStyles } from "./GlobalStyles";
import { GameDescription } from "./components/game/gameDescription/GameDescription";
import { GameImage } from "./components/game/gameImage/GameImage";
import { ScoreBoard } from "./components/scoreBoard/ScoreBoard";

const firebaseApp = initializeApp(getFirebaseConfig());
const db = getFirestore(firebaseApp);

export function App() {
  const [charactersLeft, setCharactersLeft] = useState(["waldo", "wenda"]);
  const [startTime, setStartTime] = useState(Date.now());
  const [resultTime, setResultTime] = useState(undefined);

  useEffect(() => {
    if (charactersLeft.length === 0) setResultTime((Date.now() - startTime) / 1000);
  }, [charactersLeft])

  return(
    <>
      <GlobalStyles />
      <GameDescription />
      <GameImage db={db} charactersLeft={charactersLeft} setCharactersLeft={setCharactersLeft} />
      {charactersLeft.length === 2 ? <ScoreBoard db={db} resultTime={resultTime} /> : null}
    </>
  )
}