import { useEffect } from "react"
import React from 'react'

const Navbar = ({color}) => {
    // case 1 : this is render only first time in page 
    useEffect(() => {
        alert("this is show on first render of this page only one time")
    }, [])
    // case 2 : this is render every time in when the page is render 
    useEffect(() => {
        alert("this is render every time when page is render")
    },)
    // case 3 : this alert is show when the color is changed 
    useEffect(() => {
        alert("this is show when the color is update")
    }, [color])

    // Example of cleanup function 
    useEffect(() => {
      return () => {
        alert("Hey the component is unmounted")
      }
    }, [])
    
    return (
        <div>
            this is navbar of  {color} welcome to this page.
        </div>
    )
}

export default Navbar
