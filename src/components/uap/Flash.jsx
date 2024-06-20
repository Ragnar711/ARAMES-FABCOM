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
                <span className={style.titreBloc}>Dernier Déchet</span>
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
                                fontSize: '10px',
                                color: 'black',
                                fontWeight: '400',
                            }}
                        >
                            Kg/h
                        </sub>
                        <span style={{ fontWeight: '400' }}>|</span> NAN
                    </span>
                    <span className={style.titreValueKPI}>
                        <sub
                            style={{
                                fontSize: '10px',
                                color: 'black',
                                fontWeight: '400',
                            }}
                        >
                            Cause
                        </sub>{' '}
                        | Nett
                    </span>
                </div>
                <span className={style.titreBloc}>Dernier NC</span>
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
                                fontSize: '10px',
                                color: 'black',
                                fontWeight: '400',
                            }}
                        >
                            Kg/h
                        </sub>
                        <span style={{ fontWeight: '400' }}>|</span> NAN
                    </span>
                    <span className={style.titreValueKPI}>
                        <sub
                            style={{
                                fontSize: '10px',
                                color: 'black',
                                fontWeight: '400',
                            }}
                        >
                            Cause
                        </sub>{' '}
                        | Nett
                    </span>
                </div>
                <span className={style.titreBloc}>Dernier Arret</span>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '100%',
                    }}
                >
                    <span className={style.titreValueKPI}>
                        <span style={{ fontWeight: '400' }}>|</span>{' '}
                        {formatDuration(data.lastArret.Duree)}
                    </span>
                    <span className={style.titreValueKPI}>
                        <sub
                            style={{
                                fontSize: '10px',
                                color: 'black',
                                fontWeight: '400',
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
