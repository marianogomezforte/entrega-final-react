import React from 'react';
import { useCart } from '../../Context/CartContext';
import CartItem from './CartItem';
import CheckoutForm from './CheckoutForm';

const Cart = () => {
    const { cart } = useCart();

    return (
        <div>
        <h2>Carrito de Compras</h2>
        <div>
            {cart.map((item) => (
            <CartItem key={item.id} item={item} />
            ))}
        </div>
        <CheckoutForm />
        </div>
    );
};

export default Cart;
