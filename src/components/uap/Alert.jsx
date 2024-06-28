const Alert = ({ param, name, value, cause, style }) => {
    return (
        <div className={style.kpiContainer}>
            <div className={style.kpiContent}>
                <p className={style.kpi}>{param}</p>
                <p className={style.subKpi}>{name}</p>
            </div>
            <div className={style.alert}>
                <div className={style.alertValue}>{value}</div>
                <div>----------</div>
                <div>{cause}</div>
            </div>
        </div>
    )
}

export default Alert
