import React from 'react'
import bg from '../assets/bg-canvas.svg'
import "../styles/canvas.css"
import Ball from './Ball'
import Navigation from './Navigation'
const Canvas: React.FC = ():JSX.Element => {
  return (
    <main style={{backgroundImage:`url(${bg})`}} className="canvas-container">
        <Navigation/>
        <Ball/>
    </main>
  )
}

export default Canvas