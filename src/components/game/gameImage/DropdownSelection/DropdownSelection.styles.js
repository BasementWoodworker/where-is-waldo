import styled from "styled-components";

export const StyledDropdownSelection = styled.div`
  position: absolute;
  top: ${({ dropdownPosition }) => dropdownPosition.top + "px"};
  left: ${({ dropdownPosition }) => dropdownPosition.left + "px"};
  background-color: white;
  width: min-content;
  border: 2px solid black;
  border-radius: 4px;

  .choice-container {
    display: flex;
    border-radius: 4px;
    color: black;
    padding: 8px;
  }

  .choice-container:hover {
    box-shadow: 0 0 4px lightgrey;
  }

  .choice-container > * {
    pointer-events: none;
  }

  .choice-container > img {
    height: 50px;
    width: 50px;
  }

  .choice-container > span {
    display: flex;
    align-items: center;
    font-size: 20px;
  }
`