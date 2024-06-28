import { lazy, Suspense } from 'react'

import Loader from '../Loader'
const Bloc1 = lazy(() => import('./Bloc1'))
const Bloc2 = lazy(() => import('./Bloc2'))

import style from '../../styles/Section.module.css'

import PropTypes from 'prop-types'

const MesDivs = ({ machineData }) => {
    const data = {
        'UAP-Assemblage': {
            KPIs: {
                TRS: 95,
                TP: 84,
                TD: 100,
                TQ: 99,
                Tde: 8,
            },
            OFs: {
                TBS: 658702,
                'SOVEMA 1': 658702,
                'SOVEMA 2': 658702,
            },
            Quantities: {
                'Qté Conf  [batterie]': 560,
                'Qté NC [batterie]': 10,
                'Qté Ret [batterie]': 36,
                'Qté déchet [Kg]': 318,
            },
            Eng: {
                'Energie  [KWh]': 14536,
                'P [KW]': 15.32,
                'Q [KVAR]': 8.99,
                'cos ϕ [ ]': 0.862,
                'CO2 [Kg]': 7268,
            },
        },
    }

    const uap = machineData.section

    return (
        <div className={style.section}>
            <Suspense fallback={<Loader />}>
                <Bloc1 style={style} machineData={machineData} />
            </Suspense>
            <Suspense fallback={<Loader />}>
                <Bloc2 style={style} data={data} uap={uap} />
            </Suspense>
        </div>
    )
}

export default MesDivs

MesDivs.propTypes = {
    machineData: PropTypes.object.isRequired,
}
