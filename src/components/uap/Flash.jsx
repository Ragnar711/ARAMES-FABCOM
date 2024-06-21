import { formatDuration } from '../../utils/dates'
import news from '../../assets/news.png'

const Flash = ({ style, data }) => {
    return (
        <div className={style.blocKpi}>
            <div className={style.titreImageOf}>
                <img src={news} alt="" className={style.iconOf} />
                <h2>News | Flash évènements </h2>
            </div>
            <div className={style.spans}>
                <span
                    className={style.titreBloc}
                    style={{
                        fontSize: '0.4rem',
                        color: 'black',
                    }}
                >
                    Dernier Déchet
                </span>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '100%',
                    }}
                >
                    <span className={style.titreValueKPI}>
                        <sub
                            style={{
                                fontSize: '0.3rem',
                                color: 'black',
                                fontWeight: 'bold',
                            }}
                        >
                            Kg/h
                        </sub>
                        <span style={{ fontWeight: '400' }}> |</span> N/A
                    </span>
                    <span className={style.titreValueKPI}>
                        <sub
                            style={{
                                fontSize: '0.3rem',
                                color: 'black',
                                fontWeight: 'bold',
                            }}
                        >
                            Cause
                        </sub>{' '}
                        | Nett
                    </span>
                </div>
                <span
                    className={style.titreBloc}
                    style={{
                        fontSize: '0.4rem',
                        color: 'black',
                    }}
                >
                    Dernier NC
                </span>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '100%',
                    }}
                >
                    <span className={style.titreValueKPI}>
                        <sub
                            style={{
                                fontSize: '0.3rem',
                                color: 'black',
                                fontWeight: 'bold',
                            }}
                        >
                            Kg/h
                        </sub>
                        <span style={{ fontWeight: '400' }}> |</span> N/A
                    </span>
                    <span className={style.titreValueKPI}>
                        <sub
                            style={{
                                fontSize: '0.3rem',
                                color: 'black',
                                fontWeight: 'bold',
                            }}
                        >
                            Cause
                        </sub>{' '}
                        | Nett
                    </span>
                </div>
                <span
                    className={style.titreBloc}
                    style={{
                        fontSize: '0.4rem',
                        color: 'black',
                    }}
                >
                    Dernier Arret
                </span>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '100%',
                    }}
                >
                    <span className={style.titreValueKPI}>
                        <sub
                            style={{
                                fontSize: '0.3rem',
                                color: 'black',
                                fontWeight: 'bold',
                            }}
                        >
                            Durée
                        </sub>{' '}
                        | {formatDuration(data.lastArret.Duree)}
                    </span>
                    <span className={style.titreValueKPI}>
                        <sub
                            style={{
                                fontSize: '0.3rem',
                                color: 'black',
                                fontWeight: 'bold',
                            }}
                        >
                            Cause
                        </sub>{' '}
                        | {data.lastArret.Motif}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Flash
