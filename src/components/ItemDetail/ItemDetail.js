import React, { useEffect, useState } from 'react';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import ItemCount from '../ItemCount/ItemCount'
import { useCart } from '../../Context/CartContext';



const ItemDetail = ({ id }) => {
    const [item, setItem] = useState({});
    const { addToCart } = useCart();

    useEffect(() => {
        const fetchItem = async () => {
        try {
            const db = getFirestore();
            const itemRef = doc(db, 'items', id);
            const snapshot = await getDoc(itemRef);

            if (snapshot.exists()) {
            setItem({ id: snapshot.id, ...snapshot.data() });
            }
        } catch (error) {
            console.error('Error al obtener el producto:', error);
        }
        };
        fetchItem();
    }, [id]);

    return (
        <div className="flex flex-col bg-slate-400">
            <h3 className="drop-shadow-lg text-zinc-800 rounded-md text-2xl p-1 m-3 bg-stone-100 w-96 self-center">{item.nombre}</h3>
            <img src={item.img} alt={item.nombre} className="self-center w-96 h-96 rounded-md"/>
            <p>Precio: ${item.precio}</p>
            <p>{item.descripcion}</p>
            <ItemCount stock={item.stock} initial={1} onAdd={(cantidad)=> addToCart(item, cantidad)}/>
        </div>
    );
};

export default ItemDetail;
