import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

const Analytics = () => {

  const [value, setValue] = useState("")

  const handleChange = (e)=>{
    console.log(e.target.value);
    setValue(e.target.value);
  }

  const navigate = useNavigate();
  const handleClick = () =>{
    navigate('/total-count', { state: { shorturl: `${value.split('analytics/')[1] ? value.split('analytics/')[1] : value }` } })
  }

  return (
    <div>
      <div className="flex flex-col justify-center items-center h-screen bg-[#f9f9f9]">
      <div className='mb-8'>
        <h1 className="text-6xl font-bold text-blue-600">Short URL</h1>
      </div>
        <h2 className="text-3xl font-bold mb-4 text-center mt-2">URL Click Counter</h2>
        <p className='font-medium'>Enter the URL to track how many clicks it received.</p>
      <div className="bg-[#ffffff] py-6 px-8 rounded-2xl w-[50%] shadow-lg mt-2">
        <div className="flex gap-0 mt-10 mb-10 justify-center items-center">
          <input
            className="py-4 px-8 w-[70%] border rounded-[5px] border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            name="url"
            placeholder="Enter the link here"
            value={value}
            onChange={handleChange}
          />
          <button
            className="font-bold text-white bg-blue-600 px-8 py-4 cursor-pointer rounded-[5px] hover:bg-blue-700 transition duration-300"
            onClick={handleClick}
          >
            Track Clicks
          </button>
        </div>
          <p className='px-8 py-4'>Example: localhost:8001/NkGl1GU5</p>
      </div>
      <ToastContainer />
    </div>
    </div>
  )
}

export default Analytics
