import React from 'react'
import "../styles/navigation.css"


const Navigation = ():JSX.Element => {
  return (
    <nav>
        <div className="nav-container">
            <div className="nav-info">Time</div>
            <div className="nav-info">Points</div>
            <div className="nav-info">Points to next level</div>

        </div>
    </nav>
  )
}

export default Navigation