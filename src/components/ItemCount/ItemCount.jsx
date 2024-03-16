import React, { useState, useEffect } from 'react';

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCounter] = useState(initial) 

    const increment = () => {
        if(stock > count) {
            setCounter(count+1)
        }
    }
    const decrement = () => {
        if(0 < count) {
            setCounter(count-1)
        }
    }
    return (
        <div className='Contador'>
            <div className='Controls'>
                <button className='Button' onClick={decrement}>-</button>
                <h3 className='Number'>{count}</h3>
                <button className='Button' onClick={increment}>+</button>
            </div>
                <button className='Button' onClick={()=> onAdd(count)} disabled={!stock}>
                    Agregar al carrito
                </button>

        </div>
    )
}
 
export default ItemCount;
