import React from 'react'

export const MyCartList = ({ cart, handleDeleteItem }) => {
    return (
        <table className="table table-sm">
            <thead>
                <tr>
                    <th scope="col">Producto</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Total</th>
                    <th scope="col">Eliminar</th>
                </tr>
            </thead>
            <tbody>
                {
                    cart.map(({product, quantity}) => (
                        <tr key={product.id}>
                            <th scope="row">{product.nombre}</th>
                            <td>{product.precio}</td>
                            <td>{quantity}</td>
                            <td>{(quantity * product.precio)?.toFixed(2)}</td>
                            <td>
                                <button
                                    onClick={() => handleDeleteItem(product.id)}
                                    type="button"
                                    className="btn btn-sm btn-danger">
                                    <i className="fa fa-trash"></i>
                                </button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}
