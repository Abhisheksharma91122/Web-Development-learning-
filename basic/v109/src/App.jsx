import { useState , useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const a = useRef(null)
  const textref = useRef()
  useEffect(() => {
    if (a.current.style.backgroundColor == "red") {
      a.current.style.backgroundColor = "blue"
    } else {
      a.current.style.backgroundColor = "red";
      console.log(textref.current.innerHTML)
    }
    console.log("the count is clicked")
  },[count])
  

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button ref={a} onClick={() => setCount((count) => count + 1)}>
          count is {count}
          <div ref={textref}>Abhishek</div>
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
