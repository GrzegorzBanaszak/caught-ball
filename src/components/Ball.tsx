import React from 'react'

interface IBall {
    children: React.ReactNode
}

const Ball = ({children}:IBall):JSX.Element => {
  return (
    <div>Ball</div>
  )
}

export default Ball