import React, { createContext, useContext, useState } from 'react';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import db from '../firebase';

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    const addToCart = (item, quantity) => {
        const existingItem = cart.find((cartItem) => cartItem.id === item.id);

        if (existingItem) {
            const updatedCart = cart.map((cartItem) =>
                cartItem.id === item.id
                    ? { ...cartItem, quantity: cartItem.quantity + quantity }
                    : cartItem
            );
            setCart(updatedCart);
        } else {
            setCart([...cart, { ...item, quantity }]);
        }
    };

    const removeFromCart = (itemId) => {
        const updatedCart = cart.filter((item) => item.id !== itemId);
        setCart(updatedCart);
    };

    const increaseQuantity = (itemId) => {
        const updatedCart = cart.map((item) =>
            item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
        );
        setCart(updatedCart);
    };

    const decreaseQuantity = (itemId) => {
        const updatedCart = cart.map((item) =>
            item.id === itemId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
        );
        setCart(updatedCart);
    };

    const clearCart = () => {
        setCart([]);
    };

    const checkout = async (name, phone, email) => {
        try {
            const orderData = {
                buyer: {
                    name,
                    phone,
                    email,
                },
                items: cart.map((item) => ({
                    id: item.id,
                    title: item.title,
                    price: item.price,
                })),
                date: Timestamp.now(),
                total: cart.reduce((total, item) => total + item.price * item.quantity, 0), 
            };

            const docRef = await addDoc(collection(db, 'orders'), orderData);

            console.log('Order submitted with ID: ', docRef.id);

            clearCart();
        } catch (error) {
            console.error('Error submitting order: ', error);
        }
    };

    return (
        <CartContext.Provider
            value={{ cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart, checkout }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}