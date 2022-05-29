import React from "react";
import IScoreProps from "../../interfaces/IScore";
import { ScoreContainer } from "./components";

const Scored: React.FC<IScoreProps> = ({
  positionX,
  positionY,
  color,
  points,
}): JSX.Element => {
  return (
    <ScoreContainer
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
      color={color}
      positionX={positionX}
      positionY={positionY}
    >
      +{points} PT
    </ScoreContainer>
  );
};

export default Scored;
