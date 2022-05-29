import styled from "styled-components";

export const CanvasContainer = styled.main<{ bgImage: string }>`
  width: 100%;
  height: 100vh;
  position: relative;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: ${(props) => `url(${props.bgImage})`};
  &:after {
    top: 0;
    left: 0;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
  }
`;
