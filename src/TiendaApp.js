import React from 'react';
import { CartProvider } from './contexts/CartProvider';
import { UserProvider } from './contexts/UserProvider';
import { AppRouter } from './routers/AppRouter';

export const TiendaApp = () => {
    return (
        <UserProvider>
            <CartProvider>
                <AppRouter />
            </CartProvider>
        </UserProvider>
    )
}
