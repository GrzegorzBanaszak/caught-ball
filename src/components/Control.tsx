import React from "react";
import { GameStateEnum } from "../interfaces/GameStatEnum";
import styled, { keyframes } from "styled-components";
import ILevel from "../interfaces/ILevel";
import IMap from "../interfaces/IMap";
import { mapsCollection } from "../maps";
interface IControlProps {
  gameState: GameStateEnum;
  onClickStart: () => void;
  score: number;
  level: ILevel;
  map: IMap;
  selectLevel: (levelId: string) => void;
  changeStateOfGame: (state: GameStateEnum) => void;
}

const Container = styled.div`
  font-family: "Fredoka One", cursive;
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  h4 {
    font-weight: 400;
    text-align: center;
    color: white;
    font-size: 2rem;
    border-bottom: 3px solid white;
  }
`;

const LevelsList = styled.ul`
  margin: 3rem 0;
  display: flex;
  justify-content: center;
  list-style-type: none;
  font-size: 2rem;
  gap: 3rem;
`;

interface ILevelSelectProps {
  isSelect: boolean;
  color: string;
}
const LevelSelect = styled.li<ILevelSelectProps>`
  width: 4rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: black;
  border-radius: 10px;
  border: 2px solid #fff;
  ${(props) =>
    props.isSelect &&
    `box-shadow: 0 0 10px ${props.color}, 0 0 40px ${props.color}, 0 0 80px ${props.color};`}

  cursor: pointer;
`;

const changeStartButtonNeonColor = (color: string) => {
  return keyframes`
100% {
    /* Larger blur radius */
    text-shadow:
      0 0 4px #fff,
      0 0 11px #fff,
      0 0 19px #fff,
      0 0 40px ${color},
      0 0 80px ${color},
      0 0 90px ${color},
      0 0 100px ${color},
      0 0 150px ${color};
  }
  0% {
    /* Smaller blur radius */
    text-shadow:
      0 0 2px #fff,
      0 0 4px #fff,
      0 0 6px #fff,
      0 0 10px ${color},
      0 0 45px ${color},
      0 0 55px ${color},
      0 0 70px ${color},
      0 0 80px ${color};
  }
`;
};

const StartButton = styled.button<{ color: string }>`
  color: white;
  display: block;
  margin: 0 auto;
  padding: 2rem;
  outline: none;
  border: none;
  font-size: 5rem;
  background-color: transparent;
  animation: ${(props) => changeStartButtonNeonColor(props.color)} 2.5s infinite
    alternate;
  cursor: pointer;
`;

const TryAgainBtn = styled.button`
  color: black;
  background-color: white;
  display: block;
  margin: 0 auto;
  border-radius: 25px;
  padding: 2rem;
  outline: none;
  border: none;
  font-size: 2rem;
  text-transform: uppercase;
  cursor: pointer;
`;
const Result = styled.div`
  color: white;
  font-size: 5rem;
`;

const MapsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Map = styled.div`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MapBall = styled.div<{ color: string }>`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  box-shadow: 0 0 2px #fff, 0 0 4px #fff, 0 0 6px #fff,
    0 0 10px ${(props) => props.color}, 0 0 45px ${(props) => props.color},
    0 0 55px ${(props) => props.color}, 0 0 60px ${(props) => props.color},
    0 0 70px ${(props) => props.color};
  cursor: pointer;
`;
const MapName = styled.h3<{ color: string }>`
  margin-top: 0.5rem;
  text-align: center;
  font-size: 1.4rem;
  color: ${(props) => props.color};
`;
const Control: React.FC<IControlProps> = ({
  gameState,
  onClickStart,
  score,
  level,
  map,
  selectLevel,
  changeStateOfGame,
}): JSX.Element => {
  if (gameState === GameStateEnum.Start) {
    return (
      <Container>
        <MapsContainer>
          {mapsCollection.map((mapElement) => (
            <Map key={mapElement.id}>
              <MapBall color={mapElement.mapColor} />
              <MapName color={mapElement.mapColor}>{mapElement.name}</MapName>
            </Map>
          ))}
        </MapsContainer>
        <h4>Select Level</h4>
        <LevelsList>
          {map.levels.map((levelElement) => (
            <LevelSelect
              isSelect={level.id === levelElement.id}
              color={levelElement.levelColor}
              key={levelElement.id}
              onClick={() => selectLevel(levelElement.id)}
            >
              {levelElement.name}
            </LevelSelect>
          ))}
        </LevelsList>
        <StartButton color={level.levelColor} onClick={onClickStart}>
          Start
        </StartButton>
        ;
      </Container>
    );
  }
  if (gameState === GameStateEnum.Result) {
    return (
      <Container>
        <Result>You result is {score} pt </Result>;
        <TryAgainBtn onClick={() => changeStateOfGame(GameStateEnum.Start)}>
          Try again
        </TryAgainBtn>
      </Container>
    );
  }
  return <div>Controler</div>;
};

export default Control;
