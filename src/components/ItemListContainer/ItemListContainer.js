import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import ItemList from '../ItemList/ItemList';
import db from '../../firebase'

const ItemListContainer = () => {
    const { categoryId } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
        const itemsCollection = collection(db, 'items');
        const q = categoryId
            ? query(itemsCollection, where('category', '==', categoryId))
            : itemsCollection;

        const querySnapshot = await getDocs(q);

        const fetchedProducts = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));

        setProducts(fetchedProducts);
        setLoading(false);
        };

        fetchProducts();
    }, [categoryId]);

    if (loading) {
        return <p>Cargando...</p>;
    }

    return (
        <div className="flex flex-col">
        <ItemList products={products} />
        </div>
    );
};

export default ItemListContainer;