import iconKpi from '../../assets/iconKpi.webp'

const Eng = ({ style }) => {
    return (
        <div className={style.blocKpi}>
            <div className={style.titreImageOf}>
                <img src={iconKpi} alt="iconkpi" className={style.iconOf} />
                <h2 className={style.blocTitle}>
                    Eng | Performance énergétique
                </h2>
                <hr />
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
                                lineHeight: '0.75rem',
                            }}
                        >
                            <span
                                className={style.titreBloc}
                                style={{
                                    fontSize: '0.4rem',
                                    color: 'black',
                                }}
                            >
                                Puissance active [P]
                            </span>
                            <span
                                className={style.titreBloc}
                                style={{
                                    fontSize: '0.4rem',
                                    color: 'black',
                                }}
                            >
                                Puissance réactive [Q]
                            </span>
                            <span
                                className={style.titreBloc}
                                style={{
                                    fontSize: '0.4rem',
                                    color: 'black',
                                }}
                            >
                                Puissance apparente [S]
                            </span>
                            <span
                                className={style.titreBloc}
                                style={{
                                    fontSize: '0.4rem',
                                    color: 'black',
                                }}
                            >
                                Harmonique 1 [THD]
                            </span>
                            <span
                                className={style.titreBloc}
                                style={{
                                    fontSize: '0.4rem',
                                    color: 'black',
                                }}
                            >
                                Harmonique 2 [THDi]
                            </span>
                            <span
                                className={style.titreBloc}
                                style={{
                                    fontSize: '0.4rem',
                                    color: 'black',
                                }}
                            >
                                Empreinte Carbone [CO2]
                            </span>
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                lineHeight: '0.75rem',
                            }}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-around',
                                }}
                            >
                                <div>
                                    <span className={style.titreValue}>
                                        <sub
                                            style={{
                                                fontSize: '0.3rem',
                                                color: 'black',
                                                fontWeight: 'bold',
                                            }}
                                        >
                                            KWh{' '}
                                        </sub>
                                        {}|
                                    </span>
                                </div>
                                <div style={{ marginLeft: '11px' }}>
                                    <span
                                        style={{
                                            fontSize: '0.4rem',
                                            fontWeight: 'bold',
                                            color: '#4C78C7',
                                        }}
                                    >
                                        N/A
                                    </span>
                                </div>
                            </div>
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-around',
                                }}
                            >
                                <div>
                                    <span className={style.titreValue}>
                                        <sub
                                            style={{
                                                fontSize: '0.3rem',
                                                color: 'black',
                                                fontWeight: 'bold',
                                            }}
                                        >
                                            KWh{' '}
                                        </sub>
                                        {}|
                                    </span>
                                </div>
                                <div style={{ marginLeft: '11px' }}>
                                    <span
                                        style={{
                                            fontSize: '0.4rem',
                                            fontWeight: 'bold',
                                            color: '#4C78C7',
                                        }}
                                    >
                                        N/A
                                    </span>
                                </div>
                            </div>
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-around',
                                }}
                            >
                                <div>
                                    <span className={style.titreValue}>
                                        <sub
                                            style={{
                                                fontSize: '0.3rem',
                                                color: 'black',
                                                fontWeight: 'bold',
                                            }}
                                        >
                                            KWh{' '}
                                        </sub>
                                        {}|
                                    </span>
                                </div>
                                <div style={{ marginLeft: '11px' }}>
                                    <span
                                        style={{
                                            fontSize: '0.4rem',
                                            fontWeight: 'bold',
                                            color: '#4C78C7',
                                        }}
                                    >
                                        N/A
                                    </span>
                                </div>
                            </div>
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-around',
                                }}
                            >
                                <div style={{ marginLeft: '11px' }}>
                                    <span
                                        style={{
                                            fontSize: '0.4rem',
                                            fontWeight: 'bold',
                                            color: 'red',
                                        }}
                                    >
                                        N/A
                                    </span>
                                </div>
                            </div>
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-around',
                                }}
                            >
                                <div style={{ marginLeft: '11px' }}>
                                    <span
                                        style={{
                                            fontSize: '0.4rem',
                                            fontWeight: 'bold',
                                            color: 'red',
                                        }}
                                    >
                                        N/A
                                    </span>
                                </div>
                            </div>
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-around',
                                }}
                            >
                                <div>
                                    <span className={style.titreValue}>
                                        <sub
                                            style={{
                                                fontSize: '0.3rem',
                                                color: 'black',
                                                fontWeight: 'bold',
                                            }}
                                        >
                                            Kg{' '}
                                        </sub>
                                        {}|
                                    </span>
                                </div>
                                <div style={{ marginLeft: '11px' }}>
                                    <span
                                        style={{
                                            fontSize: '0.4rem',
                                            fontWeight: 'bold',
                                            color: 'green',
                                        }}
                                    >
                                        N/A
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Eng
