import { lazy, Suspense } from 'react'

const Bloc1 = lazy(() => import('./Bloc1'))
const Bloc2 = lazy(() => import('./Bloc2'))

import Loader from '../Loader'

const MesDivs = ({ machineData, sequenceNumber, style }) => {
    const data = {
        KPIs: {
            TRS: 95,
            TP: 84,
            TD: 100,
            TQ: 99,
            Tde: 8,
        },
        OF: {
            'N°OF': 658702,
            'Réf Art': 'AM0254',
            'Qté Obj': 1260,
            Production: 1200,
        },
        Process: {
            'TC Env [sec]': 2.1,
            'TC COS [sec]': 15,
            'TC SC [sec]': 20,
            'TC BC [sec]': 22,
            'TC th [sec]': 8,
        },
        Alert: {
            'Déchet  [Kg]': {
                val: 20,
                desc: 'Nettoyage',
            },
            'Arrêt [sec]': {
                val: '00:00:46',
                desc: 'Panne',
            },
            'Qté NC [Kg]': {
                val: 12,
                desc: 'Soudure  bac NC',
            },
        },
    }

    return (
        <div className={style.machine}>
            <button className={style.state_btn}>
                <span>  Marche</span>
            </button>
            <Suspense fallback={<Loader />}>
                <Bloc1
                    style={style}
                    sequenceNumber={sequenceNumber}
                    machineData={machineData}
                />
            </Suspense>
            <Suspense fallback={<Loader />}>
                <Bloc2 data={data} style={style} />
            </Suspense>
        </div>
    )
}

export default MesDivs
