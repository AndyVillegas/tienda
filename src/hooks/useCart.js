import { useContext } from "react";
import { CartContext } from "../contexts/CartProvider";
import { typesCart } from "../types/typesCart";

export const useCart = () => {
    const [cart, dispatch] = useContext(CartContext);
    return {
        cart,
        addToCart: item => dispatch({
            type: typesCart.agregar,
            payload: item
        }),
        deleteFromCart: id => dispatch({
            type: typesCart.eliminar,
            payload: id
        }),
        cleanCart: ()=>dispatch({
            type: typesCart.vaciar
        })
    };
}