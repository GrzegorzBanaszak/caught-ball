import React from "react";
import useGame from "../../hooks/useGame";
import Ball from "../Ball";
import Control from "../Control";
import Navigation from "../Navigation";
import Scored from "../Scored";
import { CanvasContainer } from "./components";

const Canvas: React.FC = (): JSX.Element => {
  const {
    balls,
    onBallClick,
    roundTime,
    score,
    isPlaing,
    onClickStart,
    gameState,
    level,
    map,
    selectLevel,
    changeStateOfGame,
    selectMap,
    scoreds,
  } = useGame();

  return (
    <CanvasContainer bgImage={require("../../assets/" + map.levelBackground)}>
      {isPlaing && <Navigation roundTime={roundTime} score={score} />}
      {balls.map((item) => {
        const { size, positionX, positionY, color, id, points } = item;
        return (
          <Ball
            onBallClick={onBallClick}
            key={id}
            ballId={id}
            size={size}
            positionX={positionX}
            positionY={positionY}
            color={color}
            points={points}
          />
        );
      })}
      {scoreds.map((scored) => {
        const { id, color, points, positionX, positionY } = scored;
        return (
          <Scored
            key={id}
            color={color}
            points={points}
            positionX={positionX}
            positionY={positionY}
          />
        );
      })}
      {!isPlaing && (
        <Control
          map={map}
          level={level}
          onClickStart={onClickStart}
          gameState={gameState}
          score={score}
          selectLevel={selectLevel}
          changeStateOfGame={changeStateOfGame}
          selectMap={selectMap}
        />
      )}
    </CanvasContainer>
  );
};

export default Canvas;
