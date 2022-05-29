/**
 * Create timer when game is start
 * @param min minimal range value
 * @param max maximum range value
 * @returns random number value form min - max range
 */
export function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

/**
 * Create random position on screen
 * @param size Size of ball
 * @returns position x and y in screen
 */
export const randomPositonBall = (size: number) => {
  let positionX = getRandomInt(0, window.innerWidth);
  let positionY = getRandomInt(104, window.innerHeight);
  const sizeInPx = size * 16;
  if (positionX + sizeInPx * 16 > window.innerWidth) {
    positionX = positionX - sizeInPx;
  }
  if (positionX - sizeInPx < 0) {
    positionX = positionX + sizeInPx;
  }
  if (positionY + sizeInPx > window.innerHeight) {
    positionY = positionY - sizeInPx;
  }
  if (positionY - sizeInPx < 104) {
    positionY = positionY + sizeInPx;
  }

  return { positionX, positionY };
};
