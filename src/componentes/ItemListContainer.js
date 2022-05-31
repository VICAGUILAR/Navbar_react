import ItemList from './ItemList';
import { Wrapper } from './styledComponents';
import ItemCount from './ItemCount'
import customFetch from '../utils/customFetch'
import { useEffect, useState} from 'react';

const {products} = require('../utils/products');


function  ItemListeConteiner () {
const [datos, setDatos] = useState([]);
    
useEffect(() => {
    customFetch(2000,products)
        .then(result => setDatos(result))
        .catch(err => console.log(err))
},[]);
console.log(datos)

const onAdd = (quantity) => {
    alert(`Acabas de añadir ${quantity} unidades a tu carrito`);
}

    return (
        <div className="ItemListConteiner">
            ESTOS PRODUCTOS TE PUEDEN INTERESAR
            <ItemList items={datos}/>
            <ItemCount initial={1} stock={5} onAdd={onAdd}/>
            <ItemList datos={datos}/>
            
            
        </div>
    );
}

export default ItemListeConteiner;