import { GameStateEnum } from "./GameStatEnum";
import ILevel from "./ILevel";
import IMap from "./IMap";

export interface IControlProps {
  gameState: GameStateEnum;
  onClickStart: () => void;
  score: number;
  level: ILevel;
  map: IMap;
  selectLevel: (levelId: string) => void;
  changeStateOfGame: (state: GameStateEnum) => void;
  selectMap: (mapId: string) => void;
}
