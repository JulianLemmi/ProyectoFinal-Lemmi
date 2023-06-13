import { useContext } from "react";
import { CarritoContext } from "../../Context/CarritoContext";
import './CartItem.css'

const CartItem = ({ item, cantidad }) => {

    const { eliminarProducto } = useContext(CarritoContext);

    return (
        <div key={item.id} className="cart-item">
            <h4 className="item-name"> {item.nombre} </h4>
            <p className="item-quantity"> Cantidad: {cantidad} </p>
            <p className="item-price"> Precio: $ {item.precio} </p>
            <button className="item-remove" onClick={() => eliminarProducto(item.id)}> Eliminar </button>
            <hr />
        </div>
    )
}

export default CartItem
