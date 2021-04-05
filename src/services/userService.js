import { db } from "../config/firebase";

const getUser = async (correo, clave) => {
    const querySnapshot = await db.collection('usuarios')
        .where('correo', '==', correo)
        .where('clave', '==', clave)
        .limit(1)
        .get();
    if (querySnapshot.empty) {
        return { logged: false }
    }
    const doc = querySnapshot.docs[0];
    return { ...doc.data(), id: doc.id, logged: true }
}
export {
    getUser
}