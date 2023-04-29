import React from 'react'

const CartWidget = () => {
    const imgcarrito = "../src/assets/carrito.png";
  return (
    <div>
      <img src={imgcarrito} alt="Carrito de compras" />
      <p>10u</p>
    </div>
  )
}

export default CartWidget
