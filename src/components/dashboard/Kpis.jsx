import iconKpi from '../../assets/iconKpi.webp'
import { lazy, Suspense } from 'react'
import Loader from '../Loader'

const Kpi = lazy(() => import('./Kpi'))

const Kpis = ({ style, data }) => {
    return (
        <div className={style.blocKpi}>
            <div className={style.titreImageOf}>
                <img src={iconKpi} alt="iconkpi" className={style.iconOf} />
                <h2>KPI | Performance de la section</h2>
            </div>
            <div className={style.spans}>
                <div className={style.blocQuantite}>
                    <div
                        style={{
                            display: 'flex',
                            width: '100%',
                            justifyContent: 'space-between',
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                lineHeight: '0.75rem',
                            }}
                        >
                            <span
                                className={style.titreBloc}
                                style={{
                                    fontSize: '0.4rem',
                                    color: 'black',
                                }}
                            >
                                Taux de Rendement Synthétique
                            </span>
                            <span
                                className={style.titreBloc}
                                style={{
                                    fontSize: '0.4rem',
                                    color: 'black',
                                }}
                            >
                                Taux de performance
                            </span>
                            <span
                                className={style.titreBloc}
                                style={{
                                    fontSize: '0.4rem',
                                    color: 'black',
                                }}
                            >
                                Taux de disponibilité
                            </span>
                            <span
                                className={style.titreBloc}
                                style={{
                                    fontSize: '0.4rem',
                                    color: 'black',
                                }}
                            >
                                Taux de qualité
                            </span>
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-around',
                                lineHeight: '0.75rem',
                            }}
                        >
                            <Suspense fallback={<Loader />}>
                                <Kpi
                                    kpi="TRS"
                                    value={data?.kpi?.TRS ?? 80}
                                    style={style}
                                />
                            </Suspense>
                            <Suspense fallback={<Loader />}>
                                <Kpi
                                    kpi="TP"
                                    value={data?.kpi?.TP ?? 70}
                                    style={style}
                                />
                            </Suspense>{' '}
                            <Suspense fallback={<Loader />}>
                                <Kpi
                                    kpi="TD"
                                    value={data?.kpi?.TD ?? 60}
                                    style={style}
                                />
                            </Suspense>{' '}
                            <Suspense fallback={<Loader />}>
                                <Kpi
                                    kpi="TQ"
                                    value={data?.kpi?.TQ ?? 100}
                                    style={style}
                                />
                            </Suspense>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Kpis
