import React from "react";
import { GameStateEnum } from "../interfaces/GameStatEnum";
import styled, { keyframes } from "styled-components";
interface IControlProps {
    gameState: GameStateEnum;
    onClickStart: () => void;
    score: number;
}

const Container = styled.div`
  font-family: "Fredoka One", cursive;
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  h4{
      font-weight:400 ;
      text-align:center ;
      color:white;
      font-size:2rem ;
      border-bottom:3px solid white ;
      
  }
`;

const LevelsList = styled.ul`
    margin:3rem 0 ;
    display: flex ;
    justify-content:center ;
    list-style-type:none ;
    font-size:2rem ;
    gap:3rem;
    li{
        width:4rem ;
        height:4rem ;
        display:flex ;
        align-items:center ;
        justify-content:center ;
        background-color:white;
        color:black;
        border-radius:10px ;
        border:2px solid #fff ;
        box-shadow: 0 0 10px #0fa, 0 0 40px #0fa, 0 0 80px #0fa;
        cursor: pointer;
    }
`

const StarButtonKeyfram = keyframes`
100% {
    /* Larger blur radius */
    text-shadow:
      0 0 4px #fff,
      0 0 11px #fff,
      0 0 19px #fff,
      0 0 40px #0fa,
      0 0 80px #0fa,
      0 0 90px #0fa,
      0 0 100px #0fa,
      0 0 150px #0fa;
  }
  0% {
    /* Smaller blur radius */
    text-shadow:
      0 0 2px #fff,
      0 0 4px #fff,
      0 0 6px #fff,
      0 0 10px #0fa,
      0 0 45px #0fa,
      0 0 55px #0fa,
      0 0 70px #0fa,
      0 0 80px #0fa;
  }
`;

const StartButton = styled.button`
  color: white;
  display:block ;
  margin:0 auto ;
  padding: 2rem;
  outline: none;
  border: none;
  font-size: 5rem;
  background-color: transparent;
  animation: ${StarButtonKeyfram} 2.5s infinite alternate;
  cursor: pointer;
`;

const Result = styled.div`
  color: white;
  font-size: 5rem;
`;
const Control: React.FC<IControlProps> = ({
    gameState,
    onClickStart,
    score,
}): JSX.Element => {
    if (gameState === GameStateEnum.Start) {
        return (
            <Container>
                <h4>Select Level</h4>
                <LevelsList>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </LevelsList>
                <StartButton onClick={onClickStart}>Start</StartButton>;
            </Container>
        )


    }
    if (gameState === GameStateEnum.Result) {
        return (
            <Container>
                <Result>You result is {score} pt </Result>;
            </Container>
        )

    }
    return <div>Controler</div>;
};

export default Control;
