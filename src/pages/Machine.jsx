import style from '../styles/Machine.module.css'

import { lazy, Suspense } from 'react'
import Loader from '../components/Loader'

const Bloc1 = lazy(() => import('../components/machine/Bloc1'))
const Bloc2 = lazy(() => import('../components/machine/Bloc2'))
const Yamazumi = lazy(() => import('../components/machine/Yamazumi'))
const Pareto = lazy(() => import('../components/machine/Pareto'))
const LineChart = lazy(() => import('../components/machine/LineChart'))
const Table = lazy(() => import('../components/machine/Table'))

const data1 = [
    {
        name: 'Défaut 7',
        uv: 35,
    },
    {
        name: 'Défaut 6',
        uv: 27,
    },
    {
        name: 'Défaut 3',
        uv: 20,
    },
    {
        name: 'Défaut 2',
        uv: 15,
    },
    {
        name: 'Défaut 5',
        uv: 13,
    },
    {
        name: 'Défaut 8',
        uv: 11,
    },
    {
        name: 'Défaut 1',
        uv: 10,
    },
    {
        name: 'Défaut 4',
        uv: 7,
    },
]

const data2 = [
    {
        name: 'Arrêt 4',
        uv: 180,
    },
    {
        name: 'Arrêt 3',
        uv: 120,
    },
    {
        name: 'Arrêt 2',
        uv: 85,
    },
    {
        name: 'Arrêt 5',
        uv: 45,
    },
    {
        name: 'Arrêt 1',
        uv: 15,
    },
]

function Machine() {
    return (
        <div className={style.container}>
            <Suspense fallback={<Loader />}>
                <Bloc1 style={style} />
            </Suspense>
            <Suspense fallback={<Loader />}>
                <Bloc2 style={style} />
            </Suspense>
            <Suspense fallback={<Loader />}>
                <Yamazumi style={style} />
            </Suspense>
            <Suspense fallback={<Loader />}>
                <Pareto
                    style={style}
                    title="Pareto des Défauts qualité"
                    subtitle="Evolution des défauts qualité de la ligne"
                    data={data1}
                    color="#ffd34c"
                    tickFormatter={false}
                />
            </Suspense>
            <Suspense fallback={<Loader />}>
                <Pareto
                    style={style}
                    title="Pareto des Arrêts"
                    subtitle="Evolution des arrêts de la ligne depuis 24h"
                    data={data2}
                    color="#ff0000"
                    tickFormatter={true}
                />
            </Suspense>
            <Suspense fallback={<Loader />}>
                <LineChart style={style} />
            </Suspense>
            <Suspense fallback={<Loader />}>
                <Table style={style} />
            </Suspense>
        </div>
    )
}

export default Machine
