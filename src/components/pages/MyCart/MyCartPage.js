import React from 'react'
import { useCart } from '../../../hooks/useCart';
import { MyCartList } from './MyCartList';
import { MyCartPay } from './MyCartPay';
export const MyCartPage = () => {
    const { cart, deleteFromCart } = useCart();
    return (
        <div className="container mt-3">
            <h1>Mi carrito ({cart.length})</h1>
            <div className="row">
                <div className="col-md-8">
                    <MyCartList cart={cart} handleDeleteItem={deleteFromCart} />
                </div>
                <div className="col-md-4">
                    <MyCartPay />
                </div>
            </div>
        </div>
    )
}
