import React from 'react'
import { ProductList } from './ProductList';
import { Loading } from '../../common/Loading';
import { useProductPage } from '../../../hooks/useProductPage';

export const ProductPage = () => {
    const { search,
        isLoading,
        filteredProducts,
        handleChangeSearch,
        handleClickSearch } = useProductPage();
    const handlePressSearch = e=>{
        if(e.code === 'Enter'){
            handleClickSearch();
        }
    }
    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-10">
                    <input
                        value={search}
                        onChange={handleChangeSearch}
                        onKeyPress={handlePressSearch}
                        type="text" className="form-control" placeholder="Buscar producto..." />
                </div>
                <div className="col-md-2">
                    <button type="button" onClick={handleClickSearch} className="btn btn-primary">Buscar</button>
                </div>
            </div>
            <div className="row mt-3">
                {!isLoading ?
                    <ProductList products={filteredProducts} /> :
                    <div className="col text-center mt-5">
                        <Loading />
                    </div>}
            </div>
        </div>
    )
}
