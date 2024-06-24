import { useNavigate } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { getPoste } from '../../utils/getPoste'

import Loader from '../Loader'
const Kpis = lazy(() => import('./Kpis'))
const Ofs = lazy(() => import('./Ofs'))
const Quantities = lazy(() => import('./Quantities'))
const Eng = lazy(() => import('./Eng'))

import style from '../../styles/Section.module.css'

import User from '../../assets/usericon.png'

import PropTypes from 'prop-types'

const MesDivs = ({ machineData }) => {
    const navigate = useNavigate()

    return (
        <div className={style.section}>
            <button
                className={style.titreSection}
                onClick={() => navigate(`/uap/${machineData.section}`)}
            >
                {machineData.section}
            </button>
            <div>
                <img
                    className={style.imageMachine}
                    src={machineData.image}
                    alt="machine"
                />
                <div className={style.user}>
                    <img className={style.iconUser} src={User} alt="user" />
                    <span className={style.userText}>
                        Chef d'équipe | poste: {getPoste()}
                    </span>
                </div>
            </div>
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
    )
}

export default MesDivs

MesDivs.propTypes = {
    machineData: PropTypes.object.isRequired,
}
