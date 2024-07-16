import { useState } from 'react'
import style from '../../styles/Managment.module.css'
import {
    Tooltip,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Label,
    ReferenceLine,
    ComposedChart,
} from 'recharts'
import pdfIcon from '../../assets/pdf.png'
import { printAsPdf } from '../../utils/exportFunctions'

const Pareto = ({ IDPareto, title, yAxisLabel, chartData }) => {
    const [paretoHeight, setParetoHeight] = useState(400)
    const [paretoVisible, setParetoVisible] = useState(true)
    const toggleParetoVisibility = () => {
        setParetoVisible(!paretoVisible)
        setParetoHeight(paretoVisible ? 0 : 400)
    }
    let keyField = 'Motif'
    let valueField = 'Durée'
    if (title === 'déchets' || title === 'NC') {
        valueField = 'Quantité'
    }
    const formatToTime = (value) => {
        let seconds = value
        let hours = Math.floor(seconds / 3600)
        seconds %= 3600
        let minutes = Math.floor(seconds / 60)
        return [hours, minutes]
            .map((v) => (v < 10 ? '0' + v : v))
            .filter((v, i) => v !== '00' || i > 0)
            .join(':')
    }
    const renderCustomTooltip = ({ active, payload }) => {
        if (active) {
            return (
                <div
                    style={{
                        backgroundColor: '#ffffff',
                        border: '1px solid #cccccc',
                        padding: '5px',
                        fontSize: '12px',
                    }}
                >
                    {payload !== null && typeof payload !== 'undefined' ? (
                        <>
                            <p>{`${keyField}: ${payload[0].payload.Motif}`}</p>
                            <p>{`${valueField}: ${
                                valueField === 'Durée'
                                    ? formatToTime(payload[0].value)
                                    : payload[0].value
                            }`}</p>
                        </>
                    ) : (
                        <p>No</p>
                    )}
                </div>
            )
        }
        return null
    }
    const sortedChartData = [...chartData].sort(
        (a, b) => b[valueField] - a[valueField]
    )
    const top5ChartData = sortedChartData.slice(0, 5)
    return (
        <div
            style={{ height: paretoHeight + 'px' }}
            className={`${style.chart} export-item`}
            id={IDPareto}
        >
            <h3 className={style.chartHeader}>
                Pareto {title}
                <span className={style.spanB}>
                    <img
                        src={pdfIcon}
                        alt="pdf"
                        onClick={() => printAsPdf(IDPareto)}
                        width={40}
                        height={40}
                    />
                </span>
                <span className={style.toggle} onClick={toggleParetoVisibility}>
                    {paretoVisible ? '-' : '+'}
                </span>
            </h3>
            {paretoVisible && (
                <ComposedChart width={700} height={350} data={top5ChartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="Motif" fontSize={10} interval={0} />
                    <YAxis
                        fontSize={10}
                        yAxisId="left"
                        orientation="left"
                        tickFormatter={(value) =>
                            valueField === 'Durée' ? formatToTime(value) : value
                        }
                    >
                        <Label
                            value={yAxisLabel}
                            angle={-90}
                            position="insideLeft"
                            fontSize={10}
                            offset={1}
                        />
                    </YAxis>
                    <YAxis
                        fontSize={10}
                        yAxisId="right"
                        orientation="right"
                        domain={[0, 100]}
                        tickFormatter={(value) => `${value}%`}
                    >
                        <Label
                            value="Cumulative Percentage"
                            angle={-90}
                            position="insideRight"
                            fontSize={10}
                        />
                    </YAxis>
                    <Tooltip content={renderCustomTooltip} />
                    <Bar
                        dataKey={`${valueField}`}
                        fill="#8884d8"
                        barSize={20}
                        yAxisId="left"
                    />
                    <ReferenceLine yAxisId="right" y={80} stroke="red" />
                </ComposedChart>
            )}
        </div>
    )
}

export default Pareto
