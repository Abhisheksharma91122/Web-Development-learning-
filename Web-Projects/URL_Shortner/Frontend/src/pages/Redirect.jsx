import React from 'react'
import { ToastContainer } from 'react-toastify'
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { handleError, handleSuccess } from '../../util';

const Redirect = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const shortId = location.state?.shortId; 
  const originalURL = location.state?.originalURL; 

  useEffect(() => {
    if (!shortId) {
      navigate("/");
    }
  }, [navigate, shortId]);

  if (!shortId) {
    handleError("Error: No Short ID Provided");
    return null;
  }

  const [copySuccess, setCopySuccess] = useState(false);
  const handleCopy = () => {
    const url = `http://localhost:8001/${shortId}`;

    navigator.clipboard.writeText(url).then(() => {
      setCopySuccess(true);
      handleSuccess("URL Copied");
      setTimeout(() => setCopySuccess(false), 2000); // Reset message after 2 sec
    }).catch(err => {
      console.error("Failed to copy:", err);
    });
  };

  const handleback = ()=>{
    navigate('/')
  }

  const handletotalclick = ()=>{
    navigate('/total-count', { state: { shorturl: `${shortId}` } })
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-[#f9f9f9]">
      <div className='mb-10'>
        <h1 className="text-6xl font-bold text-blue-600">Short URL</h1>
      </div>
      <div className="bg-[#ffffff] py-6 px-8 rounded-2xl w-[50%] shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center mt-2">Your shortened URL</h2>
        <div className="flex gap-0 mt-10 mb-10 justify-center items-center">
          <input
            className="py-4 px-8 w-[70%] border rounded-[5px] border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            name="url"
            placeholder="Enter the link here"
            value={`http://localhost:8001/${shortId}`}
            readOnly
          />
          <button
            className="font-bold text-white bg-blue-600 px-8 py-4 cursor-pointer rounded-[5px] hover:bg-blue-700 transition duration-300"
            onClick={handleCopy}
          >
            Copy URL
          </button>
        </div>
          <p className='text-center'>Long URL : <a className='text-blue-600 hover:underline' href={originalURL} target="_blank" rel="noopener noreferrer">
          {originalURL}</a></p>

        <div className='flex flex-col gap-2 mt-2'>
          <button className='bg-blue-600 cursor-pointer p-2 w-fit rounded-xl text-white' onClick={handletotalclick}>Total no of clicks on your short URL</button>
          <button className='bg-blue-600 cursor-pointer p-2 w-fit rounded-xl text-white' onClick={handleback}>Shorten another URL</button>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Redirect
