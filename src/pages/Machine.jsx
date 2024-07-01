import style from '../styles/Machine.module.css'

import { lazy, Suspense } from 'react'
import Loader from '../components/Loader'

const Bloc1 = lazy(() => import('../components/machine/Bloc1'))
const Bloc2 = lazy(() => import('../components/machine/Bloc2'))
const Yamazumi = lazy(() => import('../components/machine/Yamazumi'))
const Pareto = lazy(() => import('../components/machine/Pareto'))
const LineChart = lazy(() => import('../components/machine/LineChart'))
const Table = lazy(() => import('../components/machine/Table'))

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
            <Suspense fallback={<Loader />} className="paretoDefaut">
                <Pareto style={style} title="Pareto des Défauts qualité" />
            </Suspense>
            <Suspense fallback={<Loader />} className="paretoArret">
                <Pareto style={style} title="Pareto des Arrêts" />
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
