import React from 'react'
import "../Items.css"
import ItemsJson from "../myItems.json"
import ItemCount from '../ItemCount'

const MainImg = document.getElementById("MainImg")
const smallimg = document.getElementById("small-image")
console.log(MainImg, smallimg)

const ItemDetail = () => {
    return (
        ItemsJson.map(items3 => {
            return (
                <div id='prodetails' className='section-p1' key={items3.id}>
                    <div className='single-pro-image' >
                        <img src={items3.img} alt="" srcset="" width="100%" id='MainImg'/>
                        {
                            items3.images.map(data => {
                                return (
                                    <div className='small-img-group'>
                                        <div className='small-img-col'>
                                            <img src={data.img1} alt="" width="100%" id='small-image'/>
                                        </div>
                                        <div className='small-img-col'>
                                            <img src={data.img2} alt="" width="100%" id='small-image'/>
                                        </div>
                                        <div className='small-img-col'>
                                            <img src={data.img3} alt="" width="100%" id='small-image'/>
                                        </div>
                                        <div className='small-img-col'>
                                            <img src={data.img4} alt="" width="100%" id='small-image'/>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='single-pro-details'>
                        <h6>{items3.marca}</h6>
                        <h4>{items3.title}</h4>
                        <h2>${items3.price}</h2>
                        <ItemCount />
                        <h4>Detalles del producto</h4>
                        <span>{items3.desc}</span>
                    </div>
                </div>
            )
        })
    )
}

export default ItemDetail