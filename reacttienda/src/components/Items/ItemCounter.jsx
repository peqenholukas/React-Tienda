import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import './Items.css';

const ItemCounter = (props) => {

    const stock = 0

    const [counter, setCounter] = useState(0)

    if (stock == 0) {

    } else {
        
    }
    const incrementClick = () => {
        if (stock == 0) {
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