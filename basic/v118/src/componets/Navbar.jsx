import React ,{memo} from 'react'

const Navbar = ({adjective, getAdjective}) => {
    console.log("Navbar is rendering")
  return (
    <div>
      this is {adjective} Navbar
      <button onClick={()=>{getAdjective()}}>{getAdjective()}</button>
    </div>
  )
}

export default memo(Navbar)
