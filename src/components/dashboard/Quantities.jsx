import { lazy, Suspense } from 'react'
import Loader from '../Loader'
import qte from '../../assets/qtte.webp'

const Quantity = lazy(() => import('./Quantity'))

const Quantities = ({ style }) => {
    return (
        <div className={style.blocKpi}>
            <div className={style.titreImageOf}>
                <img src={qte} alt="iconkpi" className={style.iconOf} />
                <h2>Qté | Split des quantités Réalisées</h2>
            </div>
            <div className={style.spans}>
                <Suspense fallback={<Loader />}>
                    <Quantity
                        style={style}
                        quantity="Total production:"
                        value={100}
                    />
                </Suspense>
                <Suspense fallback={<Loader />}>
                    <Quantity
                        style={style}
                        quantity="Total Qté NC Dérogée:"
                        value={0}
                    />
                </Suspense>
                <Suspense fallback={<Loader />}>
                    <Quantity
                        style={style}
                        quantity="Total Déchet:"
                        value={50.5}
                    />
                </Suspense>
                <Suspense fallback={<Loader />}>
                    <Quantity
                        style={style}
                        quantity="Total Qté en cours:"
                        value={0}
                    />
                </Suspense>
            </div>
        </div>
    )
}

export default Quantities
