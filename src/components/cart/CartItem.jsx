import React from 'react'

export const CartItem = ({quantity,name}) => {
  return (
    <div>
        <p>{quantity}</p>
        <p>{name}</p>
    </div>
  )
}
