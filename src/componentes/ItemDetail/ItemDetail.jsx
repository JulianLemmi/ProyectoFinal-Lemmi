import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { CarritoContext } from '../../Context/CarritoContext';

const ItemDetail = ({ id, nombre, precio, img, descripcion, stock, beneficios_salud, detalles_nutricionales }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const { agregarProducto } = useContext(CarritoContext);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);


    //Ahora acá creo un objeto con el item y la cantidad: 
    const item = { id, nombre, precio };
    agregarProducto(item, cantidad);
  }

  return (
    <div className="item-detail">
      <h2 className="item-name">Nombre: {nombre}</h2>
      <h3 className="item-price">Precio: {precio}</h3>
      <h3 className="item-id">ID: {id}</h3>
      <p className="item-description">Descripción: {descripcion}</p>
      <div className="item-benefits">
        Beneficios para la salud:
        <ul>
          {beneficios_salud?.map((beneficio, index) => (
            <li key={index}>{beneficio}</li>
          ))}
        </ul>
      </div>


      <div className="item-nutrition">
        Detalles nutricionales:
        <ul>
          <li>Proteína: {detalles_nutricionales?.proteina}</li>
          <li>Grasas: {detalles_nutricionales?.grasas}</li>
          <li>Calorías: {detalles_nutricionales?.calorias}</li>
          <li>Carbohidratos: {detalles_nutricionales?.carbohidratos}</li>
        </ul>
      </div>




      <img src={img} alt="" className="item-image" />

      {
        agregarCantidad > 0 ? (<Link to="/cart"> Terminar Compra </Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
      }

    </div>
  )
}

export default ItemDetail;
