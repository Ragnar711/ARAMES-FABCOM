import { lazy, Suspense, useState, useEffect } from 'react'
import style from '../styles/Machine.module.css'
import { machineData } from '../config/config'
import Loader from '../components/Loader'
import iconparam from '../assets/iconparam.webp'
import User from '../assets/operator.png'
import { getPoste } from '../utils/getPoste'
import { Progress } from 'antd'

const Gauge = lazy(() => import('../components/machine/Gauge'))
const GaugeKpi = lazy(() => import('../components/machine/GaugeKpi'))
const Card = lazy(() => import('../components/machine/Card'))
const Yamazumi = lazy(() => import('../components/machine/Yamazumi'))
const Pareto = lazy(() => import('../components/machine/Pareto'))
const LineChart = lazy(() => import('../components/machine/LineChart'))
const Table = lazy(() => import('../components/machine/Table'))

function Machine() {
    const [time, setTime] = useState(new Date().toLocaleString())
    const [uap, setUap] = useState('')
    const [machine, setMachine] = useState('tbs')
    const [data, setData] = useState({})
    const uaps = Object.keys(machineData)

    const fetchMachineData = async () => {
        try {
            const res = await fetch(
                `http://${window.location.hostname}:3001/api/v1/machine/${machine}`
            )
            const resData = await res.json()
            setData(resData)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchMachineData()
    }, [machine])

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleString())
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    return (
        <>
            <div className={style.top}>
                <div className={style.selects}>
                    <select
                        className={style.select}
                        onChange={(e) => setUap(e.target.value)}
                    >
                        <option value="" disabled selected>
                            Sélectionner UAP
                        </option>
                        {uaps.map((uap) =>
                            machineData[uap].machines.length !== 0 ? (
                                <option key={uap} value={uap}>
                                    {uap}
                                </option>
                            ) : null
                        )}
                    </select>
                    <select
                        className={style.select}
                        onChange={(e) => setMachine(e.target.value)}
                    >
                        <option value="" disabled selected>
                            Sélectionner Ligne
                        </option>
                        {machineData[uap]?.machines?.map((uap) => (
                            <option key={uap.machine} value={uap.value}>
                                {uap.machine}
                            </option>
                        ))}
                    </select>
                </div>
                <p className={style.time}>{time}</p>
            </div>
            <div className={style.container}>
                <div className={style.bloc1}>
                    <p className={style.title}>
                        <img alt="icon" src={iconparam} /> Performance
                        instantanée
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
                                <Gauge
                                    value={data?.KPIs?.TRS?.toFixed(0) ?? 0}
                                    kpi="trs"
                                    style={style}
                                    className={['value1', 'name1']}
                                />
                            </Suspense>
                            <div className={style.verticalLine}></div>
                            <Suspense fallback={<Loader />}>
                                <Gauge
                                    value={data?.KPIs?.TR?.toFixed(0) ?? 0}
                                    kpi="tr"
                                    style={style}
                                    className={['value2', 'name2']}
                                />
                            </Suspense>
                        </div>
                        <div className={style.smallGauges}>
                            <Suspense fallback={<Loader />}>
                                <GaugeKpi
                                    value={data?.KPIs?.TQ?.toFixed(0) ?? 0}
                                    kpi="tq"
                                    style={style}
                                />
                                <GaugeKpi
                                    value={data?.KPIs?.TD?.toFixed(0) ?? 0}
                                    kpi="td"
                                    style={style}
                                />
                                <GaugeKpi
                                    value={data?.KPIs?.TP?.toFixed(0) ?? 0}
                                    kpi="tp"
                                    style={style}
                                />
                                <GaugeKpi
                                    value={data?.KPIs?.TDech?.toFixed(0) ?? 0}
                                    kpi="tdech"
                                    style={style}
                                />
                            </Suspense>
                        </div>
                    </div>
                </div>
                <div className={style.bloc2}>
                    <p className={style.title}>
                        <img alt="icon" src={iconparam} /> Résultats de
                        production instantanés
                    </p>
                    <div className={style.content}>
                        <div className={style.row1}>
                            <div className={style.user}>
                                <img
                                    className={style.iconUser}
                                    src={User}
                                    alt="user"
                                />
                                <span className={style.userText}>
                                    Chef d'équipe
                                </span>
                                <span className={style.userText}>
                                    Poste: {getPoste()}
                                </span>
                            </div>
                            <div>
                                <div className={style.kpiContainer}>
                                    <div className={style.kpiContent}>
                                        <p className={style.kpi}>N°OF</p>
                                        <p className={style.subKpi}>
                                            Numéro de l’ordre de fabrication
                                        </p>
                                    </div>
                                    <div
                                        className={style.kpiValue}
                                        style={{
                                            border: '2px solid rgba(0, 0, 0, 0.25)',
                                            boxShadow:
                                                '0 0 0.5px rgba(0, 0, 0, 0.25)',
                                        }}
                                    >
                                        {data?.OF?.NOF ?? ''}
                                    </div>
                                </div>
                                <div className={style.kpiContainer}>
                                    <div className={style.kpiContent}>
                                        <p className={style.kpi}>Qté Obj</p>
                                        <p className={style.subKpi}>
                                            Quantité objectif à réaliser
                                        </p>
                                    </div>
                                    <div
                                        className={style.kpiValue}
                                        style={{
                                            border: '2px solid rgba(0, 0, 0, 0.25)',
                                            boxShadow:
                                                '0 0 0.5px rgba(0, 0, 0, 0.25)',
                                        }}
                                    >
                                        {data?.OF?.QO ?? 0}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className={style.kpiContainer}>
                                    <div className={style.kpiContent}>
                                        <p className={style.kpi}>Réf Art</p>
                                        <p className={style.subKpi}>
                                            Référence de l’article à réaliser
                                        </p>
                                    </div>
                                    <div
                                        className={style.kpiValue}
                                        style={{
                                            border: '2px solid rgba(0, 0, 0, 0.25)',
                                            boxShadow:
                                                '0 0 0.5px rgba(0, 0, 0, 0.25)',
                                        }}
                                    >
                                        {data?.OF?.Article ?? ''}
                                    </div>
                                </div>
                                <div className={style.kpiContainer}>
                                    <div className={style.kpiContent}>
                                        <p className={style.kpi}>Production</p>
                                        <p className={style.subKpi}>
                                            Quantité réalisée jusqu’à l’instant
                                        </p>
                                    </div>
                                    <div
                                        className={style.kpiValue}
                                        style={{
                                            border: '2px solid rgba(0, 0, 0, 0.25)',
                                            boxShadow:
                                                '0 0 0.5px rgba(0, 0, 0, 0.25)',
                                        }}
                                    >
                                        {data?.OF?.QP ?? 0}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Progress
                            percent={
                                ((data?.OF?.QP / data?.OF?.QO) * 100).toFixed(
                                    0
                                ) ?? 0
                            }
                            percentPosition={{
                                align: 'end',
                                type: 'outer',
                            }}
                            size={['95%', 15]}
                            strokeColor="#92d050"
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        />
                        <div className={style.row3}>
                            <Suspense fallback={<Loader />}>
                                <Card
                                    style={style}
                                    index={1}
                                    name="Enveloppeuse"
                                    param1="Qté piles"
                                    value1={20}
                                    param2="Plaque NC"
                                    value2={data?.NC?.QNC1 ?? 0}
                                />
                                <Card
                                    style={style}
                                    index={2}
                                    name="COS"
                                    param1="Qté"
                                    value1={35}
                                    param2="Qté NC"
                                    value2={data?.NC?.QNC2 ?? 0}
                                />
                                <Card
                                    style={style}
                                    index={3}
                                    name="Soudure des connexions"
                                    param1="Qté"
                                    value1={35}
                                    param2="Qté NC"
                                    value2={data?.NC?.QNC3 ?? 0}
                                />
                                <Card
                                    style={style}
                                    index={4}
                                    name="Soudure bac / couvercle"
                                    param1="Qté"
                                    value1={45}
                                    param2="Qté NC"
                                    value2={data?.NC?.QNC4 ?? 0}
                                />
                            </Suspense>
                        </div>
                    </div>
                </div>
                <Suspense fallback={<Loader />}>
                    <Yamazumi style={style} />
                </Suspense>
                <Suspense fallback={<Loader />}>
                    <Pareto
                        style={style}
                        title="Pareto des Défauts qualité"
                        subtitle="Evolution des défauts qualité de la ligne"
                        data={data?.paretoDechet ?? []}
                        color="#ffd34c"
                        tickFormatter={false}
                    />
                </Suspense>
                <Suspense fallback={<Loader />}>
                    <Pareto
                        style={style}
                        title="Pareto des Arrêts"
                        subtitle="Evolution des arrêts de la ligne depuis 24h"
                        data={data?.paretoArret ?? []}
                        color="#ff0000"
                        tickFormatter={true}
                    />
                </Suspense>
                <Suspense fallback={<Loader />}>
                    <LineChart
                        style={style}
                        data={data?.historiqueKPIs ?? []}
                    />
                </Suspense>
                <Suspense fallback={<Loader />}>
                    <Table style={style} />
                </Suspense>
            </div>
        </>
    )
}

export default Machine
