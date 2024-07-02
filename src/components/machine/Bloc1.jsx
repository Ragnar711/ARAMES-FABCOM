import iconparam from '../../assets/iconparam.webp'
import { lazy, Suspense } from 'react'
import Loader from '../Loader'

const Gauge = lazy(() => import('./Gauge'))
const GaugeKpi = lazy(() => import('./GaugeKpi'))

const Bloc1 = ({ style }) => {
    return (
        <div className={style.bloc1}>
            <p className={style.title}>
                <img alt="icon" src={iconparam} /> Performance instantanée
            </p>
            <div className={style.content}>
                <div className={style.of}>
                    <div>
                        <span className={style.TA}>05:00:00</span>
                        <span className={style.TM}>03:00:00</span>
                    </div>
                    <div>
                        <span className={style.T_text}>
                            Temps d’arrêt I poste
                        </span>
                        <span className={style.T_text}>
                            Temps de marche I Poste
                        </span>
                    </div>
                </div>
                <div className={style.bigGauges}>
                    <Suspense fallback={<Loader />}>
                        <Gauge value={60} kpi="trs" />
                    </Suspense>
                    <div className={style.verticalLine}></div>
                    <Suspense fallback={<Loader />}>
                        <Gauge value={60} kpi="trs" />
                    </Suspense>
                </div>
                <div className={style.smallGauges}>
                    <Suspense fallback={<Loader />}>
                        <GaugeKpi value={100} kpi="tq" style={style} />
                        <GaugeKpi value={60} kpi="td" style={style} />
                        <GaugeKpi value={90} kpi="tp" style={style} />
                        <GaugeKpi value={10} kpi="tde" style={style} />
                    </Suspense>
                </div>
            </div>
        </div>
    )
}

export default Bloc1
