import IBallType from "./interfaces/IBallType";

/**
 * Create collection of balls
 * @param colorBall80 Color for ball of size 80px 30pt
 * @param colorBall60 Color for ball of size 60px 50pt
 * @param colorBall40 Color for ball of size 40px 70pt
 * @param colorBall30 Color for ball of size 30px 10pt
 * @returns Collection of balls
 */
export const getBallTypes = (
  colorBall80: string,
  colorBall60: string,
  colorBall40: string,
  colorBall30: string
): IBallType[] => {
  return [
    {
      size: 5,
      color: colorBall80,
      points: 30,
    },
    {
      size: 5,
      color: colorBall80,
      points: 30,
    },
    {
      size: 5,
      color: colorBall80,
      points: 30,
    },
    {
      size: 5,
      color: colorBall80,
      points: 30,
    },
    {
      size: 3.75,
      color: colorBall60,
      points: 50,
    },
    {
      size: 3.75,
      color: colorBall60,
      points: 50,
    },
    {
      size: 3.75,
      color: colorBall60,
      points: 50,
    },
    {
      size: 2.5,
      color: colorBall40,
      points: 70,
    },
    {
      size: 2.5,
      color: colorBall40,
      points: 70,
    },
    {
      size: 1.875,
      color: colorBall30,
      points: 100,
    },
  ];
};
