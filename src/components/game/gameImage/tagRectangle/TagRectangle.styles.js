import styled from "styled-components";

export const StyledTagRectangle = styled.div`
  position: absolute;
  border: 3px solid green;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  height: ${(props) => props.height};
  width: ${(props) => props.width};

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }

  &:hover::after {
    position: absolute;
    top: -24px;
    font-size: 24px;
    font-weight: bold;
    content: "${(props) => props.characterName}"
  }
`