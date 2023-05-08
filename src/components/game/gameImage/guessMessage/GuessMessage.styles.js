import styled from "styled-components";

export const StyledGuessMessage = styled.div`
  position: absolute;
  top: ${(props) => props.top + "px"};
  left: ${(props) => props.left + "px"};
  font-size: 24px;
  background-color: ${({ correct }) => correct ? "green" : "orangered"};
  color: white;
  border: 2px solid white;
  border-radius: 5px;
  padding: 4px;
`