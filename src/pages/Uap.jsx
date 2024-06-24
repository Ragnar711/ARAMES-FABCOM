import DivsSections from '../components/uap/DivsSections'
import { useParams } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { machineData } from '../config/config'
import Loader from '../components/Loader'

const Tbd = lazy(() => import('../components/Tbd'))

const Uap = () => {
    const data = {
        kpi: {
            QP: 500,
            TO: '05:00:00',
            TA: '03:00:00',
            TRS: 80,
            TP: 70,
            TQ: 100,
            TD: 60,
            Tdech: 5,
        },
        of: {
            QuantiteObjectif: 1000,
            NOF: '1001',
            DebitTheorique: 300,
        },
        network: true,
        operator: 'test',
        realTimeData: {
            debit: 250,
            vitesseT: 100,
            vitesseE: 120,
            poids: 100,
        },
        lastArret: {
            Duree: '01:30:00',
            Motif: 'test',
        },
    }

    const section = useParams()
    const machines = machineData[section.section].machines

    return (
        <>
            {machines.length === 0 ? (
                <Suspense fallback={<Loader />}>
                    <Tbd />
                </Suspense>
            ) : (
                machines.map((machine) => {
                    return (
                        <DivsSections
                            key={machine}
                            data={data}
                            machineData={machine}
                        />
                    )
                })
            )}
        </>
    )
}

export default Uap
