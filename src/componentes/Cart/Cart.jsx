import { CarritoContext } from "../../Context/CarritoContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import './Cart.css'

const Cart = () => {
    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(
        CarritoContext
    );

    if (cantidadTotal === 0) {
        return (
            <div className="empty-cart">
                <h2> No hay productos en el carrito</h2>
                <Link to="/" className="view-products"> Ver Productos </Link>
            </div>
        );
    }

    return (
        <div className="cart">
            {carrito.map((producto, index) => (
                <CartItem key={index} {...producto} />
            ))}
            <h3 className="total-price">Total: ${total} </h3>
            <h3 className="total-quantity">Cantidad total: {cantidadTotal} </h3>
            <button className="empty-cart-btn" onClick={() => vaciarCarrito()}> Vaciar carrito </button>
            <Link to="/checkout" className="checkout-btn"> Finalizar Compra </Link>
        </div>
    );
};

export default Cart;
