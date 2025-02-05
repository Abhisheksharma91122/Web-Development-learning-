import React from 'react'
import "./Card.css"
const card = (props) => {
    return (
        <div className='Card' style={{overflow : "hidden"}}>
            <img src="https://media.istockphoto.com/id/1164885329/photo/getting-lost-in-the-code.jpg?s=2048x2048&w=is&k=20&c=IDvWkv6k9DG5JOb1fuiTflmbE6s2PtM-NR88iVPIYUQ=" alt="image" width={233} style={{opacity : 1 , objectFit : "center"}}/>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
    )
}

export default card
