import React from 'react'
import "./Items.css"
import ItemsJson from "./myItems.json"

const ItemDetail = () => {
    return (
        ItemsJson.map(items3 => {
            console.log(items3)
            return (

                <div id='prodetails' className='section-p1' key={items3.id}>
                    <div className='single-pro-image'>
                        <img src={items3.img} alt="" srcset="" width="100%" />

                        <div className='small-img-group'>
                            <div className='small-img-col'>
                                <img src="#" alt="" width="100%" />
                            </div>
                        </div>
                    </div>

                    <div className='single-pro-details'>
                        <h6>{items3.title}</h6>
                    </div>
                </div>
            )
        })
    )

}

export default ItemDetail