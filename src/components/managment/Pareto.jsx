import { useState } from "react";
import style from "../../styles/Managment.module.css";
import { downloadDivContentAsPDF } from "../../utils/exportFunctions";
import { formatDuration } from "../../utils/dates";
import {
    Tooltip,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Label,
    ReferenceLine,
    ComposedChart,
} from "recharts";
import pdf from "../../assets/pdf.png";

const Pareto = ({ IDPareto, title, yAxisLabel, chartData }) => {
    const [paretoHeight, setParetoHeight] = useState(500);

    const [paretoVisible, setParetoVisible] = useState(true);

    const toggleParetoVisibility = () => {
        setParetoVisible(!paretoVisible);
        setParetoHeight(paretoVisible ? 0 : 500);
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
                                ? formatDuration(payload[0].value)
                                : payload[0].value
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

    return (
        <div
            style={{ height: paretoHeight + "px" }}
            className={`${style.chart} export-item`}
            id={IDPareto}
        >
            <h3 className={style.chartHeader}>
                Pareto {title}
                <span
                    className={style.spanB}
                    onClick={() => downloadDivContentAsPDF(IDPareto)}
                >
                    <img src={pdf} alt="pdf" />
                </span>
                <span className={style.toggle} onClick={toggleParetoVisibility}>
                    {paretoVisible ? "-" : "+"}
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
                        tickFormatter={(value) => `${value}`}
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
    );
};

export default Pareto;
