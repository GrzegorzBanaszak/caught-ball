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
  level: ILevel;
  map: IMap;
  selectLevel: (levelId: string) => void;
  changeStateOfGame: (state: GameStateEnum) => void;
  selectMap: (mapId: string) => void;
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
      const timeIntervalId = createTimer(level.gameTime);
      return () => {
        window.clearInterval(timeIntervalId);
      };
    }
  }, [isPlaing]);

  useEffect(() => {
    if (isPlaing) {
      if (
        balls.length < level.ballsLimit &&
        roundTime > Math.ceil(level.timeOfBallDisplay[1] / 1000)
      )
        generateRandomBall();
    }
  }, [roundTime, isPlaing]);

  /**
   * Create timer when game is start
   * @param time Initial time in seconds
   * @returns return interval id
   */
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
  /**
   * Create timer when game is start
   * @param min minimal range value
   * @param max maximum range value
   * @returns random number value form min - max range
   */
  function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  /**
   * Create random position on screen
   * @param size Size of ball
   * @returns position x and y in screen
   */
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

  /**
   * Generate random ball from balls type and display on screen
   */
  const generateRandomBall = (): void => {
    const timeToShowAndRemove = getRandomInt(
      level.timeOfBallDisplay[0],
      level.timeOfBallDisplay[1]
    );
    const { size, color, points } = map.ballTypesForMap[getRandomInt(0, 9)];
    createBall(size, color, points, timeToShowAndRemove);
    setTimeout(() => {
      setBalls((prev) => [
        ...prev,
        createBall(size, color, points, timeToShowAndRemove),
      ]);
    }, timeToShowAndRemove);
  };

  /**
   * Create ball and add auto remove
   * @param size Size of ball
   * @param color Color ball
   * @param points Points on click ball
   * @param time Time to ball remove
   * @returns New ball
   */
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
  /**
   * Remove ball from balls list
   * @param ballId Id of ball to remove
   */
  const removeBall = (ballId: string): void => {
    setBalls((prev) => prev.filter((ball) => ball.id !== ballId));
  };
  /**
   * Remove ball on click and add points
   * @param ballId Id of ball to remove
   * @param pointsToAdd Points to add
   */
  const onBallClick = (ballId: string, pointsToAdd: number): void => {
    if (isPlaing) setScore((prev) => prev + pointsToAdd);
    setBalls((prev) => prev.filter((ball) => ball.id !== ballId));
  };
  /**
   * Start game on click
   */
  const onClickStart = (): void => {
    setIsPlaing(true);
    setGameState(GameStateEnum.Plaing);
  };

  /**
   * Change state of game
   * @param state What display
   */
  const changeStateOfGame = (state: GameStateEnum): void => {
    setGameState(state);
    setScore(0);
  };

  /**
   * Change current level
   * @param levelId Id selected level
   */
  const selectLevel = (levelId: string): void => {
    const selectedLevel = map.levels.find((level) => level.id === levelId);
    if (selectedLevel !== undefined) {
      setLevel(selectedLevel);
    }
  };
  /**
   * Change current map and level
   * @param mapId Id selected map
   */
  const selectMap = (mapId: string): void => {
    const selectedMap = mapsCollection.find((map) => map.id === mapId);
    if (selectedMap !== undefined) {
      setLevel(selectedMap.levels[0]);
      setMap(selectedMap);
    }
  };
  return {
    balls,
    roundTime,
    score,
    onBallClick,
    isPlaing,
    onClickStart,
    gameState,
    level,
    map,
    selectLevel,
    changeStateOfGame,
    selectMap,
  };
};

export default useGame;
