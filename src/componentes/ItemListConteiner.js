
import ItemCount from '../componentes/ItemCount'

function  ItemListeConteiner () {

    const onAdd= (quantity) => {
        console.log (`Compraste ${quantity} unidades`);
    }

    return (
        <div className="ItemListConteiner">
            ESTOS PRODUCTOS TE PUEDEN INTERESAR

            <ItemCount initial={1} stock={5} onAdd={onAdd}/>
            
        </div>
    );
}

export default ItemListeConteiner;