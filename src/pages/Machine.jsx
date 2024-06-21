import { lazy, Suspense } from 'react'

import style from '../styles/Machine.module.css'

import Loader from '../components/Loader'

const Selector = lazy(() => import('../components/machine/Select'))

const RésultatInstantané = lazy(() =>
    import('../components/machine/RésultatInstantané')
)
const TableMachine = lazy(() => import('../components/machine/TableMachine'))

function Machine() {
    const data = {
        kpi: {
            trs: 80,
            td: 80,
            tp: 70,
            tq: 100,
            tdech: 5,
        },
        of: {
            NOF: '1001',
            user: 'test',
            qt_ob: 1000,
            qt_ob_unit: 'Kg',
            debit: 120,
        },
        production: {
            quantite: {
                QP: 400,
            },
            debit: 150,
        },
        arret: {
            chart: [],
        },
        historique: [
            {
                heure: '08:00',
                poste: 'Matin',
                of: '1001',
                'QP (KG)': 400,
                'QNC (KG)': 20,
                'QD (KG)': 30,
                'TRS (%)': 80,
                'TQ (%)': 100,
                'TP (%)': 70,
                'TD (%)': 80,
                'Tdech (%)': 5,
            },
        ],
        dechetBarChart: [],
        NCBarChart: [],
    }

    return (
        <div className={style.container}>
            <Suspense fallback={<Loader />}>
                <Selector />
            </Suspense>
            <div>
                <Suspense fallback={<Loader />}>
                    <RésultatInstantané data={data} />
                </Suspense>
                <Suspense fallback={<Loader />}>
                    <TableMachine data={data} />
                </Suspense>
            </div>
        </div>
    )
}

export default Machine
