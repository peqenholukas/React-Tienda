import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import './Items.css';

const ItemCounter = ({ stock, initial, onAdd }) => {

    const stock1  = { stock }

    const [counter, setCounter] = useState(0)

    const incrementClick = () => {
        if (stock1 == 0) {
            alert("No hay stock")
        } else if(counter < stock){
            setCounter(counter + 1)
        }
    }

    const decrementClick = () => {
        if (counter == 0) {
        } else {
            setCounter(counter - 1)
        }
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