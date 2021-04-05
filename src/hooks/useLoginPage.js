import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserProvider";
import { typesUser } from "../types/typesUser";
import { getUser } from './../services/userService';

export const useLoginPage = () => {
    const [, dispatch] = useContext(UserContext);
    const [state, setState] = useState({
        isLoading: false,
        isError: false,
        errorMessage: '',
        correo: '',
        clave: ''
    });
    const { isLoading, isError, errorMessage, correo, clave } = state;
    const handleSubmit = (e) => {
        e.preventDefault();
        setState(prev => ({ ...prev, isLoading: true }));
        getUser(correo, clave)
            .then(user => {
                setState(prev => ({
                    ...prev,
                    isError: !user.logged,
                    errorMessage: !user.logged && 'Las credenciales ingresadas no son válidas.',
                    isLoading: false
                }));
                if (user.logged) {
                    dispatch({
                        type: typesUser.login,
                        payload: user
                    });
                }
            })
    }
    const handleInputChange = e => {
        setState(prev => ({
            ...prev,
            [e.target.id]: e.target.value
        }))
    }
    return {
        isLoading,
        isError,
        errorMessage,
        handleInputChange,
        handleSubmit,
        correo,
        clave
    }
}