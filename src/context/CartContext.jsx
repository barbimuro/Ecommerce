import { createContext, useState } from "react";

export const CartContext = createContext ({
    cart: []
})
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);


    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            const subtotal = quantity * item.price;
            setCart(prevCart => [...prevCart, { ...item, quantity, subtotal }]);
            setTotal(prevTotal => prevTotal + subtotal);
        } else {
            console.error("El producto ya fue agregado");
        }
    }
    const removeItem = (itemId) => {
        const cartUpdated = cart.filter((prod) => prod.id !== itemId);
        setCart(cartUpdated);
        const removedItem = cart.find((prod) => prod.id === itemId);
      };
      const clearCart = () => {
        setCart([]);
        setTotal(0);
      };
    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }
    const Subtotal = (quantity, price) => {
        return quantity * price;
    }
    
    const totalQuantity = () => {
        return cart.reduce((total, product) => total + product.quantity, 0);
      };
      console.log(totalQuantity)
    
    
    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clearCart, isInCart, Subtotal, totalQuantity, total}}>
                {children}
        </CartContext.Provider>
    )
 }