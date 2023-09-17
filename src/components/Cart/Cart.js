import React from 'react';
import { useCart } from '../../Context/CartContext';
import CartItem from './CartItem';
import CheckoutForm from './CheckoutForm';

const Cart = () => {
    const { cart, checkout } = useCart();

    const handleCheckout = (name, phone, email) => {
        checkout(name, phone, email);
    };

    return (
        <div>
            <h2>Carrito de Compras</h2>
            <div>
                {cart.map((item) => (
                    <CartItem key={item.id} item={item} />
                ))}
            </div>
            <CheckoutForm onCheckout={handleCheckout} />
        </div>
    );
};

export default Cart;

