import React from 'react'
import { useMyCart } from '../../../hooks/useMyCart';
import { Loading } from '../../common/Loading';
import { Modal } from '../../common/Modal';
import { LoginForm } from '../Login/LoginForm';

export const MyCartPay = () => {
    const {
        isOpen,
        closeModal,
        infoMessage,
        total,
        isLoading,
        handlePay
    } = useMyCart();
    return (
        <>
            <div className="card">
                <div className="card-body">
                    {infoMessage && <div className="alert alert-info">
                        {infoMessage}
                    </div>}
                    <h5 className="card-title">Total de compra</h5>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            Subtotal
                        <span className="badge badge-primary badge-pill">{total.toFixed(2)}</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            Descuento
                        <span className="badge badge-primary badge-pill">{0}</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            Total
                        <span className="badge badge-primary badge-pill">{total.toFixed(2)}</span>
                        </li>
                    </ul>
                    {isLoading ? 
                    <div className="col text-center">
                        <Loading /> 
                    </div>
                    : <button
                        onClick={handlePay}
                        className="btn btn-success btn-block">
                        <i className="fas fa-store"></i> Confirmar compra
                    </button>}
                </div>
            </div>
            {isOpen &&
                <Modal isOpen={isOpen} closeModal={closeModal} title="Para continuar inicia sesión.">
                    <LoginForm />
                </Modal>}
        </>
    )
}
