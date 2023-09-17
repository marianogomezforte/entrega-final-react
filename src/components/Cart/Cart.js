import React from 'react';
import { useCart } from '../../Context/CartContext';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, checkout, increaseQuantity, decreaseQuantity, clearCart } = useCart();

    const handleCheckout = (name, phone, email) => {
        checkout(name, phone, email);
    };

    const getTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-semibold mb-4">Carrito de Compras</h2>

            {cart.map((item) => (
            <CartItem
                key={item.id}
                item={item}
                onIncrease={() => increaseQuantity(item.id)}
                onDecrease={() => decreaseQuantity(item.id)}
            />
            ))}

            <p className="mt-4">TOTAL: ${getTotal()}</p>
            <button
            className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
            onClick={clearCart}
            >
            Vaciar Carrito
            </button>
            <div className="mt-4">
            <button
                className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                onClick={() => handleCheckout("Nombre", "Teléfono", "Email")}
            >
                Confirmar Compra
            </button>
            <Link to="/">
                <button className="drop-shadow-lg bg-zinc-800 rounded-md p-3 m-3 text-stone-100">Seguir Comprando</button>
            </Link>
            </div>
        </div>
    );
};

export default Cart;