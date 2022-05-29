import { GameStateEnum } from "./GameStatEnum";
import IBall from "./IBall";
import ILevel from "./ILevel";
import IMap from "./IMap";
import IScore from "./IScore";

export type GameReturnType = {
  balls: IBall[];
  roundTime: number;
  score: number;
  isPlaing: boolean;
  gameState: GameStateEnum;
  onBallClick: (
    ballId: string,
    pointsToAdd: number,
    positionX: number,
    positonY: number
  ) => void;
  onClickStart: () => void;
  level: ILevel;
  map: IMap;
  selectLevel: (levelId: string) => void;
  changeStateOfGame: (state: GameStateEnum) => void;
  selectMap: (mapId: string) => void;
  scoreds: IScore[];
};
