import React, { useState, useEffect} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import {getDocs, query, where, collection} from 'firebase/firestore'
import { db } from "../../main";

const ItemDetailConteiner = () => {
    const [product, setProduct] = useState(null)

    const { itemId } = useParams()

    useEffect (()=> {
        const q = query(collection(db, 'productos'), where ('id', '==', itemId))
        getDocs(q)
        
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    const data = doc.data();
                    const productsAdapted = { id: doc.id, ...data };
                    setProduct(productsAdapted);
                });
            })
            .catch(error =>
                 {console.error(error)} )
    },[itemId])



    return (
        <div className="ItemDetailConteiner">
            <ItemDetail {...product} />
        </div>
    );
}

export default ItemDetailConteiner;
