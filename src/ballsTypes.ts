import IBallType from "./interfaces/IBallType";

export const ballTypes: IBallType[] = [
  {
    size: 80,
    color: "#e53935",
    points: 30,
  },
  {
    size: 80,
    color: "#e53935",
    points: 30,
  },
  {
    size: 80,
    color: "#e53935",
    points: 30,
  },
  {
    size: 80,
    color: "#e53935",
    points: 30,
  },
  {
    size: 60,
    color: "#e91e63",
    points: 50,
  },
  {
    size: 60,
    color: "#e91e63",
    points: 50,
  },
  {
    size: 60,
    color: "#e91e63",
    points: 50,
  },
  {
    size: 40,
    color: "#4527a0",
    points: 70,
  },
  {
    size: 40,
    color: "#4527a0",
    points: 70,
  },
  {
    size: 30,
    color: "#ffff00",
    points: 100,
  },
];

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
      size: 80,
      color: colorBall80,
      points: 30,
    },
    {
      size: 80,
      color: colorBall80,
      points: 30,
    },
    {
      size: 80,
      color: colorBall80,
      points: 30,
    },
    {
      size: 80,
      color: colorBall80,
      points: 30,
    },
    {
      size: 60,
      color: colorBall60,
      points: 50,
    },
    {
      size: 60,
      color: colorBall60,
      points: 50,
    },
    {
      size: 60,
      color: colorBall60,
      points: 50,
    },
    {
      size: 40,
      color: colorBall40,
      points: 70,
    },
    {
      size: 40,
      color: colorBall40,
      points: 70,
    },
    {
      size: 30,
      color: colorBall30,
      points: 100,
    },
  ];
};
