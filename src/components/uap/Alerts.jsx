import { lazy, Suspense } from 'react'
import Loader from '../Loader'
import icon from '../../assets/news.png'

const Alert = lazy(() => import('./Alert'))

const Alerts = ({ data, values, style }) => {
    return (
        <div className={style.blocKpi}>
            <div className={style.titreImageOf}>
                <img src={icon} alt="iconkpi" className={style.iconOf} />
                <h2 className={style.blocTitle}>Alerte | flash incidents</h2>
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
