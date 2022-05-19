import React from 'react';
import { Bag } from 'react-bootstrap-icons';


const CartWidget = () => {
    return (
        <Bag badgeContent={4} color="dark">
            <i class="bi bi-bag"></i>
        </Bag>
        
    )
}

export default CartWidget;
