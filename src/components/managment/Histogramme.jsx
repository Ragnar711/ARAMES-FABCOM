import { PureComponent } from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    ReferenceLine,
} from "recharts";

export const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload?.length) {
        return (
            <div
                className="custom-tooltip"
                style={{
                    backgroundColor: "#ffffff",
                    padding: "5px",
                    border: "1px solid #cccccc",
                }}
            >
                <p style={{ fontSize: "10px" }}>{`Date: ${label}`}</p>
                {payload.map((item, index) => (
                    <p
                        key={index}
                        style={{ color: item.color, fontSize: "10px" }}
                    >{`${item.name}: ${item.value.toFixed(2)}`}</p>
                ))}
            </div>
        );
    }
    return null;
};

const CustomLegend = ({ payload, barsVisibility, onClick }) => {
    return (
        <ul
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "25%",
                padding: 0,
                marginBlock: 0,
                marginInline: "auto",
            }}
        >
            {payload.map((entry, index) => (
                <li
                    key={`item-${index}`}
                    onClick={() => onClick(entry)}
                    style={{
                        textDecoration: "none",
                        color: barsVisibility[entry.dataKey]
                            ? "#cccccc"
                            : entry.color,
                        fontSize: "10px",
                    }}
                >
                    {entry.value}
                </li>
            ))}
        </ul>
    );
};

export default class Histo extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            barsVisibility: {
                TP: true,
                TQ: true,
                TD: true,
                TRS: true,
            },
        };
    }
    handleLegendClick = (e) => {
        const { dataKey } = e;
        this.setState((prevState) => ({
            barsVisibility: {
                ...prevState.barsVisibility,
                [dataKey]: !prevState.barsVisibility[dataKey],
            },
        }));
    };
    render() {
        const { barsVisibility } = this.state;
        const { displayData } = this.props;
        const last7DaysData = displayData.slice(-7);
        return (
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    width={500}
                    height={300}
                    data={last7DaysData}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="Date" fontSize={10} />
                    <YAxis fontSize={10} tick={true} />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend
                        content={
                            <CustomLegend
                                barsVisibility={barsVisibility}
                                onClick={this.handleLegendClick}
                            />
                        }
                    />
                    <Bar
                        dataKey="TQ (%)"
                        fill={
                            barsVisibility["TQ (%)"] ? "transparent" : "#1d3557"
                        }
                    />
                    <Bar
                        dataKey="TD (%)"
                        fill={
                            barsVisibility["TD (%)"] ? "transparent" : "#457b9d"
                        }
                    />
                    <Bar
                        dataKey="TP (%)"
                        fill={
                            barsVisibility["TP (%)"] ? "transparent" : "#a8dadc"
                        }
                    />
                    <Bar
                        dataKey="TRS (%)"
                        fill={
                            barsVisibility["TRS (%)"]
                                ? "transparent"
                                : "#b7dabc"
                        }
                    />
                    <ReferenceLine y={95} stroke="red" />
                </BarChart>
            </ResponsiveContainer>
        );
    }
}
