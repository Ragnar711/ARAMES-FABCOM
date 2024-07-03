import yamazumi from '../../assets/yamazumi.png'
import {
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Legend,
    ResponsiveContainer,
    ReferenceLine,
    BarChart,
} from 'recharts'

const data = [
    {
        name: 'Enveloppeuse',
        uv: 10,
    },
    {
        name: 'COS',
        uv: 15,
    },
    {
        name: 'Soudure des connexions',
        uv: 20,
    },
    {
        name: 'Soudure bac / couvercle',
        uv: 7.5,
    },
]

const CustomLegend = (props) => {
    const { payload } = props

    const customPayload = [
        ...payload,
        { value: 'Cadence théorique', type: 'line', color: '#ed7d31' },
    ]

    return (
        <ul
            style={{
                listStyle: 'none',
                margin: '10px 25% 0 25%',
                padding: 0,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
            }}
        >
            {customPayload.map((entry, index) => (
                <li
                    key={`item-${index}`}
                    style={{ color: entry.color, fontSize: 12 }}
                >
                    <svg
                        width="14"
                        height="14"
                        style={{ marginRight: 4, verticalAlign: 'middle' }}
                    >
                        {entry.type === 'line' ? (
                            <line
                                x1="0"
                                y1="5"
                                x2="12"
                                y2="5"
                                style={{ stroke: entry.color, strokeWidth: 4 }}
                            />
                        ) : (
                            <rect
                                width="11"
                                height="11"
                                style={{ fill: entry.color }}
                            />
                        )}
                    </svg>
                    <span style={{ color: '#000' }}>{entry.value}</span>
                </li>
            ))}
        </ul>
    )
}

const Yamazumi = ({ style }) => {
    return (
        <div className={style.yamazumi}>
            <p className={style.title}>
                <img alt="icon" src={yamazumi} /> Yamazumi chart
            </p>
            <div className={style.content}>
                <p
                    style={{
                        fontSize: '15px',
                        color: '#000',
                        marginBottom: '10px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    Cadence réelle instantanée
                </p>
                <ResponsiveContainer width="100%" height="80%">
                    <BarChart width={500} height={300} data={data}>
                        <CartesianGrid strokeDasharray="4 4" />
                        <XAxis
                            dataKey="name"
                            fontSize={11}
                            tick={{ fill: '#000' }}
                        />
                        <YAxis fontSize={11} tick={{ fill: '#000' }} />
                        <Legend content={<CustomLegend />} />
                        <Bar
                            dataKey="uv"
                            fill="#9bacd9"
                            stroke="#426fc0"
                            barSize={70}
                            name="Cadence réelle instantanée"
                        />
                        <ReferenceLine
                            y={17.5}
                            stroke="#ed7d31"
                            strokeWidth={4}
                            name="Cadence théorique"
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default Yamazumi
