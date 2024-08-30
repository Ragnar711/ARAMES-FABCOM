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

const LineChart = ({ style, data }) => {
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
                            dataKey="Date"
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
                            dataKey="TDech"
                            fill="#f4b183"
                            barSize={70}
                            yAxisId="left"
                            name="TDech"
                        />
                        <Line
                            type="monotone"
                            dataKey="TRS"
                            stroke="#4673c5"
                            strokeWidth={3}
                            yAxisId="right"
                            name="TRS"
                            dot={false}
                        />
                        <Line
                            type="monotone"
                            dataKey="TD"
                            stroke="#6f6f6f"
                            strokeWidth={3}
                            yAxisId="right"
                            name="TD"
                            dot={false}
                        />
                        <Line
                            type="monotone"
                            dataKey="TP"
                            stroke="#ffc000"
                            strokeWidth={3}
                            yAxisId="left"
                            name="TP"
                            dot={false}
                        />
                        <Line
                            type="monotone"
                            dataKey="TQ"
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
