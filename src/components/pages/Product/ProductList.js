import React, { memo } from 'react';
import { useProductList } from '../../../hooks/useProductList';
import { ModalProduct } from './ModalProduct';
import { ProductItem } from './ProductItem';

export const ProductList = memo(({ products }) => {
    const {activeProduct,
        isOpen,
        closeModal,
        handleAddToCart} = useProductList();
    return <>
        {products.map((product) => (
            <ProductItem
                key={product.id}
                product={product}
                handleAddToCart={handleAddToCart} />
        ))}
        {isOpen &&
            <ModalProduct
                closeModal={closeModal}
                isOpen={isOpen}
                product={activeProduct}
            />}
    </>
})
