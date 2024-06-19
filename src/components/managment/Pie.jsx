import { useState } from "react";
import style from "../../styles/Managment.module.css";
import { downloadDivContentAsPDF } from "../../utils/exportFunctions";
import { formatDuration } from "../../utils/dates";
import { PieChart, Pie, Tooltip, Cell } from "recharts";
import pdf from "../../assets/pdf.png";

const COLORS = ["#1d3557", "#457b9d", "#a8dadc", "#f1faee"];

const PieDataChart = ({
    IDPie,
    title,
    chartData,
    yAxisLabel,
    totalDuration,
}) => {
    const [pieHeight, setPieHeight] = useState(500);
    const [pieVisible, setPieVisible] = useState(true);

    const togglePieVisibility = () => {
        setPieVisible(!pieVisible);
        setPieHeight(pieVisible ? 0 : 500);
    };

    let keyField = "Motif";
    let valueField = "Durée";
    if (title === "déchets" || title === "NC") {
        valueField = "Quantité (KG)";
    }

    const convertDurationToSeconds = (chartData) => {
        const modifiedChartData = chartData.map((data) => {
            const durationParts = data.Durée.split(":");
            const durationInSeconds =
                parseInt(durationParts[0]) * 3600 +
                parseInt(durationParts[1]) * 60 +
                parseInt(durationParts[2]);
            return { ...data, Durée: durationInSeconds };
        });
        return modifiedChartData;
    };

    if (valueField == "Durée") {
        chartData = convertDurationToSeconds(chartData);
    }

    const renderCustomTooltip = ({ active, payload }) => {
        if (!payload || payload.length === 0) {
            return null;
        }

        let value = payload[0].value;

        if (active) {
            return (
                <div
                    style={{
                        backgroundColor: "#ffffff",
                        border: "1px solid #cccccc",
                        padding: "5px",
                        fontSize: "12px",
                    }}
                >
                    <div>
                        <p>{`${keyField}: ${payload[0].payload.Motif}`}</p>
                        <p>{`${yAxisLabel}: ${
                            valueField == "Durée"
                                ? formatDuration(value)
                                : value
                        }`}</p>{" "}
                    </div>
                </div>
            );
        }
        return null;
    };

    if (!chartData || chartData.length === 0) {
        return null;
    }

    const sortedChartData = [...chartData].sort(
        (a, b) => b[valueField] - a[valueField]
    );

    const top5ChartData = sortedChartData.slice(0, 5);

    const renderCustomLegend = (chartData, totalDuration) => {
        return (
            <div style={{ display: "flex", flexWrap: "wrap", width: "100%" }}>
                {top5ChartData.map((entry, index) => {
                    let percentage =
                        totalDuration > 0
                            ? (
                                  (entry[valueField] / totalDuration) *
                                  100
                              ).toFixed(2)
                            : 0;

                    return (
                        <div
                            key={`legend-${index}`}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                width: "50%",
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
                            ></div>
                            <p
                                style={{ fontSize: "12px" }}
                            >{`${entry[keyField]}: ${percentage}%`}</p>
                        </div>
                    );
                })}
            </div>
        );
    };

    return (
        <div
            className={`${style.chart} export-item`}
            style={{ height: pieHeight + "px" }}
            id={IDPie}
        >
            <h3 className={style.chartHeader}>
                Pie {title}
                <span
                    className={style.spanB}
                    onClick={() => downloadDivContentAsPDF(IDPie)}
                >
                    <img src={pdf} alt="pdf" />
                </span>
                <span onClick={togglePieVisibility} className={style.toggle}>
                    {pieVisible ? "-" : "+"}
                </span>
            </h3>
            {pieVisible && (
                <div>
                    <PieChart width={300} height={300}>
                        <Pie
                            data={chartData}
                            cx={150}
                            cy={150}
                            labelLine={false}
                            outerRadius={100}
                            fill="#8884d8"
                            dataKey={`${valueField}`}
                        >
                            {chartData.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={COLORS[index % COLORS.length]}
                                />
                            ))}
                        </Pie>
                        <Tooltip content={renderCustomTooltip} />
                    </PieChart>
                    {pieVisible && renderCustomLegend(chartData, totalDuration)}
                </div>
            )}
        </div>
    );
};

export default PieDataChart;
