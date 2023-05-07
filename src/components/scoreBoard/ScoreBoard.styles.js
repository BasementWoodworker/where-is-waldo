import styled from "styled-components";

export const StyledScoreBoard = styled.div`
  position: fixed;
  top: 10%;
  left: 0;
  right: 0;
  margin: auto;
  padding: 10px;
  width: min(500px, 80%);
  height: min(650px, 90%);
  font-size: 30px;
  text-align: center;
  background-color: white;
  border: 2px solid black;
  border-radius: 10px;
  overflow-y: scroll;

  & > * {
    margin: 20px;
  }

  .leaderboard {
    border: 1px solid black;
    max-height: 230px;
    overflow-y: scroll;
  }

  .leaderboard > .player-score {
    display: flex;
    justify-content: space-between;
    padding: 5px 10px;
  }

  .player-score > .name {
    text-overflow: ellipsis;
    overflow: hidden;
    margin-right: 50px;
  }

  form > * {
    margin: 20px;
  }

  form > .input-container {
    display: flex;
  }

  .input-container > label {
    display: flex;
  }

  .input-container input {
    
  }

  a.restart {
    display: inline-block;
    text-decoration: none;
    color: inherit;
    border: 2px outset grey;
    padding: 8px;
  }

  a.restart:active {
    transform: scale(0.95);
  }
`