import { useState, lazy, Suspense } from 'react'
import style from '../../styles/Managment.module.css'
import Capitalize from '../../utils/strings'

const Pareto = lazy(() => import('./Pareto'))
const PieDataChart = lazy(() => import('./Pie'))

const ManagmentData = ({
    data,
    displayData,
    title,
    yAxisLabel,
    IDPareto,
    IDPie,
}) => {
    const [tableVisible, setTableVisible] = useState(true)

    const prepareChartData = (data, keyField, valueField) => {
        const chartData = {}
        data.forEach((item) => {
            if (!chartData[item[keyField]]) {
                chartData[item[keyField]] = 0
            }
            chartData[item[keyField]] += item[valueField]
        })
        const sortedData = Object.keys(chartData)
            .map((key) => ({ [keyField]: key, [valueField]: chartData[key] }))
            .sort((a, b) => b[valueField] - a[valueField])
        let totalDuration = 0
        sortedData.forEach((entry) => {
            totalDuration += entry[valueField]
            entry.cumulativePercentage = totalDuration
        })
        return sortedData
    }

    const calculateTotalDuration = (chartData) => {
        let totalDuration = 0
        chartData.forEach((entry) => {
            if (title === 'arrêts') {
                totalDuration += entry.Durée
            } else {
                totalDuration += entry.Quantité
            }
        })
        return totalDuration
    }

    const toggleTableVisibility = () => {
        setTableVisible(!tableVisible)
    }

    const renderTable = (tableData) => {
        return (
            <table
                border="1"
                cellPadding="5"
                cellSpacing="0"
                style={{
                    width: '100%',
                }}
            >
                <thead>
                    <tr>
                        {Object.keys(tableData.length ? tableData[0] : {}).map(
                            (heading, index) => (
                                <th key={index} style={{ fontSize: '0.4rem' }}>
                                    {Capitalize(heading)}
                                </th>
                            )
                        )}
                    </tr>
                </thead>
                <tbody>
                    {Object.values(tableData).map((dataItem, index) => (
                        <tr key={index}>
                            {Object.values(dataItem).map((value, idx) => (
                                <td key={idx}>
                                    {typeof value === 'number'
                                        ? value.toFixed(0)
                                        : value}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }

    if (!data?.table?.length) {
        return null
    }

    const chartData = prepareChartData(displayData, 'Motif', 'Durée')
    const totalDuration = calculateTotalDuration(chartData)

    return (
        <div className={style.Cont}>
            <h2 className={style.ManagmentDataH2}>Les {title} de production</h2>
            <div className={style.kpiCont}>
                <div className={style.ManagmentDataCharts}>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Pareto
                            IDPareto={IDPareto}
                            title={title}
                            yAxisLabel={yAxisLabel}
                            chartData={data.chart}
                        />
                    </Suspense>
                    <Suspense fallback={<div>Loading...</div>}>
                        <PieDataChart
                            IDPie={IDPie}
                            title={title}
                            yAxisLabel={yAxisLabel}
                            chartData={data.chart}
                            totalDuration={totalDuration}
                        />
                    </Suspense>
                </div>
                {/* <div className={style.tableData}>
                    <h3 className={style.tableHeader2}>
                        Tableau {title}
                        <span
                            onClick={toggleTableVisibility}
                            className={style.toggle}
                        >
                            {tableVisible ? '-' : '+'}
                        </span>
                    </h3>
                    {tableVisible && renderTable(data.table)}
                </div> */}
            </div>
        </div>
    )
}

export default ManagmentData
