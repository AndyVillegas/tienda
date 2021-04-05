import { typesCart } from "../types/typesCart";

export const cartReducer = (state, { type, payload }) => {
    switch (type) {
        case typesCart.agregar:
            return (payload.quantity === 0) ?
                state.filter(item => item.product.id !== payload.product.id) :
                [...state.filter(item => item.product.id !== payload.product.id), payload];
        case typesCart.eliminar:
            return state.filter(item => item.product.id !== payload);
        case typesCart.vaciar:
            return [];
        default:
            return state;
    }
}