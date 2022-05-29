import { GameStateEnum } from "../../interfaces/GameStatEnum";
import { IControlProps } from "../../interfaces/IControlProps";
import { mapsCollection } from "../../maps";
import {
  Container,
  LevelSelect,
  LevelsList,
  Map,
  MapBall,
  MapName,
  MapsContainer,
  Result,
  StartButton,
  TryAgainBtn,
} from "./components";

const Control: React.FC<IControlProps> = ({
  gameState,
  onClickStart,
  score,
  level,
  map,
  selectLevel,
  changeStateOfGame,
  selectMap,
}): JSX.Element => {
  if (gameState === GameStateEnum.Start) {
    return (
      <Container>
        <MapsContainer>
          {mapsCollection.map((mapElement) => (
            <Map key={mapElement.id}>
              <MapBall
                color={mapElement.mapColor}
                onClick={() => selectMap(mapElement.id)}
              />
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
      </Container>
    );
  }
  if (gameState === GameStateEnum.Result) {
    return (
      <Container>
        <Result>You result is {score} pt </Result>
        <TryAgainBtn onClick={() => changeStateOfGame(GameStateEnum.Start)}>
          Try again
        </TryAgainBtn>
      </Container>
    );
  }
  return <div>Controler</div>;
};

export default Control;
