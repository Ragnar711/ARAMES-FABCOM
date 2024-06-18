import { lazy, Suspense } from 'react'

import style from '../styles/Machine.module.css'

import Loader from '../components/Loader'

const Selector = lazy(() => import('../components/machine/Select'))
const ResultatInstan = lazy(() =>
    import('../components/machine/ResultatInstantane-phone')
)
const RésultatInstantané = lazy(() =>
    import('../components/machine/RésultatInstantané')
)
const TableMachine = lazy(() => import('../components/machine/TableMachine'))

function Machine() {
    const data = {}
    const validMachine = 0

    return (
        <>
            {validMachine === 1 ? (
                <div
                    className={style.container}
                    style={{
                        position: 'relative',
                    }}
                >
                    <Suspense fallback={<Loader />}>
                        <Selector />
                    </Suspense>
                    <div>
                        <Suspense fallback={<Loader />}>
                            <ResultatInstan data={data} />
                        </Suspense>
                        <Suspense fallback={<Loader />}>
                            <RésultatInstantané data={data} />
                        </Suspense>
                        <Suspense fallback={<Loader />}>
                            <TableMachine data={data} />
                        </Suspense>
                    </div>
                </div>
            ) : (
                <div>
                    <span>
                        {validMachine === 0
                            ? "Machine n'existe pas"
                            : 'Problème de connexion'}
                    </span>
                </div>
            )}
        </>
    )
}

export default Machine
