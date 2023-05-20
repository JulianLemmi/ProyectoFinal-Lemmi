import './Item.css'
import { Link } from 'react-router-dom';

const Item = ({ id, nombre, precio, img }) => {
    return (
      <div className='cardProducto'>
        <img className='imgProducto' src={img} alt={nombre} />
        <div className='productoInfo'>
          <h3 className='productoNombre'>{nombre}</h3>
          <p className='productoPrecio'>Precio: {precio}</p>
          <p className='productoID'>ID: {id}</p>
          {/* <button className='productoButton'>Ver Detalles</button> */}
          <Link className='productoButton' to={`/item/${id}`}>Ver Detalles</Link>
        </div>
      </div>
    );
  };
  

export default Item
