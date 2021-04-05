import React from 'react'
import { useLoginPage } from '../../../hooks/useLoginPage';
import { Loading } from '../../common/Loading';

export const LoginForm = () => {
    const {
        isLoading,
        isError,
        errorMessage,
        handleInputChange,
        handleSubmit,
        correo,
        clave
    } = useLoginPage();
    return (
        <div className="card card-login">
            {isError &&
                <div className="alert alert-danger" role="alert">
                    {errorMessage}
                </div>}
            <div className="card-body">
                <h5 className="card-title">Bienvenido</h5>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="correo">Dirección de correo</label>
                        <input
                            onChange={handleInputChange}
                            value={correo}
                            type="email" className="form-control" id="correo" placeholder="name@example.com" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="clave">Contraseña</label>
                        <input
                            onChange={handleInputChange}
                            value={clave}
                            type="password" className="form-control" id="clave" placeholder="********" />
                    </div>
                    {isLoading ?
                        <div className="col text-center">
                            <Loading />
                        </div> :
                        <button type="submit" className="btn btn-success btn-block">Iniciar sesión</button>}
                </form>
            </div>
        </div>
    )
}
