import React from 'react';
import { Link } from 'react-router-dom';

const ItemList = ({ products }) => {
    return (
        <div className="flex justify-center">
        {products.map((product) => (
            <div key={product.id}>
            <h3 className="drop-shadow-lg text-zinc-800 rounded-md text-2xl p-1 m-3 bg-stone-100">{product.title}</h3>
            <img src={product.img} alt={product.title} className="w-60 h-60 m-5" />
            <p>Precio: ${product.price}</p>
            <Link to={`/item/${product.id}`}>
                <button type="button" className="drop-shadow-lg bg-zinc-800 rounded-md p-3 m-3 text-stone-100">Detalle</button>
            </Link>
            </div>
        ))}
        </div>
    );
};

export default ItemList;