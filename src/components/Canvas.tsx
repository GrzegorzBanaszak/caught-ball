import React from 'react'
import { useState } from 'react'
import bg from '../assets/bg-canvas.svg'
import IBall from '../interfaces/IBall'
import "../styles/canvas.css"
import Ball from './Ball'
import Navigation from './Navigation'
const Canvas: React.FC = (): JSX.Element => {
  const [balls, setBalls] = useState<IBall[]>([{
    size: 200,
    positionX: 200,
    positionY: 300,
    color: "red",
    points: 300
  }])
  return (
    <main style={{ backgroundImage: `url(${bg})` }} className="canvas-container">
      <Navigation />
      {balls.map((item, index) => {
        const { size, positionX, positionY, color } = item
        return <Ball size={size} positionX={positionX} positionY={positionY} color={color} />
      })}
    </main>
  )
}

export default Canvas