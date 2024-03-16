import React, { useState, useEffect } from "react";
import { getProducts, getProductsById, getProductsByCategory } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListConteiner = ({ saludo }) => {
    const [products, setProducts] = useState ([])

    const { categoryId } = useParams()

    useEffect(() => {
        const AsyncFunc = categoryId ? getProductsByCategory : getProducts

        AsyncFunc(categoryId)
        .then(response => {
            setProducts(response);
        })
        .catch(error => {
            console.error(error);
        });
    }, [categoryId]);

    return (
        <div>
            <h1>{saludo}</h1>
            <ItemList products={products} />
        </div>
    );
}

export default ItemListConteiner;