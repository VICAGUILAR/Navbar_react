import Item from "./Item";
//import {ProductsContainer} from './styledComponents.js';


const ItemList = ({items}) => {
    console.log(items)
    return (
        <div>
             {
                items.length > 0
                ? items.map(item => <Item key = {item.id} title={item.name} />)
                : <p>Cargando...</p>
            }

        </div>
    )
}

export default ItemList;
