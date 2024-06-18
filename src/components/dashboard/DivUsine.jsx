import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import style from '../../styles/Section.module.css'
import { getColor } from '../../utils/getColor'
import { capitalize } from '../../utils/strings'

import qte from '../../assets/qtte.webp'
import User from '../../assets/usericon.png'
import oficon from '../../assets/ofIcon.webp'
import iconKpi from '../../assets/iconKpi.webp'

import PropTypes from 'prop-types'

const MesDivs = ({ data, machineData }) => {
    const navigate = useNavigate()
    const name = sessionStorage.getItem('user')
    const [quantities, setQuantities] = useState({
        quantiteConforme: 0,
        NC: 0,
        NCD: 0,
        Dechet: 0,
    })
    const [matricule, setMatricule] = useState('')
    const users = []

    useEffect(() => {
        let newQuantities = { quantiteConforme: 0, NC: 0, NCD: 0, Dechet: 0 }
        Object.keys(data.quantities).forEach((machine) => {
            Object.keys(data.quantities[machine]).forEach((q) => {
                newQuantities[q] += data.quantities[machine][q]
            })
        })
        setQuantities(newQuantities)
    }, [data.quantities])

    return (
        <div className={style.section}>
            <h1
                className={style.titreSection}
                onClick={() => navigate(`/uap/${machineData.sec}`)}
            >
                {machineData.section}
            </h1>
            <div>
                <img
                    className={style.imageMachine}
                    src={machineData.image}
                    alt="machine"
                />
                <div className={style.user}>
                    <img className={style.iconUser} src={User} alt="user" />
                    {name === '9898' ? (
                        <select
                            style={{
                                outline: 'none',
                                border: 'none',
                                padding: '8px',
                                textAlign: 'center',
                            }}
                            onChange={(e) => setMatricule(e.target.value)}
                        >
                            {users.map((user) => {
                                return (
                                    <option
                                        key={user.id}
                                        value={user.matricule}
                                        selected={user.name === matricule}
                                    >
                                        {user.name}
                                    </option>
                                )
                            })}
                        </select>
                    ) : (
                        <input type="text" value={matricule} readOnly />
                    )}
                    <button
                        className={style.button}
                        style={{
                            display: name !== '9898' ? 'none' : 'inline',
                        }}
                    >
                        Assigner
                    </button>
                </div>
            </div>
            <div className={style.blocKpi}>
                <div className={style.titreImageOf}>
                    <img src={iconKpi} alt="iconkpi" className={style.iconOf} />
                    <h2>KPI | Performance de la section</h2>
                </div>
                <div className={style.spans}>
                    <div className={style.blocQuantite}>
                        <div
                            style={{
                                display: 'flex',
                                width: '100%',
                                justifyContent: 'space-between',
                            }}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    lineHeight: '1rem',
                                }}
                            >
                                <span className={style.titreBloc}>
                                    Taux de Rendement Synthétique
                                </span>
                                <span className={style.titreBloc}>
                                    Taux de performance
                                </span>
                                <span className={style.titreBloc}>
                                    Taux de disponibilité
                                </span>
                                <span className={style.titreBloc}>
                                    Taux de qualité
                                </span>
                            </div>
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-around',
                                    lineHeight: '1rem',
                                }}
                            >
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row',

                                        alignItems: 'center',
                                        justifyContent: 'space-around',
                                    }}
                                >
                                    <div>
                                        <span className={style.titreValue}>
                                            <sub
                                                style={{
                                                    fontSize: '10px',
                                                    color: 'black',
                                                    fontWeight: 'bold',
                                                }}
                                            >
                                                TRS
                                            </sub>
                                            {}|
                                        </span>
                                    </div>
                                    <div style={{ marginLeft: '11px' }}>
                                        <span
                                            style={{
                                                fontSize: '14px',
                                                color: getColor(
                                                    data.kpi.trs.toFixed(0),
                                                    'trs'
                                                ),
                                                fontWeight: 'bold',
                                            }}
                                        >
                                            {data.kpi.trs.toFixed(0)} %
                                        </span>
                                    </div>
                                </div>

                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'space-around',
                                    }}
                                >
                                    <div>
                                        <span className={style.titreValue}>
                                            <sub
                                                style={{
                                                    fontSize: '10px',
                                                    color: 'black',
                                                    fontWeight: 'bold',
                                                }}
                                            >
                                                TP
                                            </sub>
                                            {}|
                                        </span>
                                    </div>
                                    <div style={{ marginLeft: '11px' }}>
                                        <span
                                            style={{
                                                fontSize: '14px',
                                                color: getColor(
                                                    data.kpi.tp.toFixed(0),
                                                    'tp'
                                                ),
                                            }}
                                        >
                                            {data.kpi.tp.toFixed(0)} %
                                        </span>
                                    </div>
                                </div>
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row',

                                        alignItems: 'center',
                                        justifyContent: 'space-around',
                                    }}
                                >
                                    <div>
                                        <span className={style.titreValue}>
                                            <sub
                                                style={{
                                                    fontSize: '10px',
                                                    color: 'black',
                                                    fontWeight: 'bold',
                                                }}
                                            >
                                                TD
                                            </sub>
                                            {}|
                                        </span>
                                    </div>
                                    <div style={{ marginLeft: '11px' }}>
                                        <span
                                            style={{
                                                fontSize: '14px',
                                                color: getColor(
                                                    data.kpi.td.toFixed(0),
                                                    'td'
                                                ),
                                            }}
                                        >
                                            {data.kpi.td.toFixed(0)} %
                                        </span>
                                    </div>
                                </div>
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row',

                                        alignItems: 'center',
                                        justifyContent: 'space-around',
                                    }}
                                >
                                    <div>
                                        <span className={style.titreValue}>
                                            <sub
                                                style={{
                                                    fontSize: '10px',
                                                    color: 'black',
                                                    fontWeight: 'bold',
                                                }}
                                            >
                                                TQ
                                            </sub>
                                            {}|
                                        </span>
                                    </div>
                                    <div style={{ marginLeft: '11px' }}>
                                        <span
                                            style={{
                                                fontSize: '14px',
                                                color: getColor(
                                                    data.kpi.tq.toFixed(0),
                                                    'tq'
                                                ),
                                            }}
                                        >
                                            {data.kpi.tq.toFixed(0)} %
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.blocKpi}>
                <div className={style.titreImageOf}>
                    <img src={oficon} alt="iconkpi" className={style.iconOf} />
                    <h2>OF | Liste des OF encours</h2>
                </div>
                <div className={style.spans}>
                    {Object.keys(data.of).map((machine, key) => {
                        if (machine !== 'NOF')
                            return (
                                <div key={key} className={style.divSPan}>
                                    <div>
                                        {' '}
                                        <span className={style.spanKpi}>
                                            {' '}
                                            {capitalize(machine)}:
                                        </span>
                                    </div>
                                    <div
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            width: '29%',
                                        }}
                                    >
                                        <span className={style.value}>
                                            <sub
                                                style={{
                                                    color: 'black',
                                                    width: '100%',
                                                }}
                                            >
                                                N°OF
                                            </sub>{' '}
                                            <span style={{ color: 'black' }}>
                                                |
                                            </span>
                                        </span>
                                        <span
                                            style={{
                                                fontSize: '10px',
                                                color: '#4C78C7',
                                                fontWeight: 'bold',
                                            }}
                                        >
                                            {data.of[machine]}
                                        </span>
                                    </div>
                                </div>
                            )
                    })}
                </div>
            </div>
            <div className={style.blocKpi}>
                <div className={style.titreImageOf}>
                    <img src={qte} alt="iconkpi" className={style.iconOf} />
                    <h2>Qté | Split des quantités Réalisées</h2>
                </div>
                <div className={style.spans}>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '100%',
                        }}
                    >
                        <div>
                            <span className={style.spanKpi}>
                                Total production:
                            </span>
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                width: '29%',
                            }}
                        >
                            <div>
                                <span className={style.value}>
                                    <sub
                                        style={{
                                            color: 'black',
                                            width: '100%',
                                        }}
                                    >
                                        Kg
                                    </sub>{' '}
                                    <span style={{ color: 'black' }}>|</span>
                                </span>
                            </div>

                            <div>
                                <span
                                    style={{
                                        fontSize: '10px',
                                        color: '#4C78C7',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    {quantities.quantiteConforme.toFixed(0)}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '100%',
                        }}
                    >
                        <div>
                            <span className={style.spanKpi}>Total Qté NC:</span>
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                width: '29%',
                            }}
                        >
                            <div>
                                <span className={style.value}>
                                    <sub
                                        style={{
                                            color: 'black',
                                            width: '100%',
                                        }}
                                    >
                                        Kg
                                    </sub>{' '}
                                    <span style={{ color: 'black' }}>|</span>
                                </span>
                            </div>

                            <div>
                                <span
                                    style={{
                                        fontSize: '10px',
                                        color: '#4C78C7',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    {quantities.NC.toFixed(2)}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '100%',
                        }}
                    >
                        <div>
                            <span className={style.spanKpi}>
                                Total Qté NC Dérogée:
                            </span>
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                width: '29%',
                            }}
                        >
                            <div>
                                <span className={style.value}>
                                    <sub
                                        style={{
                                            color: 'black',
                                            width: '100%',
                                        }}
                                    >
                                        Kg
                                    </sub>{' '}
                                    <span style={{ color: 'black' }}>|</span>
                                </span>
                            </div>

                            <div>
                                <span
                                    style={{
                                        fontSize: '10px',
                                        color: '#4C78C7',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    {quantities.NCD.toFixed(2)}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '100%',
                        }}
                    >
                        <div>
                            <span className={style.spanKpi}>Total Déchet:</span>
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                width: '29%',
                            }}
                        >
                            <div>
                                <span className={style.value}>
                                    <sub
                                        style={{
                                            color: 'black',
                                            width: '100%',
                                        }}
                                    >
                                        Kg
                                    </sub>{' '}
                                    <span style={{ color: 'black' }}>|</span>
                                </span>
                            </div>

                            <div>
                                <span
                                    style={{
                                        fontSize: '10px',
                                        color: '#4C78C7',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    {quantities.Dechet.toFixed(2)}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MesDivs

MesDivs.propTypes = {
    data: PropTypes.object.isRequired,
    machineData: PropTypes.object.isRequired,
}
