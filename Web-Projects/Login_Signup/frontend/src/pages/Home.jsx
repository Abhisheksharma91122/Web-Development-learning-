import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../utils';

const Home = () => {

  const [loggedInUser, setLoggedInUser] = useState('');
  const [products, setProducts] = useState()

  useEffect(() => {
    setLoggedInUser(localStorage.getItem('loggedInUser'));
  }, [])

  const navigate = useNavigate();

  const handleLogout = () => {

    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUser');
    handleSuccess('User Loggedout')

    setTimeout(() => {
      navigate('/login');
    }, 1000);

  }

  const fetchProducts = async () => {
    try {
      const url = "http://localhost:8080/products";

      const headers = {
        headers: {
          'Authorization': localStorage.getItem('token')
        }
      }

      const response = await fetch(url, headers);
      const result = await response.json();
      setProducts(result)
      console.log(result);

    } catch (error) {
      handleError(error);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [])




  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <h1 className='text-2xl'>LoggedInUser is {loggedInUser}</h1>
      <button className='bg-blue-700 cursor-pointer p-2 rounded-2xl text-white' onClick={handleLogout}>Logout</button>
      <div>
        {
          products && products.map((item, index) => (
            <ul key={index}>
              <li>{item.name} : {item.price}</li>
            </ul>
          ))
        }
      </div>
      <ToastContainer />
    </div>
  )
}

export default Home
