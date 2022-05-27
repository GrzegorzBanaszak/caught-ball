import React from "react";
import styled, { keyframes } from "styled-components";

//Props interface for Ball
interface IBallProps {
  ballId: string;
  size: number;
  positionX: number;
  positionY: number;
  color: string;
  points: number;
  onBallClick: (ballId: string, pointsToAdd: number) => void;
}

interface IBallElementProps {
  size: number;
  positionX: number;
  positionY: number;
  color: string;
}

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

//Div styled element
const BallElement = styled.div<IBallElementProps>`
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

const Ball: React.FC<IBallProps> = ({
  size,
  positionX,
  positionY,
  color,
  onBallClick,
  ballId,
  points,
}): JSX.Element => {
  const handleClickBall = () => {
    setTimeout(() => onBallClick(ballId, points), 100);
  };
  return (
    <BallElement
      onClick={handleClickBall}
      size={size}
      positionX={positionX}
      positionY={positionY}
      color={color}
    ></BallElement>
  );
};

export default Ball;
