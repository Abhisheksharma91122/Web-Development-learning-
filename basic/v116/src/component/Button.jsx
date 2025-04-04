import React, {useContext} from 'react'
import Component1 from './component1'
import { counterContext } from '../context/context'
const Button = () => {
    const value = useContext(counterContext)
    return (
        <div>
            <button onClick={() => value.setCount((count) => count + 1)}>
                this is button
                <Component1 />
            </button>
        </div>
    )
}

export default Button
