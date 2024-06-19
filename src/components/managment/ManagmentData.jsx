import { useState, lazy, Suspense } from "react";

const Pareto = lazy(() => import("./Pareto"));
const PieDataChart = lazy(() => import("./Pie"));

import Loader from "../Loader";

import style from "../../styles/Managment.module.css";

import Capitalize from "../../utils/strings";

const ManagmentData = ({
    data,
    displayData,
    title,
    yAxisLabel,
    IDPareto,
    IDPie,
}) => {
    const [tableVisible, setTableVisible] = useState(true);

    const prepareChartData = (data, keyField, valueField) => {
        const chartData = {};
        data.forEach((item) => {
            if (!chartData[item[keyField]]) {
                chartData[item[keyField]] = 0;
            }
            chartData[item[keyField]] += item[valueField];
        });
        const sortedData = Object.keys(chartData)
            .map((key) => ({ [keyField]: key, [valueField]: chartData[key] }))
            .sort((a, b) => b[valueField] - a[valueField]);
        let totalDuration = 0;
        sortedData.forEach((entry) => {
            totalDuration += entry[valueField];
            entry.cumulativePercentage = totalDuration;
        });
        return sortedData;
    };

    let keyField = "Motif";
    let valueField = "Durée";

    if (title === "déchets" || title === "NC") {
        valueField = "Quantité (KG)";
    }

    const chartData = prepareChartData(displayData, keyField, valueField);

    let totalDuration = 0;

    chartData.forEach((entry) => {
        if (title === "arrêts") {
            const duratiomParts = entry.Durée.split(":");
            const durationInSeconds =
                duratiomParts[0] * 3600 +
                duratiomParts[1] * 60 +
                parseFloat(duratiomParts[2]);
            totalDuration += durationInSeconds;
        } else {
            totalDuration += entry["Quantité (KG)"];
        }
    });

    const toggleTableVisibility = () => {
        setTableVisible(!tableVisible);
    };

    data = data === null ? { chart: [], table: [] } : data;

    if (!data.table || data.table.length === 0) {
        return null;
    }

    return (
        <div className={style.Cont}>
            <h2 className={style.ManagmentDataH2}>Les {title} de production</h2>
            <div className={style.kpiCont}>
                <div className={style.ManagmentDataCharts}>
                    <Suspense fallback={<Loader />}>
                        <Pareto
                            IDPareto={IDPareto}
                            title={title}
                            yAxisLabel={yAxisLabel}
                            chartData={data.chart}
                        />
                    </Suspense>
                    <Suspense fallback={<Loader />}>
                        <PieDataChart
                            IDPie={IDPie}
                            title={title}
                            yAxisLabel={yAxisLabel}
                            chartData={data.chart}
                            totalDuration={totalDuration}
                        />
                    </Suspense>
                </div>
                <div className={style.tableData}>
                    <h3 className={style.tableHeader2}>
                        Tableau {title}
                        <span
                            onClick={toggleTableVisibility}
                            className={style.toggle}
                        >
                            {tableVisible ? "-" : "+"}
                        </span>
                    </h3>
                    {tableVisible && (
                        <table
                            border="1"
                            cellPadding="5"
                            cellSpacing="0"
                            style={{
                                width: "100%",
                            }}
                        >
                            <thead>
                                <tr>
                                    {Object.keys(
                                        data.table.length ? data.table[0] : {}
                                    ).map((heading, index) => (
                                        <th key={index}>
                                            {Capitalize(heading)}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {Object.values(data.table).map(
                                    (dataItem, index) => (
                                        <tr key={index}>
                                            {Object.values(dataItem).map(
                                                (value, idx) => (
                                                    <td key={idx}>
                                                        {typeof value ===
                                                        "number"
                                                            ? value.toFixed(0)
                                                            : value}
                                                    </td>
                                                )
                                            )}
                                        </tr>
                                    )
                                )}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ManagmentData;
