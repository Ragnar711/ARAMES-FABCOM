import { lazy, Suspense } from 'react'

import of from '../../assets/of.png'
import kpi from '../../assets/iconKpi.webp'
import quantity from '../../assets/quantity.png'
import eng from '../../assets/eng.png'

const Container = lazy(() => import('./Container'))

import Loader from '../Loader'
import { Parameters } from '../../config/params'

const Bloc2 = ({ data, style, uap }) => {
    return (
        <div className={style.bloc2}>
            <Suspense fallback={<Loader />}>
                <Container
                    title="KPI | Performance de l'UAP"
                    data={Parameters.KPIs}
                    values={data[uap]?.KPIs ?? {}}
                    style={style}
                    icon={kpi}
                />
            </Suspense>
            <Suspense fallback={<Loader />}>
                <Container
                    title="OF | Running OFs"
                    data={Parameters.OFs}
                    values={data[uap]?.OFs ?? {}}
                    style={style}
                    icon={of}
                />
            </Suspense>
            <Suspense fallback={<Loader />}>
                <Container
                    title="Qté | Détail des quantités produites"
                    data={Parameters.Quantities}
                    values={data[uap]?.Quantities ?? {}}
                    style={style}
                    icon={quantity}
                />
            </Suspense>
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
    )
}

export default Bloc2
