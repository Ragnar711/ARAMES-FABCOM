import { lazy, Suspense } from 'react'
import style from '../../styles/Managment.module.css'

const Pareto = lazy(() => import('./Pareto'))
const PieDataChart = lazy(() => import('./Pie'))

const ManagmentData = ({ data = {}, title, yAxisLabel, IDPareto, IDPie }) => {
    // const [tableVisible, setTableVisible] = useState(true)

    const calculateTotalDuration = (data) => {
        let totalDuration = 0
        data.forEach((entry) => {
            if (title === 'arrêts') {
                totalDuration += entry.Durée
            } else {
                totalDuration += entry.Quantité
            }
        })
        return totalDuration
    }

    // const toggleTableVisibility = () => {
    //     setTableVisible(!tableVisible)
    // }

    // const renderTable = (data) => {
    //     return (
    //         <table
    //             border="1"
    //             cellPadding="5"
    //             cellSpacing="0"
    //             style={{
    //                 width: '100%',
    //             }}
    //         >
    //             <thead>
    //                 <tr>
    //                     {Object.keys(data.length ? data[0] : {}).map(
    //                         (heading, index) => (
    //                             <th key={index} style={{ fontSize: '0.4rem' }}>
    //                                 {Capitalize(heading)}
    //                             </th>
    //                         )
    //                     )}
    //                 </tr>
    //             </thead>
    //             <tbody>
    //                 {Object.values(data).map((dataItem, index) => (
    //                     <tr key={index}>
    //                         {Object.values(dataItem).map((value, idx) => (
    //                             <td key={idx}>
    //                                 {typeof value === 'number'
    //                                     ? value.toFixed(0)
    //                                     : value}
    //                             </td>
    //                         ))}
    //                     </tr>
    //                 ))}
    //             </tbody>
    //         </table>
    //     )
    // }

    const totalDuration = calculateTotalDuration(data?.chart ?? [])
    // const tableData = data?.table?.slice(0, 10) ?? []

    if (data?.chart?.length === 0) {
        return null
    }

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
                            data={data?.chart ?? []}
                        />
                    </Suspense>
                    <Suspense fallback={<div>Loading...</div>}>
                        <PieDataChart
                            IDPie={IDPie}
                            title={title}
                            yAxisLabel={yAxisLabel}
                            data={data?.chart ?? []}
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
                    {tableVisible && renderTable(tableData)}
                </div> */}
            </div>
        </div>
    )
}

export default ManagmentData
