import React from "react";
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

const firebaseApp = initializeApp(getFirebaseConfig());
const db = getFirestore(firebaseApp);

export function App() {
  return(
    <>
      <GlobalStyles />
      <GameDescription />
      <GameImage db={db} />
    </>
  )
}