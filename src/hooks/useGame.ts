import { useEffect } from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import IBall from "../interfaces/IBall";

type GameReturnType = {
  balls: IBall[];
  roundTime: number;
  score: number;
  isPlaing: boolean;
  onBallClick: (ballId: string, pointsToAdd: number) => void;
  onClickStart: () => void;
};

const useGame = (): GameReturnType => {
  const [balls, setBalls] = useState<IBall[]>([]);
  const [roundTime, setRoundTime] = useState<number>(0);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [isPlaing, setIsPlaing] = useState(false);
  useEffect(() => {
    if (isPlaing) {
      const timeIntervalId = createTimer(10);
      const intervalId = window.setInterval(() => {
        setBalls((prev) => [...prev, createBall(100, "blue", 100)]);
      }, 2000);
      return () => {
        window.clearInterval(timeIntervalId);
        window.clearInterval(intervalId);
      };
    }
  }, [isPlaing]);

  const createTimer = (time: number): number => {
    const timeIntervalId = window.setInterval(() => {
      setRoundTime((prev) => {
        if (prev === 0) {
          return time;
        } else {
          if (prev - 2 < 0) {
            setIsPlaing(false);
            setBalls([]);
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

  const createBall = (size: number, color: string, points: number): IBall => {
    const { positionX, positionY } = randomPositonBall(size);
    const id = uuidv4();
    setTimeout(() => removeBall(id), 5000);
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
    setScore((prev) => prev + pointsToAdd);
    setBalls((prev) => prev.filter((ball) => ball.id !== ballId));
  };

  const onClickStart = (): void => {
    setIsPlaing(true);
  };

  return { balls, roundTime, score, onBallClick, isPlaing, onClickStart };
};

export default useGame;
