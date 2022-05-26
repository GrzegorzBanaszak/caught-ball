import React from 'react'
import "../styles/navigation.css"

interface INavigation {
  roundTime: number;
  score: number;
}

const Navigation: React.FC<INavigation> = ({ roundTime, score }): JSX.Element => {
  return (
    <nav>
      <div className="nav-container">
        <div className="nav-info">Time {`${Math.floor(roundTime / 60)}:${roundTime % 60}`}</div>
        <div className="nav-info">Points {score}</div>
        <div className="nav-info">Points to next level</div>

      </div>
    </nav>
  )
}

export default Navigation