import React from 'react'
import Card from '../Card/Card'

const ItemList = ({producto}) => {
  return (
    <div class="item">
        {producto.map((producto)=><Card key={producto.id} {...producto}/>)}

    </div>
  )
}

export default ItemList