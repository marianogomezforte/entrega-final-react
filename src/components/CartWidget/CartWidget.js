import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../Context/CartContext';
import cart from './assets/shopping-cart.png';

const CartWidget = () => {
    const { totalItems } = useCart();

    return (
        <div className="flex self-center">
        <Link to="/cart">
            <img className="me-4 w-10 h-10" src={cart} alt="Carrito" />
        </Link>
        <p className="self-center me-8 text-stone-100 text-xl">{totalItems}</p>
        </div>
    );
};

export default CartWidget;

