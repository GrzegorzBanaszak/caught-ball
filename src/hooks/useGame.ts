import { useState, useEffect } from "react";
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

  const randomPositonBall = (
    PositionX: number,
    PositionY: number,
    size: number
  ) => {};

  useEffect(() => {
    if (balls.length === 0) {
      setBalls([createBall()]);
    }
  }, []);

  const createBall = (): IBall => {
    return {
      id: uuidv4(),
      size: 300,
      positionX: 300,
      positionY: 300,
      color: "red",
      points: 400,
    };
  };

  const removeBall = (ballId: string): void => {
    console.log("click");
    const filterdBalls = balls.filter((ball) => ball.id !== ballId);
    setBalls(filterdBalls);
  };

  return { balls, roundTime, score, removeBall };
};

export default useGame;
