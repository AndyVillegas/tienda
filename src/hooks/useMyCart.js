import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserProvider";
import { getTotalCart } from "../helpers/cartHelper";
import { addCart } from "../services/cartService";
import { useCart } from "./useCart";
import { useModal } from "./useModal";

export const useMyCart = () => {
    const { cart, cleanCart } = useCart();
    const [user] = useContext(UserContext);
    const { isOpen, openModal, closeModal } = useModal();
    const [state, setState] = useState({
        isLoading: false,
        infoMessage: null,
        total: 0
    })
    useEffect(() => {
        setState(prev => ({ ...prev, total: getTotalCart(cart) }));
    }, [cart]);
    const { isLoading, infoMessage, total } = state;
    const handlePay = async () => {
        if (user.logged) {
            if (cart.length === 0) {
                setState(prev => ({ ...prev, infoMessage: 'No hay productos en el carrito.' }));
                return;
            }
            setState(prev => ({ ...prev, isLoading: true }));
            await addCart(cart, user);
            cleanCart();
            setState(prev => ({ ...prev, isLoading: false, infoMessage: 'El pedido fue enviado con éxito.' }));
        } else {
            openModal();
        }
    }
    useEffect(() => {
        if (user.logged && isOpen) closeModal();
    }, [user, closeModal, isOpen]);
    return {
        isOpen,
        closeModal,
        isLoading,
        infoMessage,
        total,
        handlePay
    }
}