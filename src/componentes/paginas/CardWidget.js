import React from 'react'
import {BsFillCartCheckFill} from 'react-icons/bs'

const CardWidget = () => {
  return (
    <button type="button" class="btn btn-primary position-relative">
  <BsFillCartCheckFill/>
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    1
    <span class="visually-hidden">unread messages</span>
  </span>
</button>
  )
}

export default CardWidget