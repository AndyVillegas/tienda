import React, { memo } from 'react'

export const ProductItem = memo(({ product, handleAddToCart }) => {
    return (
        <div className="col-lg-3 col-md-4 col-sm-6 animate__animated animate__fadeIn">
            <div className="card mb-3">
                <img src={product.url_imagen} className="card-img-top" alt={product.nombre} />
                <div className="card-body">
                    <h5 className="card-title">{product.nombre}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">$ {product.precio.toFixed(2)}</h6>
                    <button onClick={() => handleAddToCart(product)} type="button" className="btn btn-sm btn-block btn-primary">
                        <i className="fas fa-plus"></i> Agregar al carrito
                    </button>
                </div>
            </div>
        </div>
    )
})