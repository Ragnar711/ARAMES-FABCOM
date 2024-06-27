import { lazy } from 'react'
import { getPoste } from '../../utils/getPoste'

const Container = lazy(() => import('./Container'))

import style from '../../styles/Section.module.css'

import User from '../../assets/usericon.png'
import alert from '../../assets/alert.png'

import PropTypes from 'prop-types'

const MesDivs = ({ machineData }) => {
    return (
        <div className={style.section}>
            <button>Marche</button>
            <div className={style.bloc1}>
                <h2 className={style.title}>{machineData.machine}</h2>
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
            <div className={style.bloc2}></div>
        </div>
    )
}

export default MesDivs

MesDivs.propTypes = {
    machineData: PropTypes.object.isRequired,
}
