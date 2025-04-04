import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className='bg-gray-100'>
            <nav className="bg-gray-800 text-white p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <Link href="/" className="text-xl font-bold">Abhishek</Link>
                    <ul className="flex space-x-6">
                        <li><Link href="/" className="hover:text-blue-400">Home</Link></li>
                        <li><Link href="about" className="hover:text-blue-400">About</Link></li>
                        <li><Link href="contact" className="hover:text-blue-400">Contact</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
