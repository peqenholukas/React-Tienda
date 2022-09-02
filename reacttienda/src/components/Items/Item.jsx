import React from 'react'

export const Item = ({items2}) => {
    const {title, img, price} = items2
    console.log(items2)
  return (
    <article>
        <h3>{title}</h3>
        <h3>{price}</h3>
        <img src={img} alt="" />
    </article>
  )
}

