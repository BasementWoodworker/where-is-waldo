import styled from "styled-components";

export const StyledDropdownSelection = styled.div`
  position: absolute;
  top: ${({ dropdownPosition }) => dropdownPosition.top};
  left: ${({ dropdownPosition }) => dropdownPosition.left};
  background-color: rgba(0, 0, 0, 0.5);
  width: min-content;

  .choice-container {
    display: flex;
    border: 1px solid black;
    margin: 8px 0;
  }
  .choice-container > * {
    pointer-events: none;
  }
  .choice-container > img {
    height: 40px;
    width: 40px;
  }
  .choice-container > span {
    display: flex;
    align-items: center;
    font-size: 20px;
  }
`