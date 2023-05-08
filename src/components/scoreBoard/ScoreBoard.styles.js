import styled from "styled-components";

export const StyledScoreBoard = styled.div`
  position: fixed;
  top: 10%;
  left: 0;
  right: 0;
  margin: auto;
  padding: 10px;
  width: min(500px, 80%);
  height: min-content;
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
    font-size: 20px;
  }

  form > .input-container {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    border: 1px solid black;
  }

  .input-container > * {
    height: min-content;
    font-size: inherit;
    margin: 4px auto;
  }

  .input-container > label {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin: 4px auto;
  }

  .input-container > label > * {
    height: min-content;
    padding: 4px;
    margin: 4px auto;
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