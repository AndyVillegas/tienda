import { typesUser } from "../types/typesUser";

export const userReducer = (state, { type, payload }) => {
    switch (type) {
        case typesUser.login:
            return payload;
        case typesUser.logout:
            return {
                correo: '',
                logged: false
            };
        default:
            return state;
    }
}