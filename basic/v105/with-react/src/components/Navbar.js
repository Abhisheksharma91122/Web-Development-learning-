import React from 'react'

const navbar = ({Logotext}) => {
  return (
    <div>
        <div className="logo">{Logotext}</div>
      <ul>
        <li>Home</li>
        <li>Contact</li>
        <li>About me</li>
      </ul>
    </div>
  )
}

export default navbar
