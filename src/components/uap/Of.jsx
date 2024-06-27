import { lazy, Suspense } from 'react'
import Loader from '../Loader'

const Param = lazy(() => import('./Param'))

const Of = ({ title, data, values, style, icon }) => {
    const progress = ((values.Production / values['Qté Obj']) * 100).toFixed(2)

    return (
        <div className={style.blocKpi}>
            <div className={style.titreImageOf}>
                <img src={icon} alt="iconkpi" className={style.iconOf} />
                <h2 className={style.blocTitle}>{title}</h2>
            </div>
            <div className={style.kpis}>
                <div>
                    <div className={style['progress-bar-container']}>
                        <div
                            className={style['progress-bar']}
                            style={{ width: `${progress}%` }}
                        >
                            <span
                                className={style['progress-label']}
                            >{`${progress}%`}</span>
                        </div>
                    </div>
                    <p className={style.subKpi}>
                        Progression de la réalisation
                    </p>
                </div>
                {Object.keys(data).map((p) => (
                    <Suspense key={p} fallback={<Loader />}>
                        <Param
                            param={p}
                            name={data[p]}
                            value={values[p]}
                            style={style}
                        />
                    </Suspense>
                ))}
            </div>
        </div>
    )
}

export default Of
