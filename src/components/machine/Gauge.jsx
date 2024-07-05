import GaugeComponent from 'react-gauge-component'
import { getColor } from '../../utils/getColor'

const Gauge = ({ value, kpi, style, className }) => {
    const color = getColor(value, kpi)

    return (
        <div className={style.gauge}>
            <GaugeComponent
                value={value}
                type="radial"
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
                        hide: true,
                    },
                }}
                arc={{
                    colorArray: [`${color}`, '#F2F2F2'],
                    subArcs: [{ limit: value }, {}],
                    padding: 0,
                    width: 0.15,
                    cornerRadius: 0,
                }}
                pointer={{
                    type: 'needle',
                    length: 1,
                    elastic: false,
                    animate: false,
                }}
            />
            <p className={style[className[0]]}>
                {value}
                <span
                    style={{
                        fontSize: '15px',
                    }}
                >
                    %
                </span>
            </p>
            <p className={style[className[1]]}>{kpi.toUpperCase()}</p>
        </div>
    )
}

export default Gauge
