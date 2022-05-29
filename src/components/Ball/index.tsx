import { IBallProps } from "../../interfaces/IBallProps";
import { BallElement } from "./components";

const Ball: React.FC<IBallProps> = ({
  size,
  positionX,
  positionY,
  color,
  onBallClick,
  ballId,
  points,
}): JSX.Element => {
  const handleClickBall = () => {
    setTimeout(() => onBallClick(ballId, points, positionX, positionY), 100);
  };
  return (
    <BallElement
      onClick={handleClickBall}
      size={size}
      positionX={positionX}
      positionY={positionY}
      color={color}
    ></BallElement>
  );
};

export default Ball;
