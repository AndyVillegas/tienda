import React from 'react'

export const ProductCounter = ({ increaseQuantity, decreaseQuantity, quantity }) => {
    return (
        <div className="input-group input-group-sm mb-3">
            <div className="input-group-prepend">
                <button
                    type="button"
                    onClick={decreaseQuantity}
                    className="btn btn-primary"><i className="fas fa-minus"></i></button>
            </div>
            <input value={quantity} readOnly type="text" className="form-control text-center fs-4" />
            <div className="input-group-append">
                <button
                    type="button"
                    onClick={increaseQuantity}
                    className="btn btn-primary"><i className="fas fa-plus"></i></button>
            </div>
        </div>
    )
}
