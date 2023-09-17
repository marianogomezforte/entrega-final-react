import React, { useState } from 'react';
import { useCart } from '../../Context/CartContext';

const CheckoutForm = ({ onCheckout }) => {
    const { cart } = useCart();
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onCheckout(name, phone, email);
    };

    return (
        <div className="container mx-auto p-4">
            <h3 className="text-2xl font-semibold mb-4">Finalizar Compra</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    placeholder="Nombre"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border border-gray-300 p-2 w-full"
                />
                <input
                    type="text"
                    placeholder="Teléfono"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="border border-gray-300 p-2 w-full"
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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

                <button
                    type="submit"
                    className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                >
                    Confirmar Compra
                </button>
            </form>
        </div>
    );
};

export default CheckoutForm;
