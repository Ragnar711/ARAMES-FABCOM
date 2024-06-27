import { lazy, Suspense } from 'react'
import { getPoste } from '../../utils/getPoste'

const Of = lazy(() => import('./Of'))

import style from '../../styles/Section.module.css'

import User from '../../assets/usericon.png'
import alert from '../../assets/alert.png'
import of from '../../assets/of.png'

import PropTypes from 'prop-types'

import { Parameters } from '../../config/params'
import Loader from '../Loader'

const MesDivs = ({ machineData, sequenceNumber }) => {
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
        },
        Quantities: {
            'Qté Conf  [batterie]': 680,
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
    }

    let dup = {
        ...data,
        OF: { ...data.OF, Production: data.Quantities['Qté Conf  [batterie]'] },
    }

    const machine =
        machineData.machine.split('-')[
            machineData.machine.split('-').length - 1
        ]

    return (
        <div className={style.machine}>
            <button className={style.state_btn}>
                <span>Marche</span>
            </button>
            <div className={style.bloc1}>
                <h2
                    className={style.title_machine}
                >{`Assemblage ${sequenceNumber} - ${machine}`}</h2>
                <div className={style.user}>
                    <img className={style.iconUser} src={User} alt="user" />
                    <span className={style.userText}>
                        Chef d'équipe - poste: {getPoste()}
                    </span>
                </div>
                <div className={style.of}>
                    <div>
                        <span className={style.TA}>05:00:00</span>
                        <span className={style.TM}>03:00:00</span>
                    </div>
                    <div>
                        <span className={style.T_text}>
                            Temps d’arrêt I poste
                        </span>
                        <span className={style.T_text}>
                            Temps de marche I Poste
                        </span>
                    </div>
                </div>
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
            </div>
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
                        values={dup?.OF ?? {}}
                        style={style}
                        icon={of}
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
