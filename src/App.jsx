import React from "react";
import { initializeApp } from "firebase/app";
import { getFirebaseConfig } from "../firebase.config";

import { GlobalStyles } from "./GlobalStyles";
import { GameDescription } from "./components/game/gameDescription/GameDescription";
import { GameImage } from "./components/game/gameImage/GameImage";

const firebaseApp = initializeApp(getFirebaseConfig());

export function App() {
  return(
    <>
      <GlobalStyles />
      <GameDescription />
      <GameImage />
    </>
  )
}