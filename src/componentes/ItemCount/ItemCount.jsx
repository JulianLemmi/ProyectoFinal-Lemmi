import './ItemCount.css'
import { useState } from 'react'

const ItemCount = ({inicial, stock, funcionAgregar}) => {
    const [contador, setContador] = useState(inicial);

    const incrementar = () => {
        if(contador < stock) {
            setContador(contador + 1);
        }
    }

    const decrementar = () => {
        if(contador > inicial){
            setContador(contador - 1);
        }
    }

    return(
        <>
        <div>
            <button onClick={decrementar}> - </button>
            <strong className="contador"> {contador} </strong> 
            <button onClick={incrementar}> + </button>
        </div>
        <button className="boton-agregar" onClick={()=> funcionAgregar(contador)}>Agregar al Carrito</button>
        </>
    )
}

export default ItemCount
