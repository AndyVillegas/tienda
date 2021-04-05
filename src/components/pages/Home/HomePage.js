import React from 'react'
import { NavLink } from 'react-router-dom'

export const HomePage = () => {
    return (
        <div className="container mt-5">
            <div className="jumbotron">
                <h1 className="display-6">Bienvenido a mi tienda</h1>
                <p className="lead">Aquí encontrarás muchos productos de primera necesidad.</p>
                <hr className="my-4" />
                <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
                <p className="lead">
                    <NavLink className="btn btn-primary" to="/productos" role="button">Empezar ahora</NavLink>
                </p>
            </div>
        </div>
    )
}
