import ItemList from '../componentes/ItemList';
import ItemCount from '../componentes/ItemCount'
import customFetch from './utils/customFetch';
import { useEffect, useState} from 'react';
const {products} = require('../componentes/utils/products');

function  ItemListeConteiner () {
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        customFetch(2000, products)
        .then(result => setDatos(result))
        .catch(err = console.log(err))
    }, []);

    const onAdd= (quantity) => {
        console.log (`Compraste ${quantity} unidades`);
    }

    return (
        <div className="ItemListConteiner">
            ESTOS PRODUCTOS TE PUEDEN INTERESAR
            <ItemList item={datos}/>
            <ItemCount initial={1} stock={5} onAdd={onAdd}/>
            
        </div>
    );
}

export default ItemListeConteiner;