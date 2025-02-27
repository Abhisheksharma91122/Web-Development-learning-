import { useState , useEffect } from 'react'
import Navbar from './Components/Navbar'
import { v4 as uuidv4 } from 'uuid';
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";

function App() {

  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [showFinished, setshowFinished] = useState(true)


  useEffect(() => {
    let saveTodos = localStorage.getItem("todos")
    if(saveTodos){
      let todos = JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)
    }
  },[])

  const togglefinished = (params) => {
    setshowFinished(!showFinished)
  }
  
  
  const saveToLS = (updatedTodos) => {
    localStorage.setItem("todos" , JSON.stringify(updatedTodos))
  }
  
  const HandleAdd = () => {
    let updatedTodos = [...todos, { id : uuidv4(), todo, isCompleted: false }]
    setTodos(updatedTodos)
    setTodo("")
    saveToLS(updatedTodos)
  }
  const HandleEdit = (e,id) => {
    let t = todos.filter(e=>e.id === id)
    // console.log(t[0])
    setTodo(t[0].todo)
    let newtodo = todos.filter(item=>{
      return item.id !== id;
    });
    setTodos(newtodo)
    saveToLS(newtodo)
  }
  const HandleDelete = (e,id) => {
    let newtodo = todos.filter(item=>{
      return item.id !== id;
    });
    setTodos(newtodo)
    saveToLS(newtodo)
  }
  const HandleChange = (e) => {
    setTodo(e.target.value)
  }

  const handlecheckbox = (e) => {
    let Id = e.target.id;
    let index = todos.findIndex((e)=>{
      return e.id === Id;
    })
    // console.log(index)
    // todos[index].isCompleted = !todos[index].isCompleted;
    // console.log(todos[index].isCompleted)
    let newtodo = [...todos];
    newtodo[index].isCompleted = !newtodo[index].isCompleted;
    setTodos(newtodo)
    // console.log(todos[index].isCompleted)
    saveToLS(newtodo)
  }
  

  return (
    <>
      <Navbar />
      
      <div className="md:container mx-auto bg-white/30 backdrop-blur-md shadow-xl md:my-5 rounded-xl p-4 md:p-8 md:w-[50%] md:min-h-[85vh]">
        <div className='text-2xl font-bold text-center'>iTask - Manage your todos at one place</div>
        <div className="addTodos my-2">
          <h2 className='font-bold text-lg '>Add a Todo</h2>
          <div className='flex w-full gap-5 my-1'>
          <input onChange={HandleChange} value={todo} type="text" className='bg-white rounded-xl outline-1 w-full px-1' />
          <button onClick={HandleAdd} disabled={todo.length <= 3} className='bg-violet-900 hover:bg-violet-950 p-2 py-1 font-bold rounded-md text-white cursor-pointer w-fit text-2xl'><IoMdAdd /></button>
          </div>
        </div>
        <div className="">
          <input type="checkbox" name="" onChange={togglefinished} checked={showFinished} id="show" /> <label htmlFor="show">Show Finished</label>
          <div className='h-[1px] bg-black w-[90%] mx-auto my-4'></div>
          <h1 className='font-bold text-lg my-2'>Your Todos</h1>
        </div>
        <div className="Todos">
          {todos.length === 0 && <div className='m-5'>No Todos to display </div>}
          {todos.map(item => {

            return (showFinished || !item.isCompleted) && <div key={item.id} className="Todo flex justify-between my-5 w-full">
              <div className='flex gap-2'>
              <input type="checkbox" onChange={handlecheckbox} checked={item.isCompleted} name="" id={item.id} />
              <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>
              </div>
              <div className="buttons flex h-full">
                <button onClick={(e)=>{HandleEdit(e,item.id)}} className='bg-violet-900 hover:bg-violet-950 p-2 py-1 text-sm font-bold mx-2 rounded-md text-white cursor-pointer'><CiEdit /></button>
                <button onClick={(e)=>{HandleDelete(e,item.id)}} className='bg-violet-900 hover:bg-violet-950 p-2 py-1 text-sm font-bold mx-2 rounded-md text-white cursor-pointer'><MdDelete /></button>
              </div>
            </div>

          })}
        </div>
      </div>
    </>
  )
}

export default App
