import React from 'react'
import ItemCount from './ItemCount'
import './Items.css'

export const Item = ({items2}) => {
    const {title, img, price, marca} = items2
    console.log(items2)
  return (
    <div className='pro-container'>
      <div className='pro'>
        <img src={img} alt="FOTOCONTROL" />
        <div className='des'>
          <span>{marca}</span>
          <h5>{title}</h5>
          <div className='stars'>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <h4>${price}</h4>
        </div>
        <ItemCount stock="35" initial="2"/>
      </div>
    </div>
  )
}

