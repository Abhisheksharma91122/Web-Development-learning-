import { useState , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [cards, setcards] = useState([])

  const data = async()=>{
    let a = await fetch("https://jsonplaceholder.typicode.com/posts")
    let resolve = await a.json();
    setcards(resolve)
  }

  useEffect(() => {
    data()
  }, [])
  
  return (
    <div className="container mx-auto p-4 bg-black min-h-screen">
      <div className="flex flex-wrap gap-6 justify-center">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-gray-900 text-white cursor-pointer shadow-md rounded-xl p-6 border border-gray-700 w-80 hover:shadow-lg transition-shadow"
          >
            <h1 className="text-xl font-semibold">{card.title}</h1>
            <p className="text-gray-300 mt-2">{card.body}</p>
            <span className="text-sm text-gray-500 block mt-4">By: UserID {card.userId}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App
