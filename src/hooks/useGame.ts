import { useEffect } from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import IBall from "../interfaces/IBall";

type GameReturnType = {
  balls: IBall[];
  roundTime: number;
  score: number;
  removeBall: (ballId: string) => void;
};

const useGame = (): GameReturnType => {
  const [balls, setBalls] = useState<IBall[]>([]);
  const [roundTime, setRoundTime] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    setBalls((prev) => [...prev, createBall(200, "red", 300)]);
  }, []);

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
    return {
      id: uuidv4(),
      size,
      positionX,
      positionY,
      color,
      points,
    };
  };

  const removeBall = (ballId: string): void => {
    const filterdBalls = balls.filter((ball) => ball.id !== ballId);
    setBalls(filterdBalls);
  };

  return { balls, roundTime, score, removeBall };
};

export default useGame;
