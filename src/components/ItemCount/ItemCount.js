import React, { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial);

    const increment = () => {
        if (quantity < stock) {
        setQuantity(quantity + 1);
        onAdd(quantity + 1);
        }
    };

    const decrement = () => {
        if (quantity > 1) {
        setQuantity(quantity - 1);
        onAdd(quantity - 1);
        }
    };

    return (
        <div>
        <div className="flex justify-center">
            <button type="button" onClick={decrement} className="drop-shadow-lg bg-zinc-800 rounded-md text-2xl w-6 p-1 m-3 text-stone-100">-</button>
            <h4 className="w-6 p-1 m-3 text-2xl">{quantity}</h4>
            <button type="button" onClick={increment} className="drop-shadow-lg bg-zinc-800 rounded-md text-2xl w-6 p-1 m-3 text-stone-100">+</button>
        </div>
        </div>
    );
};

export default ItemCount;

