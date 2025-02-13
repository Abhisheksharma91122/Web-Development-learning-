import React from 'react'
import { useState, useEffect } from 'react';
import info from "./assets/info.png"

const App = () => {
  const [cardData, setcardData] = useState([])

  const data = async () => {
    let a = await fetch("https://jsonplaceholder.typicode.com/posts");
    let resolve = await a.json();
    // console.log(resolve)
    setcardData(resolve)
  }

  useEffect(() => {
    data()
  }, [])

  return (
    <div className="Conatiner flex flex-col justify-center items-center w-full gap-2 mt-10">
      {cardData.map((card) => {
        return <div key={card.id} className='card bg-gray-800 flex p-2 text-white rounded-3xl gap-5 w-[80%] cursor-pointer hover:bg-gray-600'>
          <div className="imagesection w-[180px] h-[180px] overflow-hidden rounded-3xl">
            <img className='w-full h-full object-center' src={info} alt="" />
          </div>
          <div className="contain flex flex-col justify-center w-[75%]">
            <h1 className='text-2xl font-bold mb-0.5'> Title : {card.title}</h1>
            <span> Userid : {card.userId}</span>
            <span> body : {card.body}</span>
          </div>
        </div>
      })}
    </div>
  )
}

export default App
