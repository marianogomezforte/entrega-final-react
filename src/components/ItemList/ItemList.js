/* import React, { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const ItemList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
        try {
            const db = getFirestore();
            const itemsCollection = collection(db, 'items');
            const querySnapshot = await getDocs(itemsCollection);
            const docs = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            setItems(docs);
        } catch (error) {
            console.error('Error al obtener los productos:', error);
        }
        };
        fetchItems();
    }, []);

    return (
        <div className="flex justify-center">
        {items.map((item) => (
            <div key={item.id}>
            <h3 className="drop-shadow-lg text-zinc-800 rounded-md text-2xl p-1 m-3 bg-stone-100">{item.nombre}</h3>
            <img src={item.img} alt={item.nombre} className="w-72 h-72 m-5" />
            <p>Precio: ${item.precio}</p>
            </div>
        ))}
        </div>
    );
};

export default ItemList;
 */

import React from 'react';
import { Link } from 'react-router-dom';

const ItemList = ({ products }) => {
    return (
        <div className="flex justify-center">
        {products.map((product) => (
            <div key={product.id}>
            <h3 className="drop-shadow-lg text-zinc-800 rounded-md text-2xl p-1 m-3 bg-stone-100">{product.title}</h3>
            <img src={product.img} alt={product.title} className="w-72 h-72 m-5" />
            <p>Precio: ${product.price}</p>
            <Link to={`/item/${product.id}`}>
                <button type="button" className="drop-shadow-lg bg-zinc-800 rounded-md text-2xl p-1 m-3 text-stone-100">Detalle</button>
            </Link>
            </div>
        ))}
        </div>
    );
};

export default ItemList;

