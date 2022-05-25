import React from "react";
import styled from "styled-components";
import "../styles/ball.css";

interface IBallProps {
  size: number;
  positionX: number;
  positionY: number;
  color: string;
}
const BallElement = styled.div<IBallProps>`
  width: ${(props) => `${props.size}px`};
  height: ${(props) => `${props.size}px`};
  border-radius: 50%;
  background-color: ${(props) => `${props.color}`};
  position: absolute;
  z-index:3 ;
  top: ${(props) => `${props.positionX}px`};
  left: ${(props) => `${props.positionY}px`};
`;

const Ball: React.FC<IBallProps> = ({ size, positionX, positionY, color }): JSX.Element => {
  return <BallElement size={size} positionX={positionX
  } positionY={positionY} color={color}></BallElement>;
};

export default Ball;
