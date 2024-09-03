import style from '../../styles/Section.module.css'
import User from '../../assets/usericon.png'
import alert from '../../assets/alert.png'
import of from '../../assets/of.png'
import quantity from '../../assets/quantity.png'
import eng from '../../assets/eng.png'
import kpi from '../../assets/iconKpi.webp'
import { getPoste } from '../../utils/getPoste'
import { getColor } from '../../utils/getColor'
import { calculateAverageKPI } from '../../utils/utils'
import { useState, useEffect, lazy, Suspense } from 'react'
import Loader from '../Loader'
import { Parameters } from '../../config/params'

const Param = lazy(() => import('./Param'))
const Container = lazy(() => import('./Container'))

const MesDivs = ({ machineData }) => {
    const uap = machineData.section
    const state = false
    const [data, setData] = useState([])
    const machines = ['tbs', 'sovema1']
    const ports = [3001, 3002]

    const fetchData = async (machine, port) => {
        try {
            const res = await fetch(
                `http://${window.location.hostname}:${port}/api/v1/machine/${machine}`
            )
            if (!res.ok) {
                throw new Error(
                    `Network response was not ok: ${res.statusText}`
                )
            }
            const resData = await res.json()
            setData((prevData) => {
                const machineIndex = prevData.findIndex(
                    (item) => item.machine === machine
                )
                if (machineIndex !== -1) {
                    // Replace existing machine data
                    const newData = [...prevData]
                    newData[machineIndex] = { machine, data: resData }
                    return newData
                } else {
                    // Add new machine data
                    return [...prevData, { machine, data: resData }]
                }
            })
        } catch (error) {
            console.error('Fetching data failed:', error)
        }
    }

    useEffect(() => {
        const intervalIds = machines.flatMap((machine) => {
            return ports.map((port) => {
                return setInterval(() => {
                    fetchData(machine, port)
                }, 1000)
            })
        })

        return () => {
            intervalIds.forEach((intervalId) => clearInterval(intervalId))
        }
    }, [machines, ports])

    const TRS = calculateAverageKPI(data, 'TRS')
    const TD = calculateAverageKPI(data, 'TD')
    const TQ = calculateAverageKPI(data, 'TQ')
    const TP = calculateAverageKPI(data, 'TP')
    const TDech = calculateAverageKPI(data, 'TDech')

    let QP = 0
    for (const machine of data) {
        QP += machine?.data?.OF?.QP ?? 0
    }
    QP = QP / data.length

    let QNC = 0
    for (const machine of data) {
        for (const NC in machine?.data?.NC ?? {}) {
            QNC += machine?.data?.NC[NC] ?? 0
        }
    }
    QNC = QNC / data.length

    let QD = 0
    for (const machine of data) {
        QD += machine?.data?.OF?.QD ?? 0
    }
    QD = QD / data.length

    return (
        <div className={style.section}>
            <div className={style.bloc1}>
                <h2 className={style.title}>{`UAP - ${uap.split('-')[1]}`}</h2>
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
                <div className={style.user}>
                    <img className={style.iconUser} src={User} alt="user" />
                    <span className={style.userText}>
                        Chef d'équipe - poste: {getPoste()}
                    </span>
                </div>
            </div>
            <div className={style.bloc2}>
                <div className={style.blocKpi}>
                    <div className={style.titreImageOf}>
                        <img src={kpi} alt="iconkpi" className={style.iconOf} />
                        <h2 className={style.blocTitle}>
                            "KPI | Performance de l'UAP"
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
                                    border: `2px solid ${getColor(TRS, 'trs')}`,
                                    boxShadow: `0 0 0.5px ${getColor(
                                        TRS,
                                        'trs'
                                    )}`,
                                    width: '30%',
                                    fontSize: '0.45rem',
                                }}
                                className={style.kpiValue}
                            >
                                {TRS.toFixed(2)}%
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
                                    border: `2px solid ${getColor(TP, 'tp')}`,
                                    boxShadow: `0 0 0.5px ${getColor(
                                        TP,
                                        'tp'
                                    )}`,
                                    width: '30%',
                                    fontSize: '0.45rem',
                                }}
                                className={style.kpiValue}
                            >
                                {TP.toFixed(2)}%
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
                                    border: `2px solid ${getColor(TD, 'td')}`,
                                    boxShadow: `0 0 0.5px ${getColor(
                                        TD,
                                        'td'
                                    )}`,
                                    width: '30%',
                                    fontSize: '0.45rem',
                                }}
                                className={style.kpiValue}
                            >
                                {TD.toFixed(2)}%
                            </div>
                        </div>
                        <div className={style.kpiContainer}>
                            <div className={style.kpiContent}>
                                <p className={style.kpi}>TQ</p>
                                <p className={style.subKpi}>Taux de qualité</p>
                            </div>
                            <div
                                style={{
                                    border: `2px solid ${getColor(TQ, 'tq')}`,
                                    boxShadow: `0 0 0.5px ${getColor(
                                        TQ,
                                        'tq'
                                    )}`,
                                    width: '30%',
                                    fontSize: '0.45rem',
                                }}
                                className={style.kpiValue}
                            >
                                {TQ.toFixed(2)}%
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
                                        TDech,
                                        'tdech'
                                    )}`,
                                    boxShadow: `0 0 0.5px ${getColor(
                                        TDech,
                                        'tdech'
                                    )}`,
                                    width: '30%',
                                    fontSize: '0.45rem',
                                }}
                                className={style.kpiValue}
                            >
                                {TDech.toFixed(2)}%
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.blocKpi}>
                    <div className={style.titreImageOf}>
                        <img src={of} alt="iconkpi" className={style.iconOf} />
                        <h2 className={style.blocTitle}>OF | Running OFs</h2>
                    </div>
                    <div className={style.kpis}>
                        {data.map((machine) => (
                            <Suspense
                                key={machine.machine}
                                fallback={<Loader />}
                            >
                                <Param
                                    param={machine.machine.toUpperCase()}
                                    name={
                                        Parameters.OFs[
                                            machine.machine.toUpperCase()
                                        ]
                                    }
                                    value={machine?.data?.OF?.NOF ?? {}}
                                    style={style}
                                />
                            </Suspense>
                        ))}
                    </div>
                </div>
                <div className={style.blocKpi}>
                    <div className={style.titreImageOf}>
                        <img
                            src={quantity}
                            alt="iconkpi"
                            className={style.iconOf}
                        />
                        <h2 className={style.blocTitle}>
                            Qté | Détail des quantités produites
                        </h2>
                    </div>
                    <div className={style.kpis}>
                        <div className={style.kpiContainer}>
                            <div className={style.kpiContent}>
                                <p className={style.kpi}>Qté Conf [batterie]</p>
                                <p className={style.subKpi}>
                                    Quantité totale produite conformes
                                </p>
                            </div>
                            <div
                                className={style.kpiValue}
                                style={{
                                    border: '2px solid rgba(0, 0, 0, 0.25)',
                                    boxShadow: '0 0 0.5px rgba(0, 0, 0, 0.25)',
                                }}
                            >
                                {QP}
                            </div>
                        </div>
                        <div className={style.kpiContainer}>
                            <div className={style.kpiContent}>
                                <p className={style.kpi}>Qté NC [batterie]</p>
                                <p className={style.subKpi}>
                                    Quantité totale Non conforme
                                </p>
                            </div>
                            <div
                                className={style.kpiValue}
                                style={{
                                    border: '2px solid rgba(0, 0, 0, 0.25)',
                                    boxShadow: '0 0 0.5px rgba(0, 0, 0, 0.25)',
                                }}
                            >
                                {QNC}
                            </div>
                        </div>
                        <div className={style.kpiContainer}>
                            <div className={style.kpiContent}>
                                <p className={style.kpi}>Qté Ret [batterie]</p>
                                <p className={style.subKpi}>
                                    Quantité totale retouchée
                                </p>
                            </div>
                            <div
                                className={style.kpiValue}
                                style={{
                                    border: '2px solid rgba(0, 0, 0, 0.25)',
                                    boxShadow: '0 0 0.5px rgba(0, 0, 0, 0.25)',
                                }}
                            >
                                {10}
                            </div>
                        </div>
                        <div className={style.kpiContainer}>
                            <div className={style.kpiContent}>
                                <p className={style.kpi}>Qté déchet [Kg]</p>
                                <p className={style.subKpi}>
                                    Quantité déchet déclarée vers recyclage
                                </p>
                            </div>
                            <div
                                className={style.kpiValue}
                                style={{
                                    border: '2px solid rgba(0, 0, 0, 0.25)',
                                    boxShadow: '0 0 0.5px rgba(0, 0, 0, 0.25)',
                                }}
                            >
                                {QD}
                            </div>
                        </div>
                    </div>
                </div>
                <Suspense fallback={<Loader />}>
                    <Container
                        title="Eng| Performance énergétique"
                        data={Parameters.Eng}
                        values={data[uap]?.Eng ?? {}}
                        style={style}
                        icon={eng}
                    />
                </Suspense>
            </div>
        </div>
    )
}

export default MesDivs
