import yamazumi from '../../assets/yamazumi.png'
import {
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    ResponsiveContainer,
    Line,
    ComposedChart,
    Legend,
} from 'recharts'

const data = [
    {
        name: '6h',
        tde: 5,
        trs: 75,
        td: 100,
        tp: 80,
        tq: 100,
    },
    {
        name: '7h',
        tde: 15,
        trs: 25,
        td: 70,
        tp: 70,
        tq: 55,
    },
    {
        name: '8h',
        tde: 10,
        trs: 10,
        td: 40,
        tp: 40,
        tq: 65,
    },
    {
        name: '9h',
        tde: 5,
        trs: 40,
        td: 70,
        tp: 70,
        tq: 70,
    },
    {
        name: '10h',
        tde: 5,
        trs: 20,
        td: 100,
        tp: 50,
        tq: 40,
    },
    {
        name: '11h',
        tde: 5,
        trs: 10,
        td: 50,
        tp: 50,
        tq: 50,
    },
    {
        name: '12h',
        tde: 10,
        trs: 65,
        td: 100,
        tp: 80,
        tq: 80,
    },
    {
        name: '13h',
        tde: 20,
        trs: 30,
        td: 90,
        tp: 85,
        tq: 40,
    },
    {
        name: '14h',
        tde: 5,
        trs: 90,
        td: 90,
        tp: 90,
        tq: 95,
    },
]

const LineChart = ({ style }) => {
    return (
        <div className={style.kpiChart}>
            <p className={style.title}>
                <img alt="icon" src={yamazumi} /> Évolution des indicateurs de
                performance
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
                    Evolution des KPI pour un poste de travail
                </p>
                <ResponsiveContainer width="100%" height="80%">
                    <ComposedChart width={500} height={300} data={data}>
                        <CartesianGrid strokeDasharray="4 4" />
                        <XAxis
                            dataKey="name"
                            fontSize={11}
                            tick={{ fill: '#000' }}
                        />
                        <YAxis
                            fontSize={11}
                            tick={{ fill: '#000' }}
                            tickFormatter={(val) => `${val}%`}
                            yAxisId="left"
                        />
                        <YAxis
                            fontSize={11}
                            tick={{ fill: '#000' }}
                            tickFormatter={(val) => `${val}%`}
                            yAxisId="right"
                            orientation="right"
                        />
                        <Legend
                            wrapperStyle={{
                                fontSize: '11px',
                            }}
                        />
                        <Bar
                            dataKey="tde"
                            fill="#f4b183"
                            barSize={70}
                            yAxisId="left"
                            name="TDE"
                        />
                        <Line
                            type="monotone"
                            dataKey="trs"
                            stroke="#4673c5"
                            strokeWidth={3}
                            yAxisId="right"
                            name="TRS"
                            dot={false}
                        />
                        <Line
                            type="monotone"
                            dataKey="td"
                            stroke="#6f6f6f"
                            strokeWidth={3}
                            yAxisId="right"
                            name="TD"
                            dot={false}
                        />
                        <Line
                            type="monotone"
                            dataKey="tp"
                            stroke="#ffc000"
                            strokeWidth={3}
                            yAxisId="left"
                            name="TP"
                            dot={false}
                        />
                        <Line
                            type="monotone"
                            dataKey="tq"
                            stroke="#ed7d31"
                            strokeWidth={3}
                            yAxisId="left"
                            name="TQ"
                            dot={false}
                        />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default LineChart
