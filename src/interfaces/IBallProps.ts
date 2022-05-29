import { IBallElementProps } from "./IBallElementProps";

//Props interface for Ball
export interface IBallProps extends IBallElementProps {
  ballId: string;
  points: number;
  onBallClick: (
    ballId: string,
    pointsToAdd: number,
    positionX: number,
    positonY: number
  ) => void;
}
