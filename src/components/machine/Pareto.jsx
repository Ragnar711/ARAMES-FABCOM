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
        const minutes = Math.floor(seconds / 60)
        const remainingSeconds = seconds % 60
        return `${minutes}:${
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
                        color: '#696969',
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
                        <XAxis dataKey="name" fontSize={10} />
                        <YAxis
                            fontSize={10}
                            tickFormatter={(val) => formatTime(val)}
                        />
                        <Bar dataKey="uv" fill={color} barSize={70} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default Pareto
