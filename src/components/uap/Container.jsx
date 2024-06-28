import { lazy, Suspense } from 'react'
import Loader from '../Loader'

const Param = lazy(() => import('./Param'))

const Container = ({ title, data, values, style, icon }) => {
    return (
        <div className={style.blocKpi}>
            <div className={style.titreImageOf}>
                <img src={icon} alt="iconkpi" className={style.iconOf} />
                <h2 className={style.blocTitle}>{title}</h2>
            </div>
            <div className={style.kpis}>
                {Object.keys(data).map((kpi) => (
                    <Suspense key={kpi} fallback={<Loader />}>
                        <Param
                            param={kpi}
                            name={data[kpi]}
                            value={values[kpi]}
                            style={style}
                        />
                    </Suspense>
                ))}
            </div>
        </div>
    )
}

export default Container
