import React from 'react';
import './Login.css';
import { LoginForm } from './LoginForm';

export const LoginPage = () => {
    return (
        <div className="container d-flex justify-content-center align-items-center min-100vh">
            <LoginForm />
        </div>
    )
}
