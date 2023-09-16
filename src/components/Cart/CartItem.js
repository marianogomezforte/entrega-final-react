import React from 'react';
import { useCart } from '../../Context/CartContext';

const CartItem = ({ item }) => {
    const { removeFromCart } = useCart();

    return (
        <div>
        <h3>{item.title}</h3>
        <p>Precio: ${item.price}</p>
        <p>Cantidad: {item.quantity}</p>
        <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
        </div>
    );
};

export default CartItem;
