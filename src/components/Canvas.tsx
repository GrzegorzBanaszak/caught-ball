import React from 'react'
import styled from 'styled-components'
import bg from '../assets/bg-canvas.svg'
import useGame from '../hooks/useGame'
import "../styles/canvas.css"
import Ball from './Ball'
import Navigation from './Navigation'

const StartButton = styled.button`
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
  text-shadow:
    0 0 7px #fff,
    0 0 10px #fff,
    0 0 21px #fff,
    0 0 42px #0fa,
    0 0 82px #0fa,
    0 0 92px #0fa,
    0 0 102px #0fa,
    0 0 151px #0fa;
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