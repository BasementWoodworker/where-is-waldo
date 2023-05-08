import React, { useState, useEffect, createRef } from "react";
import { StyledScoreBoard } from "./ScoreBoard.styles";
import { 
  addDoc,
  collection,
  getDocs
} from "firebase/firestore";

export function ScoreBoard({ db, resultTime }) {
  async function getLeaderboard() {
    const leaderboardSnapshot = await getDocs(collection(db, "leaderboard"));
    return leaderboardSnapshot.docs;
  }

  async function updateLeaderboard() {
    const leaderboardData = await getLeaderboard();
    leaderboardData.sort((prev, current) => {
      return Object.values(prev.data())[0] - Object.values(current.data())[0];
    })
    const jsxArray = leaderboardData.map(doc => {
      const [[name, time]] = Object.entries(doc.data())
      return (
        <div className="player-score" key={doc.id}>
          <span className="name">{name}</span>
          <span>{time + "s"}</span>
        </div>
      )
    })
    setLeaderboard(jsxArray);
  }

  async function submitHandler(e) {
    e.preventDefault();
    await addDoc(collection(db, "leaderboard"), {
      [inputContainerRef.current.querySelector("input").value]: resultTime
    });
    inputContainerRef.current.remove();
    updateLeaderboard();  
  }

  const [leaderboard, setLeaderboard] = useState([]);
  const inputContainerRef = createRef();

  useEffect(() => {
    updateLeaderboard()
  }, []);

  return(
    <StyledScoreBoard>
      <h2>Leaderboard</h2>
      <div className="leaderboard">{leaderboard}</div>
      <form onSubmit={submitHandler}>
        <div className="record">{"You have finished the game in " + resultTime + " seconds"}</div>
        <div className="input-container" ref={inputContainerRef}>
          <label>
            <span>Enter your name</span>
            <input type="text" maxLength="20" />
          </label>
          <button>submit</button>
        </div>
      </form>
      <a href="/" className="restart">Restart</a>
    </StyledScoreBoard>
  )
}