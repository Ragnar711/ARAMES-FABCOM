import { lazy, Suspense } from 'react'
import { getPoste } from '../../utils/getPoste'

import Loader from '../Loader'
const Container = lazy(() => import('./Container'))

import style from '../../styles/Section.module.css'

import User from '../../assets/usericon.png'
import alert from '../../assets/alert.png'
import of from '../../assets/of.png'
import kpi from '../../assets/iconKpi.webp'
import quantity from '../../assets/quantity.png'
import eng from '../../assets/eng.png'

import PropTypes from 'prop-types'

import { Parameters } from '../../config/params'

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
    console.log(uap)

    return (
        <div className={style.section}>
            <div className={style.bloc1}>
                <h2 className={style.title}>{`UAP - ${uap.split('-')[1]}`}</h2>
                <div className={style.machineImage}>
                    <img
                        className={style.imageMachine}
                        src={machineData.image}
                        alt="machine"
                    />
                    <img
                        src={alert}
                        alt="alert"
                        style={{
                            width: '4rem',
                            height: '2.5rem',
                        }}
                    />
                </div>
                <div className={style.user}>
                    <img className={style.iconUser} src={User} alt="user" />
                    <span className={style.userText}>
                        Chef d'équipe - poste: {getPoste()}
                    </span>
                </div>
            </div>
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
        </div>
    )
}

export default MesDivs

MesDivs.propTypes = {
    machineData: PropTypes.object.isRequired,
}
