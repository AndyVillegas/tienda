import { getTotalCart } from '../../../helpers/cartHelper'

export const MySaleHistoryDetail = ({ activeCart }) => {
    return (
        <div className="row">
            <table className="table table-sm">
                <thead>
                    <tr>
                        <th scope="col">Producto</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {activeCart.map(item => (
                        <tr key={item.product.id}>
                            <th scope="row">
                                {item.product.nombre}
                            </th>
                            <td>{item.quantity}</td>
                            <td>{item.product.precio}</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td></td>
                        <th>TOTAL</th>
                        <td>{getTotalCart(activeCart)}</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}
