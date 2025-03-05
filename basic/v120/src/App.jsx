import './App.css'
import Navbar from './components/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, multiply } from './Redux/counter/counterSlice'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
      <Navbar />
      <div>
        <button onClick={() => dispatch(decrement())}>-</button>
        this counter is {count}
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={()=> dispatch(multiply())}>*</button>
      </div>
    </>
  )
}

export default App
