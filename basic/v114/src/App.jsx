import { useState } from 'react'
import Navbar from './Components/Navbar'

function App() {

  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])

  const HandleAdd = ()=>{
    setTodos([...todos,{todo, isCompleted : false}])
    setTodo("")
    console.log(todos)
  }
  const HandleEdit = ()=>{

  }
  const HandleDelete = ()=>{

  }
  const HandleChange = (e)=>{
    setTodo(e.target.value)
  }

  return (
    <>
    <Navbar/>
      <div className="container mx-auto bg-indigo-50 my-5 rounded-xl py-2 w-[90%] min-h-[80vh]">
        <div className="addTodos">
          <h2 className='font-bold text-lg'>Add a Todo</h2>
          <input onChange={HandleChange} value={todo} type="text" className='w-1/2 bg-white' />
          <button onClick={HandleAdd} className='bg-violet-900 hover:bg-violet-950 p-2 py-1 text-sm font-bold mx-8 rounded-md text-white cursor-pointer'>Add</button>
        </div>
        <div className="">
          <h1 className='font-bold text-lg'>Your Todos</h1>
        </div>
        <div className="Todos">
          {todos.map(item=>{

          
          <div className="Todo flex">
            <div className={item.isCompleted?"":"line-through"}>{item.todo}</div>
            <div className="buttons">
              <button onClick={HandleEdit} className='bg-violet-900 hover:bg-violet-950 p-2 py-1 text-sm font-bold mx-2 rounded-md text-white cursor-pointer'>Edit</button>
              <button onClick={HandleDelete} className='bg-violet-900 hover:bg-violet-950 p-2 py-1 text-sm font-bold mx-2 rounded-md text-white cursor-pointer'>Delete</button>
            </div>
          </div>

          })}
        </div>
      </div>
    </>
  )
}

export default App
