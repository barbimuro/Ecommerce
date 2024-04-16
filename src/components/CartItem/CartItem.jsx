import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";


const CartItem = ({ id, name, quantity, price}) => {
    const {removeItem, Subtotal} = useContext(CartContext)
    const subtotal = Subtotal(quantity, price);
  return (
    <div className="cart-item">
      <div className="item-info">
        <h4 >{name}</h4>
        <p>Cantidad: {quantity}</p>
        <p>Precio unitario: ${price}</p>
        <p>Subtotal: ${subtotal}</p>
      </div>
      <button onClick={()=> removeItem(id)} className="Button">Eliminar producto</button>
    </div>
  );
};

export default CartItem;