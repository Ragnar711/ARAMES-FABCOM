const Of = ({ title, data, values, style, icon }) => {
    const progress = ((values.QP / values.QO) * 100).toFixed(0) ?? 0

    return (
        <div className={style.blocKpi}>
            <div className={style.titreImageOf}>
                <img src={icon} alt="iconkpi" className={style.iconOf} />
                <h2 className={style.blocTitle}>{title}</h2>
            </div>
            <div className={style.kpis}>
                <div>
                    <div className={style['progress-bar-container']}>
                        <div
                            className={style['progress-bar']}
                            style={{ width: `${progress}%` }}
                        >
                            <span
                                className={style['progress-label']}
                            >{`${progress}%`}</span>
                        </div>
                    </div>
                    <p className={style.subKpi}>
                        Progression de la réalisation
                    </p>
                </div>
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
                        {values?.NOF ?? ''}
                    </div>
                </div>
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
                        {values?.Article ?? ''}
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
                        {values?.QO ?? 0}
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
                        {values?.QP ?? 0}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Of
