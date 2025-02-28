import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className='navbar'>
            <ul>
                <li>
                    <NavLink to="/" className={(e)=>{return e.isActive?"active":""}}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={(e)=>{return e.isActive?"active":""}}>
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className={(e)=>{return e.isActive?"active":""}}>
                        Contact Us
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/user/guest" className={(e)=>{return e.isActive?"active":""}}>
                        User
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
