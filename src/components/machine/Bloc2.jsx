import iconparam from '../../assets/iconparam.webp'
import User from '../../assets/operator.png'
import { getPoste } from '../../utils/getPoste'
import { Progress } from 'antd'
import { lazy, Suspense } from 'react'
import Loader from '../Loader'

const Card = lazy(() => import('./Card'))

const Bloc2 = ({ style }) => {
    return (
        <div className={style.bloc2}>
            <p className={style.title}>
                <img alt="icon" src={iconparam} /> Résultats de production
                instantanés
            </p>
            <div className={style.content}>
                <div className={style.row1}>
                    <div className={style.user}>
                        <img className={style.iconUser} src={User} alt="user" />
                        <span className={style.userText}>Chef d'équipe</span>
                        <span className={style.userText}>
                            poste: {getPoste()}
                        </span>
                    </div>
                    <div>
                        <div className={style.kpiContainer}>
                            <div className={style.kpiContent}>
                                <p className={style.kpi}>N°OF</p>
                                <p className={style.subKpi}>
                                    Numéro de l’ordre de fabrication
                                </p>
                            </div>
                            <div
                                className={style.kpiValue}
                                style={{
                                    border: '2px solid rgba(0, 0, 0, 0.25)',
                                    boxShadow: '0 0 0.5px rgba(0, 0, 0, 0.25)',
                                }}
                            >
                                6259348
                            </div>
                        </div>
                        <div className={style.kpiContainer}>
                            <div className={style.kpiContent}>
                                <p className={style.kpi}>Qté Obj</p>
                                <p className={style.subKpi}>
                                    Quantité objectif à réaliser
                                </p>
                            </div>
                            <div
                                className={style.kpiValue}
                                style={{
                                    border: '2px solid rgba(0, 0, 0, 0.25)',
                                    boxShadow: '0 0 0.5px rgba(0, 0, 0, 0.25)',
                                }}
                            >
                                1260
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={style.kpiContainer}>
                            <div className={style.kpiContent}>
                                <p className={style.kpi}>Réf Art</p>
                                <p className={style.subKpi}>
                                    Référence de l’article à réaliser
                                </p>
                            </div>
                            <div
                                className={style.kpiValue}
                                style={{
                                    border: '2px solid rgba(0, 0, 0, 0.25)',
                                    boxShadow: '0 0 0.5px rgba(0, 0, 0, 0.25)',
                                }}
                            >
                                AM0254
                            </div>
                        </div>
                        <div className={style.kpiContainer}>
                            <div className={style.kpiContent}>
                                <p className={style.kpi}>Production</p>
                                <p className={style.subKpi}>
                                    Quantité réalisée jusqu’à l’instant
                                </p>
                            </div>
                            <div
                                className={style.kpiValue}
                                style={{
                                    border: '2px solid rgba(0, 0, 0, 0.25)',
                                    boxShadow: '0 0 0.5px rgba(0, 0, 0, 0.25)',
                                }}
                            >
                                680
                            </div>
                        </div>
                    </div>
                </div>
                <Progress
                    percent={60}
                    percentPosition={{
                        align: 'end',
                        type: 'outer',
                    }}
                    size={['95%', 15]}
                    strokeColor="#92d050"
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                />
                <div className={style.row3}>
                    <Suspense fallback={<Loader />}>
                        <Card
                            style={style}
                            index={1}
                            name="Machine 1"
                            param1="Vitesse"
                            value1="1200"
                            param2="T°"
                            value2="50"
                        />
                        <Card
                            style={style}
                            index={2}
                            name="Machine 2"
                            param1="Vitesse"
                            value1="1200"
                            param2="T°"
                            value2="50"
                        />
                        <Card
                            style={style}
                            index={1}
                            name="Machine 1"
                            param1="Vitesse"
                            value1="1200"
                            param2="T°"
                            value2="50"
                        />
                        <Card
                            style={style}
                            index={2}
                            name="Machine 2"
                            param1="Vitesse"
                            value1="1200"
                            param2="T°"
                            value2="50"
                        />
                    </Suspense>
                </div>
            </div>
        </div>
    )
}

export default Bloc2
