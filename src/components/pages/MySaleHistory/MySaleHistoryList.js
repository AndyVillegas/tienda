export const MySaleHistoryList = ({ carts, handleViewDetail }) => {
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Fecha de compra</th>
                    <th scope="col">Total en compra</th>
                </tr>
            </thead>
            <tbody>
                {carts.map(item => (
                    <tr key={item.id}>
                        <th scope="row">
                            {new Date(item.fecha.seconds * 1000).toLocaleString()}
                        </th>
                        <td>{item.total}</td>
                        <td>
                            <button onClick={() => handleViewDetail(item.cart)} className="btn btn-sm btn-outline-secondary"><i className="fas fa-eye"></i> Detalle de compra</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
