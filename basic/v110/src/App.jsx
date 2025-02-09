import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showbtn, setShowbtn] = useState(false)

  const [todos, setTodos] = useState([
    {
      title: "Hey",
      desc: "I am todo"
    },
    {
      title: "Hey Another",
      desc: "I am good todo"
    },
    {
      title: "Hey Another of Abhi",
      desc: "I am good todo of grocery"
    },
  ])

  // const Todo = ({props}) => {
  //   return (<>
  //   <div>
  //     <div>{props.title}</div>
  //     <div>{props.desc}</div>
  //   </div>
  //   </>)
  // }

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
      {/* this is use when we only what to show conditional rendering and when only one rendering */}
      {showbtn ? <button>btn is true</button> : <button>btn is false</button>}
      {showbtn && <><button>this is working</button></>}
      {todos.map((todo) => {
        // return <Todo key={todo.title} props={todo}/>
        return (
            <div key={todo.title}>
              <div>{todo.title}</div>
              <div>{todo.desc}</div>
            </div>
        )
      })}
      <div className="card">
        <button onClick={() => setShowbtn(!showbtn)}>
          count is {count}
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
