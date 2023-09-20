import React, { useState } from 'react';
import { useCart } from '../../Context/CartContext';

const CheckoutForm = () => {
    const { cart, checkout } = useCart();
    const [formData, setFormData] = useState({ name: '', phone: '', email: '' });

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, phone, email } = formData;

        if (cart.length === 0) {
            alert('El carrito está vacío. Agrega elementos antes de confirmar la compra.');
        } else if (name && phone && email) {
            checkout(name, phone, email);
        } else {
            alert('Por favor, completa todos los campos del formulario antes de finalizar la compra.');
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h3 className="text-2xl font-semibold mb-4">Finalizar Compra</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    placeholder="Nombre"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className=""
                />
                <input
                    type="text"
                    placeholder="Teléfono"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="border border-gray-300 p-2 w-full"
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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