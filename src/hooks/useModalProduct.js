import { useReducer } from "react";
import { itemCartReducer } from "../reducers/itemCartReducer";
import { typesItemCart } from "../types/typesItemCart";
import { useCart } from "./useCart";

export const useModalProduct = (product) => {
    const { addToCart, cart } = useCart();
    const initialUnits = cart.find(item => item.product.id === product.id)?.quantity || 0;
    const [state, dispatch] = useReducer(itemCartReducer, {
        product,
        total: 0,
        quantity: initialUnits,
        units: initialUnits
    });
    const { total, quantity, units } = state;
    const increaseQuantity = () => {
        dispatch({
            type: typesItemCart.increaseQuantity
        })
    }
    const decreaseQuantity = () => {
        dispatch({
            type: typesItemCart.decreaseQuantity
        })
    }
    const handleAdd = () => {
        addToCart({ product, quantity });
        dispatch({
            type: typesItemCart.updateUnits,
            payload: quantity
        })
    }
    return {
        units,
        quantity,
        increaseQuantity,
        decreaseQuantity,
        total,
        handleAdd
    }
}