import React from "react";
import { useState } from "react";
import styled, { Keyframes, keyframes } from "styled-components";
import "../styles/ball.css";

//Props interface for Ball
interface IBallProps {
  size: number;
  positionX: number;
  positionY: number;
  color: string;
  isClick?: boolean;
}

const animation = (color: string): Keyframes => {
  return keyframes`
  to{
    box-shadow: 0 0 .3rem #fff,
              0 0 .3rem #fff,
              0 0 3rem ${color},
              0 0 0.8rem ${color},
              0 0 2.8rem ${color},
              inset 0 0 1.3rem ${color};
  }
`;
};

//Div styled element
const BallElement = styled.div<IBallProps>`
  width: ${(props) => `${props.size}px`};
  height: ${(props) => `${props.size}px`};
  border-radius: 50%;
  background-color: ${(props) => `${props.color}`};
  position: absolute;
  z-index: 3;
  top: ${(props) => `${props.positionY}px`};
  left: ${(props) => `${props.positionX}px`};
  transform: translate(-50%, -50%);
  animation-name: ${(props) => (props.isClick ? animation(props.color) : "")};
  animation-duration: 0.5s;
`;

const Ball: React.FC<IBallProps> = ({
  size,
  positionX,
  positionY,
  color,
}): JSX.Element => {
  const [isClick, setIsClick] = useState<boolean>(false);
  return (
    <BallElement
      onClick={() => setIsClick(true)}
      size={size}
      positionX={positionX}
      positionY={positionY}
      color={color}
      isClick={isClick}
    ></BallElement>
  );
};

export default Ball;
