import React from 'react';
import { useCart } from '../../Context/CartContext';

const CartItem = ({ item, onIncrease, onDecrease }) => {
    const { removeFromCart } = useCart();

    return (
        <div className='flex justify-center'>
            <h3 className='text-xl p-2 m-3'>{item.title}</h3>
            <p className='text-xl p-2 m-3'>${item.price}</p>
            <div className='flex '>
                <button onClick={onDecrease} className='bg-gray-200 rounded-md h-8 w-8 text-xl disabled:opacity-50 self-center'>-</button>
                <p className='text-2xl p-2 m-3'>{item.quantity}</p>
                <button onClick={onIncrease} className='bg-gray-200 rounded-md h-8 w-8 text-xl disabled:opacity-50 self-center'>+</button>
            </div>
            <button onClick={() => removeFromCart(item.id)} className='text-xl p-2 m-3'>Eliminar</button>
        </div>
    );
};

export default CartItem;
