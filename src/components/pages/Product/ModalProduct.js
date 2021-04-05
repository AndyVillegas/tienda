import React, { memo } from 'react'
import { useModalProduct } from '../../../hooks/useModalProduct';
import { Modal } from '../../common/Modal';
import { ProductCounter } from './ProductCounter';

export const ModalProduct = memo(({ isOpen, closeModal, product }) => {
    const { units,
        quantity,
        increaseQuantity,
        decreaseQuantity,
        total,
        handleAdd } = useModalProduct(product);
    return (
        <Modal title={product?.nombre} isOpen={isOpen} closeModal={closeModal}>
            <div className="modal-body">
                <div className="container-fluid">
                    {units !== 0 && <div className="row">
                        <div className="col">
                            <div className="alert alert-info">
                                Hay {units} unidad(es) en el carrito
                            </div>
                        </div>
                    </div>}
                    <div className="row">
                        <div className="col-md-5">
                            <div className="row">
                                <div className="col">
                                    <img className="img-fluid" src={product?.url_imagen} alt={product?.nombre} />
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col">
                                    <ProductCounter
                                        increaseQuantity={increaseQuantity}
                                        decreaseQuantity={decreaseQuantity}
                                        quantity={quantity} />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <p>{product?.descripcion}</p>
                            <div className="row">
                                <div className="col">
                                    <small className="text-muted">
                                        $ {product?.precio?.toFixed(2)}
                                    </small>
                                </div>
                                <div className="col">
                                    $ {total?.toFixed(2)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <button onClick={closeModal} type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                <button onClick={handleAdd} type="button" className="btn btn-success">Agregar</button>
            </div>
        </Modal>
    )
})