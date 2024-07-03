import pareto from '../../assets/pareto.png'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    ResponsiveContainer,
} from 'recharts'

const Pareto = ({ style, title, subtitle, data, color, tickFormatter }) => {
    const formatTime = (seconds) => {
        const hours = Math.floor(seconds / 3600)
        const minutes = Math.floor((seconds % 3600) / 60)
        const remainingSeconds = seconds % 60
        return `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${
            remainingSeconds < 10 ? '0' : ''
        }${remainingSeconds}`
    }

    return (
        <div className={style.pareto}>
            <p className={style.title}>
                <img alt="icon" src={pareto} /> {title}
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
                    {subtitle}
                </p>
                <ResponsiveContainer width="100%" height="80%">
                    <BarChart width={500} height={300} data={data}>
                        <CartesianGrid strokeDasharray="4 4" />
                        <XAxis
                            dataKey="name"
                            fontSize={11}
                            tick={{ fill: '#000' }}
                        />
                        <YAxis
                            fontSize={11}
                            tick={{ fill: '#000' }}
                            tickFormatter={(val) =>
                                tickFormatter ? formatTime(val) : val
                            }
                        />
                        <Bar dataKey="uv" fill={color} barSize={70} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default Pareto
