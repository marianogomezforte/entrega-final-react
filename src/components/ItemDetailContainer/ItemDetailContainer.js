import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import ItemDetail from '../ItemDetail/ItemDetail';
import db from '../../firebase';

const ItemDetailContainer = () => {
    const { itemId } = useParams();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const itemRef = doc(db, 'items', itemId);
                const docSnapshot = await getDoc(itemRef);

                if (docSnapshot.exists()) {
                    setLoading(false);
                } else {
                    console.error('El producto no existe');
                }
            } catch (error) {
                console.error('Error al obtener el producto:', error);
            }
        };
        fetchProduct();
    }, [itemId]);

    if (loading) {
        return <p>Cargando...</p>;
    }

    return (
        <div className="flex flex-col bg-slate-400">
            <ItemDetail itemId={itemId} />
        </div>
    );
};

export default ItemDetailContainer;
