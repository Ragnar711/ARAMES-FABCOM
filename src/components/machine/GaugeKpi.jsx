import GaugeComponent from 'react-gauge-component'
import { getColor } from '../../utils/getColor'
import styles from '../../styles/gauge.module.css'

const GaugeKPI = ({ value, kpi }) => {
    const color = getColor(value, kpi)
    const limit = value

    return (
        <>
            <GaugeComponent
                key={value}
                value={value}
                type="grafana"
                style={{ width: '25%', height: '10px' }}
                labels={{
                    tickLabels: {
                        type: 'inner',
                        ticks: [
                            { value: 20 },
                            { value: 40 },
                            { value: 60 },
                            { value: 80 },
                            { value: 100 },
                        ],
                        defaultTickValueConfig: {
                            hide: true,
                        },
                        defaultTickLineConfig: {
                            hide: true,
                        },
                    },
                    valueLabel: {
                        formatTextValue: (value) => `${value} / 100`,
                        style: {
                            fontSize: '35px',
                            fill: '#000',
                        },
                    },
                }}
                arc={{
                    colorArray: [`${color}`, '#D3D3D3'],
                    subArcs: [{ limit }, {}],
                    padding: 0,
                    width: 0.15,
                    cornerRadius: 0,
                }}
            />
            <h1 className={styles.kpiName}>{kpi.toUpperCase()}</h1>
        </>
    )
}

export default GaugeKPI
