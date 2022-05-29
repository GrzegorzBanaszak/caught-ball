import { keyframes } from "styled-components";
import styled from "styled-components";
import { IBallElementProps } from "../../interfaces/IBallElementProps";
//Div styled element
export const BallElement = styled.div<IBallElementProps>`
  cursor: pointer;
  width: ${(props) => `${props.size}rem`};
  height: ${(props) => `${props.size}rem`};
  border-radius: 50%;
  background-color: white;
  position: absolute;
  display: block;
  z-index: 3;
  top: ${(props) => `${props.positionY}px`};
  left: ${(props) => `${props.positionX}px`};
  animation: ${(props) => neonEffecApplay(props.color)} 0.4s infinite alternate;
  outline: none;
  -webkit-tap-highlight-color: transparent;
`;

const neonEffecApplay = (color: string) => keyframes`
  100% {
      box-shadow:
        0 0 4px #fff,
        0 0 11px #fff,
        0 0 19px #fff,
        0 0 40px ${color},
        0 0 80px ${color},
        0 0 90px ${color},
        0 0 100px ${color},
        0 0 150px ${color};
    }
  0% {
     box-shadow:
      0 0 2px #fff,
      0 0 4px #fff,
      0 0 6px #fff,
      0 0 10px ${color},
      0 0 45px ${color},
      0 0 55px ${color},
      0 0 70px ${color},
      0 0 80px ${color};
  }
`;
