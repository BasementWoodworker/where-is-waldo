import styled from "styled-components";

export const StyledGameDescription = styled.div`
  display: grid;
  place-content: center;
  color: white;

  & > * {
    margin: 10px 0;
  }

  h1 {
    grid-row: 1 / 3;
    text-align: center;
  }

  .characters {
    display: flex;
    gap: 50px;
    font-size: 48px;
  }

  .hide-button {
    font-size: 32px;
    place-self: center;
    cursor: pointer;
    width: 100px;
    text-align: center;
  }
`