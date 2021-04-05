import { useMySaleHistory } from '../../../hooks/useMySaleHistory';
import { Loading } from '../../common/Loading';
import { MySaleHistoryDetail } from './MySaleHistoryDetail';
import { MySaleHistoryList } from './MySaleHistoryList';

export const MySaleHistoryPage = () => {
    const {
        isLoading,
        carts,
        handleViewDetail,
        activeCart
    } = useMySaleHistory();
    return (
        <div className="container mt-3">
            <h1>Mi historial de compras</h1>
            <div className="row">
                <div className="col-md-7">
                    {isLoading ?
                        <div className="col text-center mt-5">
                            <Loading />
                        </div> :
                        <MySaleHistoryList carts={carts} handleViewDetail={handleViewDetail} />}
                </div>
                <div className="col-md-5">
                    <h3>Detalle de compra</h3>
                    {activeCart ?
                        <MySaleHistoryDetail activeCart={activeCart} /> :
                        <div className="alert alert-info">
                            No ha seleccionado una compra aún.
                        </div>}
                </div>
            </div>
        </div>
    )
}
