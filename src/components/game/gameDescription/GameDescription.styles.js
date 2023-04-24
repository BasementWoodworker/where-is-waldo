import styled from "styled-components";

export const StyledGameDescription = styled.div`
  display: grid;
  place-content: center;
  color: white;
  background-color: #2c2a2a;
  padding: 20px 0;
  h1 {
    grid-row: 1 / 3;
    text-align: center;
  }
  .characters {
    display: flex;
    gap: 50px;
    font-size: 48px;
  }
`