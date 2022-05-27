import React from 'react'
import { GameStateEnum } from '../interfaces/GameStatEnum';
import styled, { keyframes } from 'styled-components'
interface IControlProps {
    gameState: string;
    onClickStart: () => void;
    score: number;
}
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
`

const StartButton = styled.button`
font-family: 'Fredoka One', cursive;
  position:absolute ;
  z-index:2;
  top: 50%;
  left: 50%;
  transform:translate(-50%,-50%) ;
  color:white;
  padding:2rem ;
  outline:none ;
  border:none ;
  font-size:5rem ;
  background-color:transparent;
  animation: ${StarButtonKeyfram} 2.5s infinite alternate;  
    cursor:pointer;
`

const Result = styled.div`
  position:absolute ;
  z-index:2;
  top: 50%;
  left: 50%;
  transform:translate(-50%,-50%) ;
  color:white;
  font-size:5rem ;
`
const Control: React.FC<IControlProps> = ({ gameState, onClickStart, score }): JSX.Element => {
    if (gameState === GameStateEnum.Start) {
        <StartButton onClick={onClickStart}>Start</StartButton>
    }
    if (gameState === GameStateEnum.Result) {
        <Result>You result is {score} pt </Result>
    }
    return (
        <div>Controler</div>
    )
}

export default Control