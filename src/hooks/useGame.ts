import { ballTypes } from "./../ballsTypes";
import { useEffect } from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import IBall from "../interfaces/IBall";
import { GameStateEnum } from "../interfaces/GameStatEnum";
import { mapsCollection } from "../maps";
import IMap from "../interfaces/IMap";
import ILevel from "../interfaces/ILevel";
type GameReturnType = {
  balls: IBall[];
  roundTime: number;
  score: number;
  isPlaing: boolean;
  gameState: GameStateEnum;
  onBallClick: (ballId: string, pointsToAdd: number) => void;
  onClickStart: () => void;
};

const useGame = (): GameReturnType => {
  const [balls, setBalls] = useState<IBall[]>([]);
  const [roundTime, setRoundTime] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [map, setMap] = useState<IMap>(mapsCollection[0]);
  const [level, setLevel] = useState<ILevel>(mapsCollection[0].levels[0]);
  const [gameState, setGameState] = useState<GameStateEnum>(
    GameStateEnum.Start
  );
  const [isPlaing, setIsPlaing] = useState(false);

  useEffect(() => {
    if (isPlaing) {
      const timeIntervalId = createTimer(30);
      // generateRandomBall();

      return () => {
        window.clearInterval(timeIntervalId);
      };
    }
  }, [isPlaing]);

  useEffect(() => {
    if (isPlaing) {
      if (balls.length < 40 && roundTime > 4) generateRandomBall();
    }
  }, [roundTime, isPlaing]);

  const createTimer = (time: number): number => {
    const timeIntervalId = window.setInterval(() => {
      setRoundTime((prev) => {
        if (prev === 0) {
          return time;
        } else {
          if (prev - 2 < 0) {
            setIsPlaing(false);
            setBalls([]);
            setGameState(GameStateEnum.Result);
          }
          return prev - 1;
        }
      });
    }, 1000);
    return timeIntervalId;
  };

  function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const randomPositonBall = (size: number) => {
    let positionX = getRandomInt(0, window.innerWidth);
    let positionY = getRandomInt(104, window.innerHeight);
    if (positionX + size > window.innerWidth) {
      positionX = positionX - size;
    }
    if (positionX - size < 0) {
      positionX = positionX + size;
    }
    if (positionY + size > window.innerHeight) {
      positionY = positionY - size;
    }
    if (positionY - size < 104) {
      positionY = positionY + size;
    }

    return { positionX, positionY };
  };

  const generateRandomBall = (): void => {
    const timeToShowAndRemove = getRandomInt(1000, 3000);
    const { size, color, points } = ballTypes[getRandomInt(0, 9)];
    createBall(size, color, points, timeToShowAndRemove);
    setTimeout(() => {
      setBalls((prev) => [
        ...prev,
        createBall(size, color, points, timeToShowAndRemove),
      ]);
    }, timeToShowAndRemove);
  };

  const createBall = (
    size: number,
    color: string,
    points: number,
    time: number
  ): IBall => {
    const { positionX, positionY } = randomPositonBall(size);
    const id = uuidv4();
    setTimeout(() => removeBall(id), time);
    return {
      id,
      size,
      positionX,
      positionY,
      color,
      points,
    };
  };

  const removeBall = (ballId: string): void => {
    setBalls((prev) => prev.filter((ball) => ball.id !== ballId));
  };

  const onBallClick = (ballId: string, pointsToAdd: number): void => {
    if (isPlaing) setScore((prev) => prev + pointsToAdd);
    setBalls((prev) => prev.filter((ball) => ball.id !== ballId));
  };

  const onClickStart = (): void => {
    setIsPlaing(true);
    setGameState(GameStateEnum.Plaing);
  };

  return {
    balls,
    roundTime,
    score,
    onBallClick,
    isPlaing,
    onClickStart,
    gameState,
  };
};

export default useGame;
