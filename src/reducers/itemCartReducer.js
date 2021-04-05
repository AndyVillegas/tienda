import { typesItemCart } from "../types/typesItemCart";

export const itemCartReducer = (state, { type, payload }) => {
    switch (type) {
        case typesItemCart.increaseQuantity:
            return {
                ...state,
                quantity: state.quantity + 1,
                total: state.product.precio * (state.quantity + 1)
            }
        case typesItemCart.decreaseQuantity:
            return {
                ...state,
                quantity: state.quantity - 1,
                total: state.product.precio * (state.quantity - 1)
            }
        case typesItemCart.updateUnits:
            return {
                ...state,
                units: payload
            }
        default:
            return state;
    }
}