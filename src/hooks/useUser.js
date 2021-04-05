import { useContext, useState } from "react"
import { UserContext } from "../shared/Context";
import { typesUser } from "../types/typesUser";

export const useUser = (user, dispatch)=>{
    const loginUser = (user)=>{
        dispatch({
            type: typesUser.login,
            payload: user
        });
    }
    const logoutUser = ()=>{
        dispatch({
            type: typesUser.logout
        });
    };
    return {
        user,
        loginUser,
        logoutUser
    };
}