import React from 'react'
import Card from '../Card/Card'

const ItemList = ({cursos}) => {
  return (
    <div class="item">
        {cursos.map((curso)=><Card key={curso.id} {...curso}/>)}

    </div>
  )
}

export default ItemList