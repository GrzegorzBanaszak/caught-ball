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
    const intervalId = window.setInterval(() => {
      setBalls((prev) => [...prev, createBall(100, "blue", 100)]);
    }, 2000);
    return () => {
      window.clearInterval(intervalId);
    };
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
    const id = uuidv4();
    // setTimeout(() => removeBall(id), 5000);
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

  return { balls, roundTime, score, removeBall };
};

export default useGame;
