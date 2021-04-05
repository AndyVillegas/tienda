import React, { useEffect, useReducer } from 'react'
import { userReducer } from '../reducers/userReducer';
const UserContext = React.createContext();
const initUser = (initialUser) => {
    return JSON.parse(localStorage.getItem('user-storage')) || initialUser;
}
export const UserProvider = ({ children }) => {
    const [user, dispatch] = useReducer(userReducer, {}, initUser);
    useEffect(() => {
        localStorage.setItem('user-storage', JSON.stringify(user));
    }, [user]);
    return (
        <UserContext.Provider value={[user, dispatch]}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext};
