import React from 'react'
import bg from '../assets/bg-canvas.svg'
import useGame from '../hooks/useGame'
import "../styles/canvas.css"
import Ball from './Ball'
import Navigation from './Navigation'
const Canvas: React.FC = (): JSX.Element => {
  const { balls, removeBall
  } = useGame()


  return (
    <main style={{ backgroundImage: `url(${bg})` }} className="canvas-container">
      <Navigation />
      {balls.map((item) => {
        const { size, positionX, positionY, color, id } = item
        return <Ball removeBall={removeBall} key={id} ballId={id} size={size} positionX={positionX} positionY={positionY} color={color} />
      })}
    </main>
  )
}

export default Canvas