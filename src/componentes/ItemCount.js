

import React, {useState} from 'react';

import '../ItemCount.css';

export const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(initial);

    const decrease = () => {
        setCount(count - 1);
    }

    const increase = () => {
        setCount(count + 1);
    }


    return (
        <div class= 'counter'>
        <button class="btn btn-dark" disabled={count <= 1} onClick={decrease}>-</button>
        <span>{count}</span>
        <button class="btn btn-dark" disabled={count >= stock} onClick={increase}>+</button>
        <div>
            <button class="btn btn-danger" disabled={stock <= 0} onClick={() => onAdd(count)}>Agregar al Carrito</button>
        </div>

    </div>
    ); 
}

export default ItemCount;