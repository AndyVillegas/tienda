import { useCallback, useEffect, useState } from 'react'
import { getProducts } from './../services/productService';
export const useProductPage = () => {
    const [state, setState] = useState({
        isLoading: true,
        products: [],
        filteredProducts: [],
        search: ''
    });
    const { search, isLoading, products, filteredProducts } = state;
    useEffect(() => {
        getProducts()
            .then(products => {
                setState(prev => ({ ...prev, filteredProducts: products, products, isLoading: false }));
            })
    }, []);
    const handleClickSearch = useCallback(() => {
        setState(prev => ({ ...prev, isLoading: true }));
        const filteredProducts = products.filter(
            product => product.nombre.toLowerCase().includes(search.toLowerCase()));
        setState(prev => ({ ...prev, isLoading: false, filteredProducts }));
    }, [products, search]);
    const handleChangeSearch = (e)=>{
        setState(prev => ({ ...prev, search: e.target.value }))
    }
    return {
        search,
        isLoading,
        products,
        filteredProducts,
        handleChangeSearch,
        handleClickSearch
    }
}