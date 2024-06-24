import { lazy, Suspense } from 'react'

import { Flex, Progress } from 'antd'
import style from '../../styles/Machine.module.css'

import Loader from '../Loader'

const Gauge = lazy(() => import('./Gauge'))
const Barchart = lazy(() => import('./Barchart'))
const GaugeKPI = lazy(() => import('./GaugeKpi'))
const ParetoArret = lazy(() => import('./ParetoArret'))

import PropTypes from 'prop-types'
import iconKpi from '../../assets/iconKpi.webp'
import iconparam from '../../assets/iconparam.webp'

function RésultatInstantané({ data }) {
    return (
        <>
            <div className={style.containerMachine}>
                <div className={style.indicator}>
                    <img src={iconKpi} alt="" className={style.iconof} />
                    <div
                        style={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'space-around',
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Gauge
                                value={data.kpi.trs.toFixed(0)}
                                className={style.gauge}
                            />
                            <h1
                                style={{
                                    marginTop: '-1rem',
                                    marginBottom: '0.5rem',
                                    textAlign: 'center',
                                    fontSize: '16px',
                                }}
                            >
                                TRS
                            </h1>
                        </div>

                        <hr className={style.hrgauge} />
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Suspense fallback={<Loader />}>
                                <Gauge value={data.kpi.tdech.toFixed(0)} />
                            </Suspense>
                            <h1
                                style={{
                                    marginTop: '-1rem',
                                    marginBottom: '0.5rem',
                                    textAlign: 'center',
                                    fontSize: '16px',
                                }}
                            >
                                Tdéch
                            </h1>
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Suspense fallback={<Loader />}>
                                <Gauge value={data.kpi.tdech.toFixed(0)} />
                            </Suspense>
                            <h1
                                style={{
                                    marginTop: '-1rem',
                                    marginBottom: '0.5rem',
                                    textAlign: 'center',
                                    fontSize: '16px',
                                }}
                            >
                                Taux de retouche
                            </h1>
                        </div>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            width: '100%',
                            height: '44%',
                            borderTop: '1px solid white',
                            justifyContent: 'space-around',
                        }}
                    >
                        <Suspense fallback={<Loader />}>
                            <GaugeKPI value={data.kpi.tp.toFixed(0)} kpi="tp" />
                        </Suspense>
                        <Suspense fallback={<Loader />}>
                            <GaugeKPI value={data.kpi.tq.toFixed(0)} kpi="tq" />
                        </Suspense>
                        <Suspense fallback={<Loader />}>
                            <GaugeKPI value={data.kpi.td.toFixed(0)} kpi="td" />
                        </Suspense>
                    </div>
                </div>
                <div className={style.indicator}>
                    <img src={iconparam} className={style.iconof} alt="icon" />
                    <div className={style.diVOF}>
                        <div>
                            <span className={style.spanOf}>
                                Ordre de fabrication:
                            </span>
                            <span className={style.spanValue}>
                                {data.of.NOF ?? 'N/A'}
                            </span>
                        </div>
                        <div
                            className={style.spanOf}
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}
                        >
                            <div>
                                <span style={{ color: '#002060' }}>
                                    Opérateur:
                                </span>
                                <span className={style.spanValue}>
                                    {data.of.user ?? 'N/A'}
                                </span>
                            </div>
                            <div>
                                <span style={{ color: '#002060' }}>
                                    Article:
                                </span>
                                <span className={style.spanValue}>N/A</span>
                            </div>
                            <div>
                                <span style={{ color: '#002060' }}>
                                    Qté objectif:
                                </span>
                                <span className={style.spanValue}>
                                    {data.of.qt_ob ?? 0}{' '}
                                    {` ${data.of.qt_ob_unit}`}
                                </span>
                            </div>
                        </div>
                        <Flex vertical gap="small">
                            <Progress
                                strokeLinecap="butt"
                                percent={
                                    data.of.qt_ob === 0
                                        ? 0
                                        : (data.production.quantite.QP /
                                              data.of.qt_ob) *
                                          100
                                }
                            />
                        </Flex>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{ display: 'flex' }}>
                            <div className={style.divIndicator}>
                                <span
                                    style={{
                                        textAlign: 'right',
                                        fontSize: '24px',
                                        color: '#00B0F0',
                                    }}
                                >
                                    <sub style={{ color: 'black' }}>kg/h</sub>
                                    <span style={{ color: 'black' }}>
                                        |
                                    </span>{' '}
                                    {data.production.debit ?? 0}
                                </span>
                                <span
                                    style={{
                                        fontSize: '11px',
                                        textAlign: 'left',
                                    }}
                                >
                                    Débit réel{' '}
                                </span>
                            </div>
                            <div className={style.divIndicator}>
                                <span
                                    style={{
                                        textAlign: 'right',
                                        fontSize: '24px',

                                        color: '#00B0F0',
                                    }}
                                >
                                    <sub style={{ color: 'black' }}>kg/h</sub>
                                    <span style={{ color: 'black' }}>
                                        |
                                    </span>{' '}
                                    {data.of.debit ?? 0}
                                </span>
                                <span
                                    style={{
                                        fontSize: '11px',
                                        textAlign: 'left',
                                    }}
                                >
                                    Débit théorique{' '}
                                </span>
                            </div>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <div className={style.divIndicatorblur}>
                                <span
                                    style={{
                                        textAlign: 'right',
                                        fontSize: '24px',
                                        color: 'red',
                                    }}
                                >
                                    N/A
                                </span>
                                <span
                                    style={{
                                        fontSize: '11px',
                                        textAlign: 'left',
                                    }}
                                >
                                    Add a parameter
                                </span>
                            </div>
                            <div className={style.divIndicatorblur}>
                                <span
                                    style={{
                                        textAlign: 'right',
                                        fontSize: '24px',
                                        color: 'red',
                                    }}
                                >
                                    N/A
                                </span>
                                <span>Add a parameter</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.containerMachine}>
                <div className={style.indicator} style={{ height: '40vh' }}>
                    <img src={iconKpi} alt="" className={style.iconof} />
                    <h4>Pareto des arrêts</h4>
                    <Suspense fallback={<Loader />}>
                        <ParetoArret data={data.arret.chart} />
                    </Suspense>
                </div>
                <div className={style.indicator} style={{ height: '40vh' }}>
                    <img src={iconparam} className={style.iconof} alt="icon" />
                    <h4>Evolution des déchets et non-conformes</h4>
                    <Suspense fallback={<Loader />}>
                        <Barchart data={data} />
                    </Suspense>
                </div>
            </div>
        </>
    )
}

RésultatInstantané.propTypes = {
    data: PropTypes.object.isRequired,
}

export default RésultatInstantané
