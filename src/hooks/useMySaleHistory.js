import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserProvider";
import { getAllCarts } from "../services/cartService";

export const useMySaleHistory = () => {
    const [user] = useContext(UserContext);
    const [state, setState] = useState({
        carts: [],
        isLoading: true,
        activeCart: null
    });
    const { carts, isLoading, activeCart } = state;
    useEffect(() => {
        getAllCarts(user)
            .then(carts => {
                setState(prev => ({ ...prev, carts, isLoading: false }));
            })
    }, [user]);
    const handleViewDetail = cart => {
        setState(prev => ({ ...prev, activeCart: cart }));
    }
    return {
        handleViewDetail,
        carts,
        activeCart,
        isLoading
    }
}