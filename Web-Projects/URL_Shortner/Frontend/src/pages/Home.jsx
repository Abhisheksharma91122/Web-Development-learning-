import React, { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import { handleSuccess, handleError } from '../../util'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const [url, setUrl] = useState("");

  const hanleChange = (e) => {
    const url = e.target.value;
    console.log(url)
    setUrl(url);
  }

  const navigate = useNavigate();

  const handleShort = async()=>{
    if(!url) {
      handleError("Please enter a url!")
    }

    try {
      const fetchurl = "http://localhost:8001/short/generate";

      const response = await fetch(fetchurl, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "url": url
        })
      })

      const result = await response.json();
      const {id, success, message} = result;

      if(!success){
        handleError(message);
      }

      if(success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/shortened", { state: { shortId: id, originalURL: url } });
        }, 2000);
      }
      console.log(result)


    } catch (error) {
      handleError(error)
    }
  }



  return (
    <div className="flex flex-col justify-center items-center h-screen bg-[#f9f9f9]">
      <div className='mb-10'>
        <h1 className="text-6xl font-bold text-blue-600">Short URL</h1>
      </div>
      <div className="bg-[#ffffff] py-6 px-8 rounded-2xl w-[50%] shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center mt-2">Paste the URL to be shortened</h2>
        <div className="flex gap-0 mt-10 mb-10 justify-center items-center">
          <input
            className="py-4 px-8 w-[70%] border rounded-[5px] border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            name="url"
            placeholder="Enter the link here"
            value={url}
            onChange={hanleChange}
          />
          <button
            className="font-bold text-white bg-blue-600 px-8 py-4 cursor-pointer rounded-[5px] hover:bg-blue-700 transition duration-300"
            onClick={handleShort}
          >
            Shorten URL
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Home
