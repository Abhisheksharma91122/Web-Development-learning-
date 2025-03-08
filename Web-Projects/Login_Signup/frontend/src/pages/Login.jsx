import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { useState } from 'react'
import { handleError, handleSuccess } from '../utils'

const Login = () => {
    const [loginInfo, setLoginInfo] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        const copyLoginInfo = { ...loginInfo };
        copyLoginInfo[name] = value;
        setLoginInfo(copyLoginInfo)
    }
    const navigate = useNavigate();
    const handleLogin = async(e) =>{
        e.preventDefault();
        const {email, password} = loginInfo;
        if(!email || !password){
            return handleError('email and password is required')
        }
        try {
            const url = "http://localhost:8080/auth/login"
            let response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginInfo)
            });

            const result = await response.json()
            const {success, message, jwtToken, name, error} = result;
            if (success) {
                handleSuccess(message)
                localStorage.setItem('token', jwtToken);
                localStorage.setItem('loggedInUser', name);
                setTimeout(() => {
                    navigate('/home')
                }, 2000);
            } else if(error){
                const detail = error.details[0].message;
                handleError(detail)
            } else if(!success){
                handleError(message)
            }
            console.log(result)
        } catch (error) {
            handleError(error);
        }

    }

    // console.log("Login Info -> ", loginInfo)

    return (
        <div className="flex justify-center items-center h-screen bg-white">
            <div className="bg-white text-black p-8 rounded-lg w-96 shadow-[8px_8px_24px_0px_rgba(66,68,90,1)]">
                <h1 className="text-2xl font-semibold text-center mb-6">Login</h1>
                <form onSubmit={handleLogin} className="space-y-4">
                    <div className="flex flex-col">
                        <label htmlFor="email" className="mb-1">Email</label>
                        <input
                            onChange={handleChange}
                            type="email"
                            name="email"
                            placeholder="Enter your email..."
                            className="p-2 bg-white border-b border-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={loginInfo.email}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="password" className="mb-1">Password</label>
                        <input
                            onChange={handleChange}
                            type="password"
                            name="password"
                            placeholder="Enter your password..."
                            className="p-2 bg-white border-b border-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={loginInfo.password}
                        />
                    </div>
                    <button type='submit' className="w-full bg-purple-700 hover:bg-purple-900 cursor-pointer text-white font-semibold py-2 rounded transition">
                        Signup
                    </button>
                    <p className="text-center text-sm mt-4">
                        Does't have Account ?
                        <Link to="/signup" className="text-blue-800 hover:underline ml-1 font-bold">
                            Signup
                        </Link>
                    </p>
                </form>
                <ToastContainer />
            </div>
        </div>
    )
}

export default Login
