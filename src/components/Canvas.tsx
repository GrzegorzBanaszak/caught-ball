import React from 'react'
import bg from '../assets/bg-canvas.svg'
import "../styles/canvas.css"
const Canvas = () => {
  return (
    <main style={{backgroundImage:`url(${bg})`}} className="canvas-container">Canvas</main>
  )
}

export default Canvas