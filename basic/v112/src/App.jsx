import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [btnStyle, setBtnStyle] = useState({})
  const [input, setinput] = useState("Abhishek")
  const [fromData, setfromData] = useState({
    email: "" , 
    phone: ""
  })

  const handelclick = () => {
    alert("hey i am clicked")
  }

  // const handelmouseover = ()=>{
  //   setbtnstyle({ backgroundColor: "red" , color: "white" , fontSize: "20px"})
  // }

  // const handleonChange = (e) =>{
  //   setinput(e.target.value)
  // }

  const handleonChange = (e) =>{
    setfromData({ ...fromData, [e.target.name]: e.target.value })
    console.log(fromData.email , fromData.phone)
  }

  return (
    <>
      <div className="button">
        <button onClick={handelclick}>click me</button>
      </div>
      <div className="redbtn">
        <button
          onMouseOver={() => setBtnStyle({ backgroundColor: "red", color: "white" })}
          onMouseOut={() => setBtnStyle({})}  // Reset styles on mouse out
          style={btnStyle}
        >
          I am red
        </button>
      </div>
      <input type="text" placeholder='Search' name='email' value={fromData.email} onChange={handleonChange}/>
      <input type="phone" placeholder='Search' name='phone' value={fromData.phone} onChange={handleonChange}/>
    </>
  )
}

export default App
