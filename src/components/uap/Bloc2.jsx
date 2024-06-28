import { lazy, Suspense } from 'react'

const Of = lazy(() => import('./Of'))
const Container = lazy(() => import('./Container'))
const Alerts = lazy(() => import('./Alerts'))

import Loader from '../Loader'

import of from '../../assets/of.png'
import kpi from '../../assets/iconKpi.webp'
import process from '../../assets/process.png'

import { Parameters } from '../../config/params'

const Bloc2 = ({ data, style }) => {
    return (
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
            <Suspense fallback={<Loader />}>
                <Container
                    title="KPI | Performance de la ligne"
                    data={Parameters.KPIs}
                    values={data?.KPIs ?? {}}
                    style={style}
                    icon={kpi}
                />
            </Suspense>
            <Suspense fallback={<Loader />}>
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
            </Suspense>
        </div>
    )
}

export default Bloc2
