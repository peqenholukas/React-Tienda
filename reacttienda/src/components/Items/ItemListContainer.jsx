import React from 'react'
import { useState, useEffect } from 'react'
import itemsJson from "../Items/myItems.json"
import { ItemList } from "./ItemList"

const ItemListContainer = () => {
    const [items, setItems] = useState([])

    const getItems = (data, time) => new Promise((resolve, reject) => {
        setTimeout(() => {
            if(data){
                resolve(data)
            } else{
                reject("ERROR")
            }
        }, time)
    })

    useEffect(() => {
      getItems(itemsJson, 3000).then((res) => {
        setItems(res)
      }).catch((err)=> console.log(err, ": No hay Prod")) 
    }, [])


  return (
    <div>
      <ItemList items={items} />
    </div>
  )
}

export default ItemListContainer