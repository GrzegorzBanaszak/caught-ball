import React from "react";

import bg from "../assets/bg-canvas.svg";
import useGame from "../hooks/useGame";
import "../styles/canvas.css";
import Ball from "./Ball";
import Control from "./Control";
import Navigation from "./Navigation";

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
  } = useGame();

  return (
    <main
      style={{ backgroundImage: `url(${bg})` }}
      className="canvas-container"
    >
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
      {!isPlaing && (
        <Control
          map={map}
          level={level}
          onClickStart={onClickStart}
          gameState={gameState}
          score={score}
          selectLevel={selectLevel}
        />
      )}
    </main>
  );
};

export default Canvas;
