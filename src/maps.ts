import { getBallTypes } from "./ballsTypes";
import IMap from "./interfaces/IMap";

export const mapsCollection: IMap[] = [
  {
    id: "44d47291-d773-41e3-bdb4-e659fcedb214",
    name: "Cosmos",
    levels: [
      {
        id: "1936d086-d704-425c-a735-df768888caf3",
        name: "1",
        ballsLimit: 30,
        timeOfBallDisplay: [1000, 3000],
        gameTime: 60,
        levelColor: "#fff9c4",
      },
      {
        id: "d79d7874-2e3a-4ba1-9877-0a35ca939a6e",
        name: "2",
        ballsLimit: 60,
        timeOfBallDisplay: [800, 2500],
        gameTime: 40,
        levelColor: "#fff59d",
      },
      {
        id: "fb55e93f-315b-4f53-9d23-95ea4d7428e0",
        name: "3",
        ballsLimit: 90,
        timeOfBallDisplay: [600, 2000],
        gameTime: 30,
        levelColor: "#fff176",
      },
    ],
    mapColor: "#fffde7",
    ballTypesForMap: getBallTypes("#fff176", "#ffeb3b", "#fbc02d", "#f57f17"),
  },
  {
    id: "089168e0-5884-4346-9967-c720f0cd4bd1",
    name: "Sea",
    levels: [
      {
        id: "089168e0-5884-4346-9967-c720f0cd4bd1",
        name: "1",
        ballsLimit: 30,
        timeOfBallDisplay: [1000, 3000],
        gameTime: 60,
        levelColor: "#90caf9",
      },
      {
        id: "fe8529bb-2981-4dc4-83fe-d7db002082f7",
        name: "2",
        ballsLimit: 60,
        timeOfBallDisplay: [800, 2500],
        gameTime: 40,
        levelColor: "#42a5f5",
      },
      {
        id: "8b7f2177-1612-46f7-b6cc-2444a28af9d9",
        name: "3",
        ballsLimit: 90,
        timeOfBallDisplay: [600, 2000],
        gameTime: 30,
        levelColor: "#1e88e5",
      },
    ],
    mapColor: "#90caf9",
    ballTypesForMap: getBallTypes("#64b5f6", "#2196f3", "#1976d2", "#0d47a1"),
  },
];
