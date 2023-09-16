import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import ItemDetail from '../ItemDetail/ItemDetail';
import db from '../../firebase'

const ItemDetailContainer = () => {
    const { itemId } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
        const itemRef = doc(db, 'items', itemId);

        const docSnapshot = await getDoc(itemRef);

        if (docSnapshot.exists()) {
            setProduct({ id: docSnapshot.id, ...docSnapshot.data() });
            setLoading(false);
        }
        };

        fetchProduct();
    }, [itemId]);

    if (loading) {
        return <p>Cargando...</p>;
    }

    return (
        <div className="flex flex-col bg-slate-400">
        <ItemDetail product={product} />
        </div>
    );
};

export default ItemDetailContainer;

