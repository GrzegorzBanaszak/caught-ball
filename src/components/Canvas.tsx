import React from 'react'
import styled, { keyframes } from 'styled-components'
import bg from '../assets/bg-canvas.svg'
import useGame from '../hooks/useGame'
import "../styles/canvas.css"
import Ball from './Ball'
import Navigation from './Navigation'

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
const Canvas: React.FC = (): JSX.Element => {
  const { balls, onBallClick, roundTime, score, isPlaing, onClickStart
  } = useGame()


  return (
    <main style={{ backgroundImage: `url(${bg})` }} className="canvas-container">
      <Navigation roundTime={roundTime} score={score} />
      {balls.map((item) => {
        const { size, positionX, positionY, color, id, points } = item
        return <Ball onBallClick={onBallClick} key={id} ballId={id} size={size} positionX={positionX} positionY={positionY} color={color} points={points} />
      })}
      {!isPlaing && <StartButton onClick={onClickStart}>Start</StartButton>}
    </main>
  )
}

export default Canvas