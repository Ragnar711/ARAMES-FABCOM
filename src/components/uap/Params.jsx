import iconProcess from '../../assets/process.webp'

const Params = ({ style, data }) => {
    return (
        <div className={style.blocKpi} id={style.params}>
            <div className={style.titreImageOf}>
                <img src={iconProcess} alt="" className={style.iconOf} />
                <h2>Prosess | Paramètre prosess</h2>
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
                            <span className={style.titreBloc}>Débit Réel</span>
                            <span className={style.titreBloc}>
                                Vitesse de tirage
                            </span>
                            <span className={style.titreBloc}>
                                Vitesse d'extrusion
                            </span>
                            <span className={style.titreBloc}>
                                Poids au métre
                            </span>
                            <span className={style.titreBloc}>
                                Débit théorique
                            </span>
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                lineHeight: '1rem',
                            }}
                        >
                            <span className={style.titreValueKPI}>
                                <sub
                                    style={{
                                        fontSize: '10px',
                                        color: 'black',
                                        fontWeight: '400',
                                    }}
                                >
                                    Kg/h
                                </sub>
                                <span style={{ fontWeight: '400' }}>|</span>{' '}
                                {(data.realTimeData.debit ?? 0).toFixed(0)}
                            </span>
                            <span className={style.titreValueKPI}>
                                <sub
                                    style={{
                                        fontSize: '10px',
                                        color: 'black',
                                        fontWeight: '400',
                                    }}
                                >
                                    m/min
                                </sub>
                                <span style={{ fontWeight: '400' }}>|</span>{' '}
                                {data.realTimeData.vitesseT.toFixed(0)}
                            </span>
                            <span className={style.titreValueKPI}>
                                <sub
                                    style={{
                                        fontSize: '10px',
                                        color: 'black',
                                        fontWeight: '400',
                                    }}
                                >
                                    RPM
                                </sub>
                                <span style={{ fontWeight: '400' }}>|</span>{' '}
                                {data.realTimeData.vitesseE.toFixed(0)}
                            </span>
                            <span className={style.titreValueKPI}>
                                <sub
                                    style={{
                                        fontSize: '10px',
                                        color: 'black',
                                        fontWeight: '400',
                                    }}
                                >
                                    Kg/m
                                </sub>
                                <span style={{ fontWeight: '400' }}>|</span>{' '}
                                {data.realTimeData.poids.toFixed(0)}
                            </span>
                            <span className={style.titreValueKPI}>
                                <sub
                                    style={{
                                        fontSize: '10px',
                                        color: 'black',
                                        fontWeight: '400',
                                    }}
                                >
                                    Kg/h
                                </sub>
                                <span style={{ fontWeight: '400' }}>|</span>{' '}
                                {data.of.DebitTheorique}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Params
