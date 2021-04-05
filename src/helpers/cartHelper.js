const getTotalCart = (cart) => {
    return cart.reduce((a, c) => a + c.product.precio * c.quantity, 0);
}
export {
    getTotalCart
}