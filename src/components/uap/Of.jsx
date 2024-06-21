import ofIcon from '../../assets/ofIcon.webp'

const FlexContainer = ({ children, style }) => (
    <div
        style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
            ...style,
        }}
    >
        {children}
    </div>
)

const Of = ({ style, data }) => {
    const per =
        (data.kpi.QP /
            (isNaN(data.of.QuantiteObjectif)
                ? data.kpi.QP
                : data.of.QuantiteObjectif)) *
        100
    const percentage = per > 15 ? `${Math.min(Math.round(per), 100)}%` : ''

    return (
        <div className={style.blocKpi}>
            <div className={style.titreImageOf}>
                <img src={ofIcon} alt="icon" className={style.iconOf} />
                <h2>OF | Suivi de l'OF encours</h2>
            </div>
            <div className={style.spans}>
                <div className={style.blocQuantite}>
                    <FlexContainer>
                        <FlexContainer
                            style={{
                                flexDirection: 'column',
                                lineHeight: '1rem',
                            }}
                        >
                            <span
                                className={style.titreBloc}
                                style={{ fontSize: '0.4rem', color: 'black' }}
                            >
                                Quantié réalisée
                            </span>
                            <span
                                className={style.titreBloc}
                                style={{ fontSize: '0.4rem', color: 'black' }}
                            >
                                Quantié objectif
                            </span>
                        </FlexContainer>
                        <FlexContainer
                            style={{
                                flexDirection: 'column',
                                lineHeight: '1rem',
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
                                    | {data.kpi.QP.toFixed(2)}
                                </span>
                            </div>
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
                                | {data.of.QuantiteObjectif}
                            </span>
                        </FlexContainer>
                    </FlexContainer>
                </div>
                <div className={style.blocOf}>
                    <div style={{ marginTop: '9px' }}>
                        <span
                            className={style.titreBloc}
                            style={{ fontSize: '0.4rem' }}
                        >
                            Réference OF
                        </span>
                    </div>
                    <FlexContainer>
                        <span className={style.titreValue}>
                            <sub style={{ fontSize: '10px', color: 'black' }}>
                                N°OF{' '}
                            </sub>
                            | {data.of.NOF}
                        </span>
                        <span className={style.titreValue}>
                            <sub style={{ fontSize: '10px', color: 'black' }}>
                                Article
                            </sub>{' '}
                            | N/A
                        </span>
                    </FlexContainer>
                    <div className={style.divOF}>
                        <div
                            className={style.subDivOf}
                            style={{
                                width: per >= 100 ? '100%' : `${per}%`,
                                position: 'relative',
                            }}
                        >
                            <div
                                className={style.percentageLine}
                                style={{ left: '100%' }}
                            ></div>
                            <div className={style.percentageText}>
                                {percentage}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Of
