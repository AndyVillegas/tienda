import { db } from "../config/firebase";

const getProducts = async () => {
    const querySnapshot = await db.collection('productos').get();
    const products = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
    return products;
}

export {getProducts};