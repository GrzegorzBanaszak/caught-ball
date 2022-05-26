import IBallType from "./IBallType";

export default interface IBall extends IBallType {
  id: string;
  positionX: number;
  positionY: number;
}
