import { useState } from 'react'
import style from '../../styles/Managment.module.css'
import { PieChart, Pie, Tooltip, Cell } from 'recharts'
import pdfIcon from '../../assets/pdf.png'
import { printAsPdf } from '../../utils/exportFunctions'

const COLORS = ['#1d3557', '#457b9d', '#a8dadc', '#f1faee']

const PieDataChart = ({ IDPie, title, data, yAxisLabel, totalDuration }) => {
    const [pieHeight, setPieHeight] = useState(400)
    const [pieVisible, setPieVisible] = useState(true)
    const togglePieVisibility = () => {
        setPieVisible(!pieVisible)
        setPieHeight(pieVisible ? 0 : 400)
    }
    let keyField = 'Motif'
    let valueField = 'Durée'
    if (title === 'déchets' || title === 'NC') {
        valueField = 'Quantité'
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
                    {payload !== null ? (
                        <>
                            <p>{`${keyField}: ${payload[0].payload.Motif}`}</p>
                            <p>
                                {`${yAxisLabel}: ${
                                    valueField === 'Durée'
                                        ? `${Math.floor(
                                              payload[0].value / 3600
                                          )} heures`
                                        : `${payload[0].value} Kg`
                                }`}{' '}
                            </p>{' '}
                        </>
                    ) : (
                        <p>No</p>
                    )}
                </div>
            )
        }
        return null
    }
    const getTopNChartData = (data, n) => {
        const topNData = data.slice(0, n)
        const otherData = data.slice(n)
        if (otherData.length > 0) {
            const otherSum = otherData.reduce(
                (sum, entry) => sum + entry[valueField],
                0
            )
            topNData.push({ [keyField]: 'Autres', [valueField]: otherSum })
        }
        return topNData
    }
    const renderCustomLegend = (data, totalDuration) => {
        const topNChartData = getTopNChartData(data, 3)
        return (
            <div style={{ display: 'flex', flexWrap: 'wrap', width: '100%' }}>
                {topNChartData.map((entry, index) => {
                    const percentage =
                        totalDuration > 0
                            ? (
                                  (entry[valueField] / totalDuration) *
                                  100
                              ).toFixed(2)
                            : 0
                    return (
                        <div
                            key={`legend-${index}`}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                width: '50%',
                            }}
                        >
                            <div
                                style={{
                                    width: 15,
                                    height: 15,
                                    backgroundColor:
                                        COLORS[index % COLORS.length],
                                    marginRight: 5,
                                }}
                            />
                            <p
                                style={{ fontSize: '12px' }}
                            >{`${entry[keyField]}: ${percentage}%`}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
    return (
        <div
            className={`${style.chart} export-item`}
            style={{ height: pieHeight + 'px' }}
            id={IDPie}
        >
            <h3 className={style.chartHeader}>
                Pie {title}
                <span className={style.spanB}>
                    <img
                        src={pdfIcon}
                        alt="pdf"
                        onClick={() => printAsPdf(IDPie)}
                        width={40}
                        height={40}
                    />
                </span>
                <span onClick={togglePieVisibility} className={style.toggle}>
                    {pieVisible ? '-' : '+'}
                </span>
            </h3>
            {pieVisible && (
                <div>
                    <PieChart width={300} height={300}>
                        <Pie
                            data={data}
                            cx={150}
                            cy={150}
                            labelLine={false}
                            outerRadius={100}
                            fill="#8884d8"
                            dataKey={`${valueField}`}
                        >
                            {data.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={COLORS[index % COLORS.length]}
                                />
                            ))}
                        </Pie>
                        <Tooltip content={renderCustomTooltip} />
                    </PieChart>
                    {renderCustomLegend(data, totalDuration)}
                </div>
            )}
        </div>
    )
}

export default PieDataChart
