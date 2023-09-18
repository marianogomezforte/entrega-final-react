import React, { useState } from 'react';
import { useCart } from '../../Context/CartContext';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Cart = () => {
    const { cart, increaseQuantity, decreaseQuantity, clearCart, checkout } = useCart();
    const [checkoutData, setCheckoutData] = useState({ name: '', phone: '', email: '' });

    const handleCheckout = (e) => {
        e.preventDefault();

        const { name, phone, email } = checkoutData;

        if (cart.length === 0) {
            Swal.fire('El carrito está vacío', 'Agrega elementos al carrito antes de confirmar la compra', 'warning');
        } else if (name && phone && email) {
            checkout(name, phone, email);
            setCheckoutData({ name: '', phone: '', email: '' });
            Swal.fire('¡Muchas Gracias por tu compra!', 'Nos comunicaremos contigo.', 'success');
        } else {
            Swal.fire('Por favor, completa todos los campos del formulario antes de finalizar la compra', '', 'error');
        }
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

            <form onSubmit={handleCheckout}>
                <input
                    type="text"
                    placeholder="Nombre"
                    value={checkoutData.name}
                    onChange={(e) => setCheckoutData({ ...checkoutData, name: e.target.value })}
                    className="border border-gray-300 p-2 w-full"
                />
                <input
                    type="text"
                    placeholder="Teléfono"
                    value={checkoutData.phone}
                    onChange={(e) => setCheckoutData({ ...checkoutData, phone: e.target.value })}
                    className="border border-gray-300 p-2 w-full"
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={checkoutData.email}
                    onChange={(e) => setCheckoutData({ ...checkoutData, email: e.target.value })}
                    className="border border-gray-300 p-2 w-full"
                />

                <h4 className="text-lg font-semibold">Elementos del carrito:</h4>
                <ul>
                    {cart.map((item) => (
                        <li key={item.id}>
                            {item.title} - ${item.price} x {item.quantity}
                        </li>
                    ))}
                </ul>

                <p className="mt-4">TOTAL: ${getTotal()}</p>
                <button
                    className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                    onClick={clearCart}
                >
                    Vaciar Carrito
                </button>
                <div className="mt-4">
                    <button
                        type="submit"
                        className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                    >
                        Confirmar Compra
                    </button>
                    <Link to="/">
                        <button className="drop-shadow-lg bg-zinc-800 rounded-md p-3 m-3 text-stone-100">Seguir Comprando</button>
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default Cart;
