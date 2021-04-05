import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import { LoginPage } from '../components/pages/Login/LoginPage';
import { UserContext } from '../contexts/UserProvider';
import { NavbarRoutes } from './NavbarRoutes';
import { NoLoggedRoute } from './NoLoggedRoute';
export const AppRouter = () => {
    const [user] = useContext(UserContext);
    return (
        <Router>
            <Switch>
                <NoLoggedRoute isAuthenticated={user.logged} exact path="/login"  component={LoginPage} />
                <Route path="/" component={NavbarRoutes}/>
            </Switch>
        </Router>
    )
}
