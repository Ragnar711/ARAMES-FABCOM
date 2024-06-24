import GaugeComponent from 'react-gauge-component'

const Gauge = ({ value }) => {
    let color

    switch (true) {
        case value < 30:
            color = '#FF0000'
            break
        case value < 70:
            color = '#FFA500'
            break
        default:
            color = '#00FF00'
            break
    }

    return (
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
                    formatTextValue: (value) => `${value} / 100`,
                    style: {
                        fontSize: '35px',
                        fill: '#000',
                    },
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
    )
}

export default Gauge
