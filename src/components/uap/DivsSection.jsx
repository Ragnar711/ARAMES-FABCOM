import { lazy, useState, useEffect } from 'react'
import User from '../../assets/usericon.png'
import alert from '../../assets/alert.png'
import kpi from '../../assets/iconKpi.webp'
import { getPoste } from '../../utils/getPoste'
import { getColor } from '../../utils/getColor'
import { Suspense } from 'react'

const Of = lazy(() => import('./Of'))
const Container = lazy(() => import('./Container'))
const Alerts = lazy(() => import('./Alerts'))

import Loader from '../Loader'

import of from '../../assets/of.png'

import { Parameters } from '../../config/params'

const MesDivs = ({ machineData, sequenceNumber, style }) => {
    const [data, setData] = useState({})

    const fetchData = async () => {
        try {
            const res = await fetch(
                `http://${window.location.hostname}:3001/api/v1/machine/${machineData.value}`
            )
            const resData = await res.json()
            setData(resData)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const machine =
        machineData.machine.split('-')[
            machineData.machine.split('-').length - 1
        ]

    const state = false

    return (
        <div className={style.machine}>
            <button className={style.state_btn}>
                <span>Marche</span>
            </button>
            <div className={style.bloc1}>
                <h2
                    className={style.title_machine}
                >{`Assemblage ${sequenceNumber} - ${machine}`}</h2>
                <div className={style.user}>
                    <img className={style.iconUser} src={User} alt="user" />
                    <span className={style.userText}>
                        Chef d'équipe - poste: {getPoste()}
                    </span>
                </div>
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
                <div className={style.machineImage}>
                    <img
                        className={style.imageMachine}
                        style={{ width: state ? '90%' : '70%' }}
                        src={machineData.image}
                        alt="machine"
                    />
                    {state ? null : (
                        <img
                            src={alert}
                            alt="alert"
                            style={{
                                width: '20%',
                                aspectRatio: '1.5/1',
                            }}
                        />
                    )}
                </div>
            </div>
            <div
                className={style.bloc2}
                style={{
                    marginBlock: '0.5rem',
                    height: '90%',
                }}
            >
                <Suspense fallback={<Loader />}>
                    <Of
                        title="OF| Progression d’OF"
                        data={Parameters.machine.OF}
                        values={data?.OF ?? {}}
                        style={style}
                        icon={of}
                    />
                </Suspense>
                <div className={style.blocKpi}>
                    <div className={style.titreImageOf}>
                        <img src={kpi} alt="iconkpi" className={style.iconOf} />
                        <h2 className={style.blocTitle}>
                            KPI | Performance de la ligne
                        </h2>
                    </div>
                    <div className={style.kpis}>
                        <div className={style.kpiContainer}>
                            <div className={style.kpiContent}>
                                <p className={style.kpi}>TRS</p>
                                <p className={style.subKpi}>
                                    Taux de rendement synthétique
                                </p>
                            </div>
                            <div
                                style={{
                                    border: `2px solid ${getColor(
                                        data?.KPIs?.TRS ?? 0,
                                        'trs'
                                    )}`,
                                    boxShadow: `0 0 0.5px ${getColor(
                                        data?.KPIs?.TRS ?? 0,
                                        'trs'
                                    )}`,
                                    width: '25%',
                                    fontSize: '0.45rem',
                                }}
                                className={style.kpiValue}
                            >
                                {data?.KPIs?.TRS?.toFixed(0) ?? 0}%
                            </div>
                        </div>
                        <div className={style.kpiContainer}>
                            <div className={style.kpiContent}>
                                <p className={style.kpi}>TP</p>
                                <p className={style.subKpi}>
                                    Taux de performance
                                </p>
                            </div>
                            <div
                                style={{
                                    border: `2px solid ${getColor(
                                        data?.KPIs?.TP ?? 0,
                                        'tp'
                                    )}`,
                                    boxShadow: `0 0 0.5px ${getColor(
                                        data?.KPIs?.TP ?? 0,
                                        'tp'
                                    )}`,
                                    width: '25%',
                                    fontSize: '0.45rem',
                                }}
                                className={style.kpiValue}
                            >
                                {data?.KPIs?.TP?.toFixed(0) ?? 0}%
                            </div>
                        </div>
                        <div className={style.kpiContainer}>
                            <div className={style.kpiContent}>
                                <p className={style.kpi}>TD</p>
                                <p className={style.subKpi}>
                                    Taux de disponibilité
                                </p>
                            </div>
                            <div
                                style={{
                                    border: `2px solid ${getColor(
                                        data?.KPIs?.TD ?? 0,
                                        'td'
                                    )}`,
                                    boxShadow: `0 0 0.5px ${getColor(
                                        data?.KPIs?.TD ?? 0,
                                        'td'
                                    )}`,
                                    width: '25%',
                                    fontSize: '0.45rem',
                                }}
                                className={style.kpiValue}
                            >
                                {data?.KPIs?.TD?.toFixed(0) ?? 0}%
                            </div>
                        </div>
                        <div className={style.kpiContainer}>
                            <div className={style.kpiContent}>
                                <p className={style.kpi}>TQ</p>
                                <p className={style.subKpi}>Taux de qualité</p>
                            </div>
                            <div
                                style={{
                                    border: `2px solid ${getColor(
                                        data?.KPIs?.TQ ?? 0,
                                        'tq'
                                    )}`,
                                    boxShadow: `0 0 0.5px ${getColor(
                                        data?.KPIs?.TQ ?? 0,
                                        'tq'
                                    )}`,
                                    width: '25%',
                                    fontSize: '0.45rem',
                                }}
                                className={style.kpiValue}
                            >
                                {data?.KPIs?.TQ?.toFixed(0) ?? 0}%
                            </div>
                        </div>
                        <div className={style.kpiContainer}>
                            <div className={style.kpiContent}>
                                <p className={style.kpi}>TDech</p>
                                <p className={style.subKpi}>Taux de déchets</p>
                            </div>
                            <div
                                style={{
                                    border: `2px solid ${getColor(
                                        data?.KPIs?.TDech ?? 0,
                                        'tdech'
                                    )}`,
                                    boxShadow: `0 0 0.5px ${getColor(
                                        data?.KPIs?.TDech ?? 0,
                                        'tdech'
                                    )}`,
                                    width: '25%',
                                    fontSize: '0.45rem',
                                }}
                                className={style.kpiValue}
                            >
                                {data?.KPIs?.TDech?.toFixed(0) ?? 0}%
                            </div>
                        </div>
                    </div>
                </div>
                {/* <Suspense fallback={<Loader />}>
                    <Container
                        title="Process | Paramètres process"
                        data={Parameters.machine.Process}
                        values={data?.Process ?? {}}
                        style={style}
                        icon={process}
                    />
                </Suspense>
                <Suspense fallback={<Loader />}>
                    <Alerts
                        data={Parameters.machine.Alerte}
                        values={data?.Alert ?? {}}
                        style={style}
                    />
                </Suspense> */}
            </div>
        </div>
    )
}

export default MesDivs
