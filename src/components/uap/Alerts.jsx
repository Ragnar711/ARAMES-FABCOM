import { lazy, Suspense } from 'react'
import Loader from '../Loader'

const Alert = lazy(() => import('./Alert'))

const Alerts = ({ data, values, style, icon }) => {
    return (
        <div className={style.blocKpi}>
            <div className={style.titreImageOf}>
                <img src={icon} alt="iconkpi" className={style.iconAlert} />
                <h2 className={style.blocTitle}>Alerte| flash incidents</h2>
            </div>
            <div className={style.kpis}>
                {Object.keys(data).map((alert) => (
                    <Suspense key={alert} fallback={<Loader />}>
                        <Alert
                            param={alert}
                            name={data[alert]}
                            value={values[alert].val}
                            cause={values[alert].desc}
                            style={style}
                        />
                    </Suspense>
                ))}
            </div>
        </div>
    )
}

export default Alerts
