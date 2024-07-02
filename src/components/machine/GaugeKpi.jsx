import GaugeComponent from 'react-gauge-component'
import { getColor } from '../../utils/getColor'

const GaugeKPI = ({ value, kpi, style }) => {
    const color = getColor(value, kpi)

    return (
        <div className={style.gaugeContainer}>
            <GaugeComponent
                value={value}
                type="grafana"
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
                    subArcs: [{ limit: value }, {}],
                    padding: 0,
                    width: 0.15,
                    cornerRadius: 0,
                }}
            />
            <p>{kpi.toUpperCase()}</p>
        </div>
    )
}

export default GaugeKPI
