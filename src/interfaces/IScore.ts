import IScoreElementProps from "./IScoreElementProps";

export default interface IScore extends IScoreElementProps {
  points: string;
  id?: string;
}
