import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import './Items.css';

const ItemCount = (props) => {

    const stock = props.stock

    const initial = parseInt(props.initial)

    const [counter, setCounter] = useState(initial)

    const IncrementItem = () => {
        if(stock == 0){
            alert("No hay stock")
        } else if (counter < stock) {
            setCounter(counter + 1)
            console.log(counter)
        }
    }
    const DecrementItem = () => {
        if(counter > initial){
            setCounter(counter - 1)
        }
    }

    return (
        <div className='cont'>
            <div className='cont-btns'>
                <button onClick={DecrementItem}>−</button>
                <p>{counter}</p>
                <button onClick={IncrementItem}>+</button>
            </div>
            <button id='cartbtn'>Agregar al carrito</button>
        </div>

    )
}

export default ItemCount