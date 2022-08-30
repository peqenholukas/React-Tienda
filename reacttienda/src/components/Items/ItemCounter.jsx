import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import './Items.css';

const ItemCounter = (props) => {
    const [counter, setCounter] = useState(0)
        

    const incrementClick = () =>{
        setCounter(counter + 1)
    }

    const decrementClick = () =>{
        setCounter(counter - 1)
    }

    return (
    <div className='cont'>
        <div className='cont-btns'>
            <button onClick={decrementClick}>−</button>
            <p>{counter}</p>
            <button onClick={incrementClick}>+</button>
        </div>
        <button id='cartbtn'>Agregar al carrito</button>
    </div>
    
  )
}
 
export default ItemCounter