import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import "../styles/ball.css";

//Props interface for Ball
interface IBallProps {
  ballId: string
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

//Div styled element
const BallElement = styled(motion.div) <IBallElementProps>`
  width: ${(props) => `${props.size}px`};
  height: ${(props) => `${props.size}px`};
  border-radius: 50%;
  background-color: ${(props) => `${props.color}`};
  position: absolute;
  display:block ;
  z-index: 3;
  top: ${(props) => `${props.positionY}px`};
  left: ${(props) => `${props.positionX}px`};
`;

const Ball: React.FC<IBallProps> = ({
  size,
  positionX,
  positionY,
  color,
  onBallClick,
  ballId,
  points
}): JSX.Element => {

  const handleClickBall = () => {
    setTimeout(() => onBallClick(ballId, points), 100)
  }
  return (
    <BallElement
      whileTap={{
        boxShadow: `0 0 .5rem #fff,
              0 0 .5rem #fff,
              0 0 3rem ${color},
              0 0 0.8rem ${color},
              0 0 2.8rem ${color},
              inset 0 0 1.3rem ${color}`,
        transition: {
          duration: 0.2
        }
      }}
      onClick={handleClickBall}
      size={size}
      positionX={positionX}
      positionY={positionY}
      color={color}
    ></BallElement>
  )
};

export default Ball;
