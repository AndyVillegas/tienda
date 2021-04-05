import { useCallback, useState } from 'react';
import { useModal } from './useModal';

export const useProductList = () => {
    const [state, setState] = useState({
        activeProduct: null
    });
    const { activeProduct } = state;
    const { isOpen,
        openModal,
        closeModal } = useModal();
    const handleAddToCart = useCallback(product => {
        setState({ activeProduct: product });
        openModal();
    }, [openModal]);

    return {
        activeProduct,
        isOpen,
        closeModal,
        handleAddToCart
    }
}
