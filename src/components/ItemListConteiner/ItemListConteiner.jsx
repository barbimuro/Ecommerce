import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import {getDocs, query, where, collection } from 'firebase/firestore'
import { db } from "../../main";

const ItemListConteiner = () => {
    const [products, setProducts] = useState ([])


    const { categoryId } = useParams()
    useEffect(()=>{
        const collectionRef = categoryId
        ?query(collection(db, 'productos'), where ('category', '==', categoryId))
        :collection(db, 'productos')

        getDocs(collectionRef)
            .then(response => {
                const productsAdapted = response.docs.map(doc =>{
                    const data = doc.data()
                    return{id: doc.id, ...data}
                    
                })
                setProducts(productsAdapted) 
            }) .catch(error =>{
                console.error(error)
            })
        /*
        const queryProd = query(collection(db, 'productos'), where("price", ">", 80))
        getDocs(queryProd).then((snapshot)=> { if(snapshot.size === 0){
          console.log('No results found')
        }
        snapshot.docs.map((item)=> console.log({...item.data}))})*/
      },[])
/*
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
*/
    return (
        <div>   
            <ItemList products={products} />
        </div>
    );
}

export default ItemListConteiner;