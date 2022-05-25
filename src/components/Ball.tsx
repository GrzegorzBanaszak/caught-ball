import React from "react";
import styled from "styled-components";
import "../styles/ball.css";
interface IBallProps {
  children: React.ReactNode;
}

interface IBallElementProps {
  size: number;
  positionX: number;
  positionY: number;
  color: string;
}
const BallElement = styled.div<IBallElementProps>`
  width: ${(props) => `${props.size}px`};
  height: ${(props) => `${props.size}px`};
  border-radius: 50%;
  background-color: ${(props) => `${props.color}`};
  position: absolute;
  z-index:3 ;
  top: ${(props) => `${props.positionX}px`};
  left: ${(props) => `${props.positionY}px`};
`;

const Ball = (): JSX.Element => {
  return <BallElement size={100} positionX={40} positionY={100} color={"green"}></BallElement>;
};

export default Ball;
