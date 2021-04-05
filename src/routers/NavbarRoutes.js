import React, { useContext } from 'react'
import { Route, Switch } from 'react-router'
import { Navbar } from '../components/common/Navbar'
import { HomePage } from '../components/pages/Home/HomePage'
import { MyCartPage } from '../components/pages/MyCart/MyCartPage'
import { MySaleHistoryPage } from '../components/pages/MySaleHistory/MySaleHistoryPage'
import { ProductPage } from '../components/pages/Product/ProductPage'
import { UserContext } from '../contexts/UserProvider'
import { PrivateRoute } from './PrivateRoute'

export const NavbarRoutes = () => {
    const [user] = useContext(UserContext);
    return (
        <>
            <Navbar />
            <Switch>
                <PrivateRoute path="/mi-historial" isAuthenticated={user.logged} component={MySaleHistoryPage} />
                <Route path="/mi-carrito">
                    <MyCartPage />
                </Route>
                <Route path="/productos">
                    <ProductPage />
                </Route>
                <Route path="/">
                    <HomePage />
                </Route>
            </Switch>
        </>
    )
}
