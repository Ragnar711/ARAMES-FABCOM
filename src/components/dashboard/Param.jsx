import { getColor } from '../../utils/getColor'

const Param = ({ param, name, value, style }) => {
    const KPIs = ['TRS', 'TD', 'TP', 'TQ', 'Tde']
    let color = ''
    if (!value) {
        value = 'N/A'
        color = '#bfbfbf'
    }

    return (
        <div
            className={style.kpiContainer}
            style={{
                color: color,
            }}
        >
            <div className={style.kpiContent}>
                <p className={style.kpi}>{param}</p>
                <p className={style.subKpi}>{name}</p>
            </div>
            {value !== 'N/A' && KPIs.includes(param) ? (
                <div
                    style={{
                        border: `2px solid ${getColor(
                            value,
                            param.toLowerCase()
                        )}`,
                        boxShadow: `0 0 0.5px ${getColor(
                            value,
                            param.toLowerCase()
                        )}`,
                        width: '30%',
                        fontSize: '0.45rem',
                    }}
                    className={style.kpiValue}
                >
                    {value}%
                </div>
            ) : (
                <div
                    className={style.kpiValue}
                    style={{
                        border: '2px solid rgba(0, 0, 0, 0.25)',
                        boxShadow: '0 0 0.5px rgba(0, 0, 0, 0.25)',
                    }}
                >
                    {value}
                </div>
            )}
        </div>
    )
}

export default Param
