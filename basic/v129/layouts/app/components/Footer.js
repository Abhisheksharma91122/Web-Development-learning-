import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm">&copy; {new Date().getFullYear()} MyName. All rights reserved.</p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                    <Link href="/" className="hover:text-blue-400">Home</Link>
                    <Link href="/about" className="hover:text-blue-400">About</Link>
                    <Link href="/contact" className="hover:text-blue-400">Contact</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer
