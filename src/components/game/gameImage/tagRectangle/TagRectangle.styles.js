import styled from "styled-components";

export const StyledTagRectangle = styled.div`
  position: absolute;
  border: 3px solid green;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
`