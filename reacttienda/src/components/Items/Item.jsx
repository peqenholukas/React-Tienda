import React from 'react'

export const Item = (items2) => {
    console.log(items2.items2.price)
  return (
    <article>
        <h3>{items2.items2.title}</h3>
        <h3>{items2.items2.price}</h3>
        <img src={items2.items2.img} alt="" />
    </article>
  )
}

