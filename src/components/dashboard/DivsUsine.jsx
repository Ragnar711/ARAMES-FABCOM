import { lazy, Suspense } from 'react'
import { getPoste } from '../../utils/getPoste'

import Loader from '../Loader'
const Kpis = lazy(() => import('./Kpis'))
const Ofs = lazy(() => import('./Ofs'))
const Quantities = lazy(() => import('./Quantities'))
const Eng = lazy(() => import('./Eng'))

import style from '../../styles/Section.module.css'

import User from '../../assets/usericon.png'
import alert from '../../assets/alert.png'

import PropTypes from 'prop-types'

const MesDivs = ({ machineData }) => {
    return (
        <div className={style.section}>
            <div className={style.bloc1}>
                <h2 className={style.title}>{machineData.section}</h2>
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
                            width: '2.5rem',
                            height: '2rem',
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
                    <Kpis style={style} />
                </Suspense>
                <Suspense fallback={<Loader />}>
                    <Ofs style={style} machines={machineData.machines} />
                </Suspense>
                <Suspense fallback={<Loader />}>
                    <Quantities style={style} />
                </Suspense>
                <Suspense fallback={<Loader />}>
                    <Eng style={style} />
                </Suspense>
            </div>
        </div>
    )
}

export default MesDivs

MesDivs.propTypes = {
    machineData: PropTypes.object.isRequired,
}
