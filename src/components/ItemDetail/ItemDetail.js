import React, { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import ItemCount from '../ItemCount/ItemCount';
import { useCart } from '../../Context/CartContext';
import db from '../../firebase';
import { Link } from 'react-router-dom';

const ItemDetail = ({ itemId }) => {
    const [item, setItem] = useState(null);
    const [showButtons, setShowButtons] = useState(false);
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

    const handleQuantityChange = (count) => {
        addToCart(item, count);
        setShowButtons(true);
    };

    return (
        <div className="flex flex-col bg-slate-400">
            <h3 className="drop-shadow-lg text-zinc-800 rounded-md text-2xl p-1 m-3 bg-stone-100 w-96 self-center">{item?.title}</h3>
            <img src={item?.img} alt={item?.title} className="self-center w-96 h-96 rounded-md" />
            <p>Precio: ${item?.price}</p>
            <p>{item?.description}</p>
            {showButtons ? (
                <div className="flex justify-center">
                    <Link to="/">
                        <button className="drop-shadow-lg bg-zinc-800 rounded-md p-3 m-3 text-stone-100">Seguir Comprando</button>
                    </Link>
                    <Link to="/cart">
                        <button className="drop-shadow-lg bg-zinc-800 rounded-md p-3 m-3 text-stone-100">Ir al Carrito</button>
                    </Link>
                </div>
            ) : (
                <ItemCount stock={item?.stock} initial={1} onAdd={handleQuantityChange} />
            )}
        </div>
    );
};

export default ItemDetail;



