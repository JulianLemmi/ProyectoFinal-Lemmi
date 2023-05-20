import './CartWidget.css'

const CartWidget = () => {
    const imgcarrito = "../src/assets/carrito.png";
  return (
    <div className="cart-widget">
      <img src={imgcarrito} alt="Carrito de compras" className="cart-icon"/>
    </div>
  )
}

export default CartWidget
