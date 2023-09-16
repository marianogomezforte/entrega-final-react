import React, { useState } from 'react';
import { useCart } from '../../Context/CartContext';

const CheckoutForm = () => {
    const { cart, checkout } = useCart();
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        checkout(name, phone, email);
    };

    return (
        <div>
            <h3>Finalizar Compra</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nombre"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Teléfono"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <h4>Elementos del carrito:</h4>
                <ul>
                    {cart.map((item) => (
                        <li key={item.id}>
                            {item.title} - ${item.price}
                        </li>
                    ))}
                </ul>

                <button type="submit">Confirmar Compra</button>
            </form>
        </div>
    );
};

export default CheckoutForm;
