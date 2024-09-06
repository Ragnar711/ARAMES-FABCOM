import { useState, lazy, Suspense } from 'react'
import style from '../../styles/Managment.module.css'
import pdfIcon from '../../assets/pdf.png'
import Capitalize from '../../utils/strings'
import { printAsPdf } from '../../utils/exportFunctions'

const Histo = lazy(() => import('./Histogramme'))
const LineC = lazy(() => import('./LineChart'))

const ManagmentKPI = ({ data }) => {
    const [histoHeight, setHistoHeight] = useState(400)
    const [lineHeight, setLineHeight] = useState(400)
    const [histoVisible, setHistoVisible] = useState(true)
    const [lineVisible, setLineVisible] = useState(true)
    const [tableVisible, setTableVisible] = useState(true)

    const toggleHistoVisibility = () => {
        setHistoVisible(!histoVisible)
        setHistoHeight(histoVisible ? 0 : 400)
    }

    const toggleLineVisibility = () => {
        setLineVisible(!lineVisible)
        setLineHeight(lineVisible ? 0 : 400)
    }

    const toggleTableVisibility = () => {
        setTableVisible(!tableVisible)
    }

    const renderChart = (chartType, displayData) => {
        let toggleButtonContent
        if (chartType === 'histo') {
            toggleButtonContent = histoVisible ? '-' : '+'
        } else {
            toggleButtonContent = lineVisible ? '-' : '+'
        }
        return (
            <div
                className={`${style.chart} export-item`}
                id={chartType}
                style={{
                    height:
                        chartType === 'histo'
                            ? histoHeight + 'px'
                            : lineHeight + 'px',
                }}
            >
                <h3 className={style.chartHeader}>
                    {chartType === 'histo'
                        ? 'Histogramme KPI'
                        : 'Graphique KPI'}{' '}
                    <span className={style.spanB}>
                        <img
                            src={pdfIcon}
                            alt="pdf"
                            onClick={() => printAsPdf(chartType)}
                            width={40}
                            height={40}
                        />
                    </span>
                    <span
                        className={style.toggle}
                        onClick={
                            chartType === 'histo'
                                ? toggleHistoVisibility
                                : toggleLineVisibility
                        }
                    >
                        {toggleButtonContent}
                    </span>
                </h3>
                {chartType === 'histo' ? (
                    <Suspense fallback={<div>Loading...</div>}>
                        <Histo displayData={displayData} />
                    </Suspense>
                ) : (
                    <Suspense fallback={<div>Loading...</div>}>
                        <LineC displayData={displayData} />
                    </Suspense>
                )}
            </div>
        )
    }

    const renderTable = () => {
        return (
            <div className={style.tableKPI}>
                <h3 className={style.tableHeader2}>
                    Tableau KPI{' '}
                    <span
                        className={style.toggle}
                        onClick={toggleTableVisibility}
                    >
                        {tableVisible ? '-' : '+'}
                    </span>
                </h3>
                {tableVisible && (
                    <table border="1" cellPadding="5" cellSpacing="0">
                        <thead>
                            <tr>
                                {Object.keys(data.length ? data[0] : {}).map(
                                    (heading, index) => (
                                        <th
                                            key={index}
                                            style={{ fontSize: '0.4rem' }}
                                        >
                                            {Capitalize(heading)}
                                        </th>
                                    )
                                )}
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((dataItem, index) => (
                                <tr key={index}>
                                    {Object.values(dataItem).map(
                                        (value, idx) => (
                                            <td key={idx}>
                                                {typeof value === 'number'
                                                    ? `${value.toFixed(0)} %`
                                                    : value}
                                            </td>
                                        )
                                    )}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        )
    }

    return (
        <div className={style.Cont}>
            <h2 className={style.ManagmentDataH2}>
                Les indicateurs de performance
            </h2>
            <div className={style.kpiCont}>
                <div className={style.ManagmentKPICharts}>
                    {renderChart('histo', data)}
                    {renderChart('lineChart', data)}
                </div>
                {renderTable()}
            </div>
        </div>
    )
}

export default ManagmentKPI
