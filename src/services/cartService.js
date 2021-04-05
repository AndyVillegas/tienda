import { db } from "../config/firebase";
import { getTotalCart } from "../helpers/cartHelper";
const addCart = async (cart, user) => {
    const docRef = await db.collection('carts').add({
        cart,
        total: getTotalCart(cart),
        fecha: new Date(),
        user: {
            id: user.id,
            nombre: user.nombre,
            correo: user.correo
        }
    })
    return docRef;
}
const getAllCarts = async user => {
    const querySnapshot = await db.collection('carts').where('user.id', '==', user.id).get();
    const docs = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
    return docs;
}
export {
    addCart,
    getAllCarts
}