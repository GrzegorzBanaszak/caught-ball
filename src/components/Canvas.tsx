import React from 'react'
import bg from '../assets/bg-canvas.svg'
import "../styles/canvas.css"
import Navigation from './Navigation'
const Canvas = ():JSX.Element => {
  return (
    <main style={{backgroundImage:`url(${bg})`}} className="canvas-container">
        <Navigation/>
    </main>
  )
}

export default Canvas