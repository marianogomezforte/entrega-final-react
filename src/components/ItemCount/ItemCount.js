import React, { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial);

    const handleIncrement = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const handleDecrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const handleAddToCart = () => {
        if (count > 0) {
            onAdd(count);
        }
    };

    return (
        <div className="flex flex-col items-center">
            <div className="flex justify-center items-center space-x-2">
                <button
                    className="bg-gray-200 rounded-md px-3 py-1 disabled:opacity-50"
                    onClick={handleDecrement}
                    disabled={count <= 1}
                >
                    -
                </button>
                <p className="text-xl font-semibold">{count}</p>
                <button
                    className="bg-gray-200 rounded-md px-3 py-1 disabled:opacity-50"
                    onClick={handleIncrement}
                    disabled={count >= stock}
                >
                    +
                </button>
            </div>
            <button
                className="drop-shadow-lg bg-zinc-800 rounded-md p-3 m-3 text-stone-100"
                onClick={handleAddToCart}
            >
                Agregar al Carrito
            </button>
        </div>
    );
};

export default ItemCount;
