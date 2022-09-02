import React from "react"
import { Item } from "./Item"

export const ItemList = ( {items} ) => {
  return (
    <div>
      {items.length ? items.map( ( items2 ) => <Item key={items2.id}/>) : <h2>Cargando...</h2>}
    </div>
  )
}
