import React, { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import ItemCount from '../ItemCount/ItemCount';
import { useCart } from '../../Context/CartContext';
import db from '../../firebase'; 

const ItemDetail = ({ itemId }) => {
    const [item, setItem] = useState(null);
    const { addToCart } = useCart();

    useEffect(() => {
        const fetchItem = async () => {
            try {
                const itemRef = doc(db, 'items', itemId);
                const snapshot = await getDoc(itemRef);

                if (snapshot.exists()) {
                    setItem({ id: snapshot.id, ...snapshot.data() });
                } else {
                    console.error('El producto no existe');
                }
            } catch (error) {
                console.error('Error al obtener el producto:', error);
            }
        };
        fetchItem();
    }, [itemId]);

    if (!item) {
        return <p>Cargando...</p>;
    }

    return (
        <div className="flex flex-col bg-slate-400">
            <h3 className="drop-shadow-lg text-zinc-800 rounded-md text-2xl p-1 m-3 bg-stone-100 w-96 self-center">{item.title}</h3>
            <img src={item.img} alt={item.title} className="self-center w-96 h-96 rounded-md"/>
            <p>Precio: ${item.price}</p>
            <p>{item.description}</p>
            <ItemCount stock={item.stock} initial={1} onAdd={(cantidad) => addToCart(item, cantidad)} />
        </div>
    );
};

export default ItemDetail;
