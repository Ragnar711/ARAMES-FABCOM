import yamazumi from '../../assets/yamazumi.png'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Legend,
    ResponsiveContainer,
    ReferenceLine,
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
                        <XAxis dataKey="name" fontSize={10} />
                        <YAxis fontSize={10} />
                        <Legend
                            wrapperStyle={{
                                fontSize: '15px',
                                color: '#000',
                            }}
                        />
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
                            name="Cadence cible"
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default Yamazumi
