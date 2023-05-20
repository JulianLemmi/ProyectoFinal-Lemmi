import React from 'react';
import './ItemDetail.css';

const ItemDetail = ({ id, nombre, precio, img, descripcion }) => {
  return (
    <div className="item-detail">
      <h2 className="item-name">Nombre: {nombre}</h2>
      <h3 className="item-price">Precio: {precio}</h3>
      <h3 className="item-id">ID: {id}</h3>
      <p className="item-description">Descripción: {descripcion}</p>
      <img src={img} alt="" className="item-image" />
    </div>
  );
};

export default ItemDetail;
