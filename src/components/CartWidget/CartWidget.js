import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../Context/CartContext';
import img from './assets/shopping-cart.png';

const CartWidget = () => {
    const { cart } = useCart();

    // Calcular la cantidad total de artículos en el carrito
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <div className="flex self-center">
            <Link to="/cart">
                <img className="me-4 w-10 h-10" src={img} alt="Carrito" />
            </Link>
            <p className="self-center me-8 text-stone-100 text-xl">
                {totalItems > 0 ? totalItems : 0}
            </p>
        </div>
    );
};

export default CartWidget;