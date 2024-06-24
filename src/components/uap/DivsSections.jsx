import { useNavigate } from 'react-router-dom'

import style from '../../styles/Section.module.css'
import '../../styles/section.css'

import User from '../../assets/usericon.png'
import marche from '../../assets/Image1.png'

import PropTypes from 'prop-types'
import { getPoste } from '../../utils/getPoste'
import { Suspense, lazy } from 'react'
import Loader from '../Loader'

const Of = lazy(() => import('./Of'))
const Kpis = lazy(() => import('../dashboard/Kpis'))
const Params = lazy(() => import('./Params'))
const Flash = lazy(() => import('./Flash'))

const DivsSections = ({ data, machineData }) => {
    const navigate = useNavigate()

    return (
        <div
            className={style.section}
            style={{
                filter: data.network ? 'none' : 'blur(16px)',
            }}
        >
            <div className={style.titresection}>
                <div className={style.titleImage}>
                    <button
                        onClick={() =>
                            data.network
                                ? navigate(
                                      `/machine/${machineData.machine
                                          .split(' ')
                                          .join('')}`
                                  )
                                : false
                        }
                        style={{
                            backgroundColor: `#595959`,
                            color: 'white',
                            fontSize: '20px',
                            border: 'none',
                        }}
                    >
                        {machineData.machine.replaceAll('-', ' ')}
                    </button>
                    <img src={marche} alt="marche" className={style.etatIcon} />
                </div>
            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <img
                    className={style.imageMachine}
                    src={machineData.image}
                    alt="machine"
                />
                <div className={style.user}>
                    <img className={style.iconUser} src={User} alt="user" />
                    <span className={style.userText}>
                        {data.operator} | poste: {getPoste()}
                    </span>
                </div>
                <div className={style.of}>
                    <span className={style.TM}> | {data.kpi.TO}</span>
                    <span className={style.TA}> | {data.kpi.TA}</span>
                </div>
            </div>
            <Suspense fallback={<Loader />}>
                <Of style={style} data={data} />
            </Suspense>
            <Suspense fallback={<Loader />}>
                <Kpis style={style} data={data} />
            </Suspense>
            <Suspense fallback={<Loader />}>
                <Params style={style} data={data} />
            </Suspense>
            <Suspense fallback={<Loader />}>
                <Flash style={style} data={data} />
            </Suspense>
        </div>
    )
}

export default DivsSections

DivsSections.propTypes = {
    data: PropTypes.object.isRequired,
    machineData: PropTypes.object.isRequired,
}
