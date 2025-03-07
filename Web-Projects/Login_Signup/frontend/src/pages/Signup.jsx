import React from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { useState } from 'react'
import { handleError } from '../utils'

const Signup = () => {
    const [signupInfo, setSignInfo] = useState({
        name: '',
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        const copyLoginInfo = { ...signupInfo };
        copyLoginInfo[name] = value;
        setSignInfo(copyLoginInfo)
    }

    const handleSignup = async(e) =>{
        e.preventDefault();
        const {name, email, password} = signupInfo;
        if(!name || !email || !password){
            return handleError('name, email and password is required')
        }
        try {
            const url = "http://localhost:8080/auth/signup"
            let response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(signupInfo)
            });

            const result = await response.json()
            console.log(result)
        } catch (error) {
            
        }

    }

    // console.log("Login Info -> ", signupInfo)

    return (
        <div className="flex justify-center items-center h-screen bg-white">
            <div className="bg-white text-black p-8 rounded-lg w-96 shadow-[8px_8px_24px_0px_rgba(66,68,90,1)]">
                <h1 className="text-2xl font-semibold text-center mb-6">Signup</h1>
                <form onSubmit={handleSignup} className="space-y-4">
                    <div className="flex flex-col">
                        <label htmlFor="name" className="mb-1">Name</label>
                        <input
                            onChange={handleChange}
                            type="text"
                            name="name"
                            autoFocus
                            placeholder="Enter your name..."
                            className="p-2 bg-white border-b border-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={signupInfo.name}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email" className="mb-1">Email</label>
                        <input
                            onChange={handleChange}
                            type="email"
                            name="email"
                            placeholder="Enter your email..."
                            className="p-2 bg-white border-b border-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={signupInfo.email}
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
                            value={signupInfo.password}
                        />
                    </div>
                    <button type='submit' className="w-full bg-purple-700 hover:bg-purple-900 cursor-pointer text-white font-semibold py-2 rounded transition">
                        Signup
                    </button>
                    <p className="text-center text-sm mt-4">
                        Already have an account?
                        <Link to="/login" className="text-blue-800 hover:underline ml-1 font-bold">
                            Login
                        </Link>
                    </p>
                </form>
                <ToastContainer />
            </div>
        </div>
    )
}

export default Signup
