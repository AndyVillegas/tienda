import React, { useContext } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { UserContext } from '../../contexts/UserProvider';
import { typesUser } from '../../types/typesUser';

export const Navbar = () => {
    const [user, dispatch] = useContext(UserContext);
    const history = useHistory();
    const handleLogout = () => {
        dispatch({ type: typesUser.logout });
        history.replace('/login');
    }
    return (
        <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
            <NavLink className="navbar-brand" to="/">Mi Tienda</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink activeClassName="active" className="nav-link" exact to="/">Inicio</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="active" className="nav-link" to="/productos">Productos</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="active" className="nav-link" to="/mi-carrito">Mi Carrito</NavLink>
                    </li>
                    {user.logged && <li className="nav-item">
                        <NavLink activeClassName="active" className="nav-link" to="/mi-historial">Mi Historial</NavLink>
                    </li>}
                </ul>
                <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                        <button className="btn btn-link nav-link dropdown-toggle" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {user.logged ? user.nombre : 'Mi cuenta'}
                        </button>
                        <div className="dropdown-menu  dropdown-menu-right" aria-labelledby="navbarDropdown">
                            {user.logged ?
                                <>
                                    <button onClick={handleLogout} className="btn btn-link dropdown-item">Cerrar sesión</button>
                                </> :
                                <>
                                    <Link className="dropdown-item" to="/login">Iniciar sesión</Link>
                                    <Link className="dropdown-item" to="/register">Registrarse</Link>
                                </>}
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
