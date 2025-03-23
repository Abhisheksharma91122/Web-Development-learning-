import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';
import { handleError } from '../../util';

const Count = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const url = location.state?.shorturl;

  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    if (!url) {
      navigate("/");
    }
  }, [navigate, url]);

  if (!url) {
    handleError("Error: No Short URL Provided");
    return null;
  }

  useEffect(() => {
    // console.log("Fetching data on URL change")
    const fetchData = async () => {
      const fetchurl = `http://localhost:8001/short/analytics/${url}`;

      try {
        const response = await fetch(fetchurl);
        const result = await response.json();
        const { totalClick, error, success } = result;
        if (!success) {
          handleError(error);
          return;
        }
        if (success) {
          setClickCount(totalClick);
        }
      } catch (error) {
        handleError(error);
      }
    }
    fetchData();
  },[url])




  const handleHome = () => {
    navigate('/');
  };

  const handleTrackAnother = () => {
    navigate('/analytics')
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-[#f9f9f9] px-4">
      <div className="mb-10">
        <h1 onClick={handleHome} className="cursor-pointer text-6xl font-bold text-blue-600">
          Short URL
        </h1>
      </div>
      <div className="bg-white shadow-lg p-8 rounded-lg text-center w-full max-w-lg">
        <h2 className="text-3xl font-semibold mb-4">Total URL Clicks</h2>
        <p className="text-gray-600 mb-6">
          The number of clicks from the shortened URL that redirected users to the destination page.
        </p>
        <div className="text-4xl font-bold text-blue-600 shadow-md p-3 rounded-lg bg-white">
          {clickCount}
        </div>
        <div className="mt-6">
          <a
            href={`http://localhost:8001/${url}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl font-semibold text-blue-600 shadow-md bg-white p-2 rounded-lg"
          >
            {`localhost:8001/${url}`}
          </a>
        </div>
      </div>
      <div className="mt-6 flex gap-4">
        <button
          onClick={handleHome}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition"
        >
          Short Another URL
        </button>
        <button
          onClick={handleTrackAnother}
          className="bg-green-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-600 transition"
        >
          Track Another URL
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Count;
