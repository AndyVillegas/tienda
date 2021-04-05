import React, { useEffect, useReducer } from 'react'
import { cartReducer } from '../reducers/cartReducer';
const CartContext = React.createContext();
const initCart = (initialCart) => {
    return JSON.parse(localStorage.getItem('cart-storage')) || initialCart;
}
export const CartProvider = ({ children }) => {
    const [cart, dispatch] = useReducer(cartReducer, [], initCart);
    useEffect(() => {
        localStorage.setItem('cart-storage', JSON.stringify(cart));
    }, [cart]);
    return (
        <CartContext.Provider value={[cart, dispatch]}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContext};
